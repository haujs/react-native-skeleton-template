import {
  SHOW_BOTTOM_SHEET,
  HIDE_BOTTOM_SHEET,
  IShowBottomSheet,
} from './types';

const initialState = {
  isOpen: false,
  customProps: null,
};

export default (state = initialState, action: IShowBottomSheet) => {
  switch (action.type) {
    case SHOW_BOTTOM_SHEET:
      return {
        isOpen: true,
        customProps: action.payload || null,
      };
    case HIDE_BOTTOM_SHEET:
      return {
        isOpen: false,
        customProps: null,
      };
    default:
      return state;
  }
};
