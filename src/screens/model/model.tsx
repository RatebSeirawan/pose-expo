/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {StyleSheet, View, Platform, ViewStyle, Dimensions, TouchableOpacity} from 'react-native';

import * as Permissions from 'expo-permissions';
import {Camera} from 'expo-camera';
import {ExpoWebGLRenderingContext} from 'expo-gl';

import {Text, Flex, Screen} from 'components/index';
import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import {cameraWithTensors} from '@tensorflow/tfjs-react-native';
import {Pose} from './pose';
import {isNil} from 'ramda';
import {loadPosenetModelAsync} from './loadModelAsync';

const {width: WIDTH, height: HEAIGHT} = Dimensions.get('screen');

interface ScreenProps {
  returnToMain: () => void;
}

interface ScreenState {
  hasCameraPermission?: boolean;
  cameraType: any;
  isLoading: boolean;
  posenetModel?: posenet.PoseNet;
  pose?: posenet.Pose;
  faceDetector?: any;
}

const inputTensorWidth = 152;
const inputTensorHeight = 200;

const AUTORENDER = true;

const TensorCamera = cameraWithTensors(Camera);

export class ModelScreen extends React.Component<ScreenProps, ScreenState> {
  rafID?: number;

  constructor(props: ScreenProps) {
    super(props);
    this.state = {
      isLoading: true,
      cameraType: Camera.Constants.Type.front,
    };
    this.handleImageTensorReady = this.handleImageTensorReady.bind(this);
  }

  async handleImageTensorReady(
    images: IterableIterator<tf.Tensor3D>,
    updatePreview: () => void,
    gl: ExpoWebGLRenderingContext,
  ) {
    const loop = async () => {
      if (!AUTORENDER) {
        updatePreview();
      }

      if (!isNil(this.state.posenetModel)) {
        const imageTensor = images.next().value;
        const flipHorizontal = Platform.OS === 'ios' ? false : true;
        const pose = await this.state.posenetModel.estimateSinglePose(imageTensor, {
          flipHorizontal,
        });
        this.setState({pose});
        tf.dispose([imageTensor]);
      }

      if (!AUTORENDER) {
        gl.endFrameEXP();
      }
      this.rafID = requestAnimationFrame(loop);
    };

    loop();
  }

  componentWillUnmount() {
    if (this.rafID) {
      cancelAnimationFrame(this.rafID);
    }
  }

  async componentDidMount() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);

    const posenetModel = await loadPosenetModelAsync(inputTensorWidth, inputTensorHeight);

    this.setState({
      hasCameraPermission: status === 'granted',
      isLoading: false,
      posenetModel,
    });
  }

  render() {
    const {isLoading} = this.state;

    let textureDims: {width: number; height: number};
    if (Platform.OS === 'ios') {
      textureDims = {
        height: 1920,
        width: 1080,
      };
    } else {
      textureDims = {
        height: 1200,
        width: 1600,
      };
    }

    return (
      <Screen>
        {isLoading ? (
          <Flex justify="center" align="center" flex={0.6}>
            <Text preset="display1">{'Loading model...'}</Text>
            <Text preset="default">{'This will take a minute'}</Text>
          </Flex>
        ) : (
          <View style={CAMERA_CONTAINER}>
            <TensorCamera
              style={CAMERA}
              type={this.state.cameraType}
              zoom={0}
              cameraTextureHeight={textureDims.height}
              cameraTextureWidth={textureDims.width}
              resizeHeight={inputTensorHeight}
              resizeWidth={inputTensorWidth}
              resizeDepth={3}
              onReady={this.handleImageTensorReady}
              autorender={AUTORENDER}
            />
            <View style={MODE_RESULT}>
              <Pose
                inputTensorHeight={inputTensorHeight}
                inputTensorWidth={inputTensorWidth}
                pose={this.state.pose}
              />
            </View>
            <TouchableOpacity
              style={{
                position: 'absolute',
                zIndex: 200,
                bottom: 24,
                left: WIDTH / 2 - 30,
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.7}
              onPress={() => {
                this.setState({cameraType: this.state.cameraType === 'front' ? 'back' : 'front'});
              }}>
              <Text style={{color: 'black'}}>{'Flip'}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Screen>
    );
  }
}

const CAMERA_CONTAINER = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
} as ViewStyle;

const CAMERA = {
  ...StyleSheet.absoluteFillObject,
  width: WIDTH,
  height: HEAIGHT,
  zIndex: 3,
} as ViewStyle;

const MODE_RESULT = {
  ...StyleSheet.absoluteFillObject,
  width: WIDTH,
  height: HEAIGHT,
  zIndex: 20,
} as ViewStyle;
