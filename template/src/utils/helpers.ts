const Helper = {
  generateUUID: (): string => {
    const hexOctet: string = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    return `${
      hexOctet + hexOctet
    }-${hexOctet}-${hexOctet}-${hexOctet}-${hexOctet}${hexOctet}${hexOctet}`;
  },
  getHitSlop: (hitSlop: number = 5) => ({
    left: hitSlop,
    right: hitSlop,
    bottom: hitSlop,
    top: hitSlop,
  }),
};

export default Helper;
