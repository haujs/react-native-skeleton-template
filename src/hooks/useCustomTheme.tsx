import { useTheme } from '@react-navigation/native';
import { ITheme } from '@theme/index';

const useCustomTheme = () => {
  const theme = useTheme() as ITheme;
  return theme;
};

export default useCustomTheme;
