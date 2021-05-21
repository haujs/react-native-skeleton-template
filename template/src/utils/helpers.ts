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
  /**
   * Calculate Lighter or Darker Hex Colors
   *
   * ```
   * Helper.colorLuminance("#69c", 0);		// returns "#6699cc"
   * Helper.colorLuminance("6699CC",0 , 0.2);	// "#6699cc33" - set 20% alpha transparence to #6699cc
   * Helper.colorLuminance("6699CC", 0.2);	// "#7ab8f5" - 20% lighter
   * Helper.colorLuminance("69C", -0.5);	// "#334d66" - 50% darker
   * Helper.colorLuminance("000", 1);		// "#000000" - true black cannot be made lighter!
   * ```
   */
  colorLuminance: (hex: string, lum: number, opacity?: number): string => {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    // convert to decimal and change luminosity
    let rgb = '#',
      c,
      i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
      rgb += ('00' + c).substr(c.length);
    }
    if (opacity) {
      const intValue = Math.round(opacity * 255);
      const hexValue = intValue.toString(16);
      return rgb + hexValue.padStart(2, '0');
    }
    return rgb;
  },
};

export default Helper;
