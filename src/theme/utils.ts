import {mergeAll, flatten} from 'ramda';

export const enhance = (params: any) => {
  return mergeAll(flatten([...params]));
};
