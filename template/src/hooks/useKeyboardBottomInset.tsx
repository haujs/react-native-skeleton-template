import {useCallback} from 'react';
import {useEffect, useRef, useState} from 'react';
import {Keyboard, Platform, KeyboardEvent} from 'react-native';

export const useKeyboardBottomInset = () => {
  const [bottom, setBottom] = useState(0);
  const subscriptions = useRef<any[]>([]);

  const onKeyboardChange = useCallback((e: KeyboardEvent) => {
    if (
      e.startCoordinates &&
      e.endCoordinates.screenY < e.startCoordinates.screenY
    ) {
      setBottom(e.endCoordinates.height / 2);
    } else {
      setBottom(0);
    }
  }, []);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      subscriptions.current = [
        Keyboard.addListener('keyboardWillChangeFrame', onKeyboardChange),
      ];
    } else {
      subscriptions.current = [
        Keyboard.addListener('keyboardDidHide', onKeyboardChange),
        Keyboard.addListener('keyboardDidShow', onKeyboardChange),
      ];
    }
    return () => {
      subscriptions.current.forEach(subscription => {
        subscription.remove();
      });
    };
  }, [onKeyboardChange, setBottom, subscriptions]);

  return bottom;
};
