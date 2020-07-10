import * as posenet from '@tensorflow-models/posenet';

export const loadPosenetModelAsync = async (
  inputTensorWidth: number,
  inputTensorHeight: number,
) => {
  const model = await posenet.load({
    architecture: 'MobileNetV1',
    outputStride: 16,
    inputResolution: {width: inputTensorWidth, height: inputTensorHeight},
    multiplier: 0.75,
    quantBytes: 2,
  });
  return model;
};
