import AsyncStorage from '@react-native-community/async-storage';

const Helper = {
  generateInstallationId: (): string => {
    const hexOctet: string = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    return `${
      hexOctet + hexOctet
    }-${hexOctet}-${hexOctet}-${hexOctet}-${hexOctet}${hexOctet}${hexOctet}`;
  },
  getAuthToken: () => {
    return AsyncStorage.getItem('token');
  },
  removeAuthToken: () => {
    return AsyncStorage.removeItem('token');
  },
};

export default Helper;
