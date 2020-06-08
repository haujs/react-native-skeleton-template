import {
  SHOW_BOTTOM_SHEET,
  HIDE_BOTTOM_SHEET,
  IShowBottomSheet,
} from './types';
import { showBottomSheet, hideBottomSheet } from './actions';
import { takeLeading } from 'redux-saga/effects';

function showBottomSheetRequest(action: IShowBottomSheet) {
  showBottomSheet(action.payload);
}

function hideBottomSheetRequest() {
  hideBottomSheet();
}

export const bottomSheet = [
  takeLeading(SHOW_BOTTOM_SHEET, showBottomSheetRequest),
  takeLeading(HIDE_BOTTOM_SHEET, hideBottomSheetRequest),
];
