
import { Dimensions,  NativeModules } from 'react-native';

const { width, height } = Dimensions.get('screen');


export enum Colors {
  appBackgroundColor = '#ffffff',
  mainColor = '#e6fff3',
  screenBackgroundColor = '#F9F9FF',
  secondColor = '#2B4F77',
  dangerColor = '#E04F5F',
  mainTextColor = '#686868',
  secondTextColor = '#999999',
  white = '#FFFFFF',
  green = '#21AC17',
  black = '#000000',
  gray = '#0D0E10',
  warning = '#E04F5F',
  sacandAppBackgroundColor = '#F9F9F9',
  CommonBorderColor = '#EDEDED',
  placeHoldertxtColor = "#B3BBBB",
  inputBackground = '#FBFBFB',
  hintBackground = '#F4F7FD',
  primaryBlue = '#4785FE',
  diabledColor = '#BEBEBE',
  borderSecondColor = '#DDE9FF',
  lightRed = '#FCEEEF',
  stepColor = '#CCF2F0',
  light_blue = '#99D9F2',
  purpel = '#A97BF4',
  light_purpel = '#F9F5FF',
  yellow = '#FEA71C',
  mid_blue = "#729EF3",
  descTxt = "#4E76A2",
  greyTxt = "#64748B",
  textColor="#15294B",
  mainTitleColor='#9900cc'


}

export const Fonts = {
  medium: 'STC-Regular',
  regular: 'STC-Light',
  bold: "STC-Bold"
};

export enum Images { }



export enum ScreenOptions {
  StatusBarHeight = NativeModules.StatusBarManager.HEIGHT,
  HalfScreen = width / 2 - 15,
  CURRENT_RESOLUTION = Math.sqrt(height * height + width * width),
  DesignResolution = {
    width: 360,
    height: 720,
  } as any,
}

export const createPerfectPixel = (designSize = { width, height }) => {
  if (
    !designSize ||
    !designSize.width ||
    !designSize.height ||
    typeof designSize.width !== 'number' ||
    typeof designSize.height !== 'number'
  ) {
    throw new Error(
      'Invalid design size object! must have width and height fields of type Number.',
    );
  }
  const DESIGN_RESOLUTION = Math.sqrt(
    designSize.height * designSize.height + designSize.width * designSize.width,
  );
  const RESOLUTIONS_PROPORTION =
    ScreenOptions.CURRENT_RESOLUTION / DESIGN_RESOLUTION;

  return (size: number) => Math.floor(RESOLUTIONS_PROPORTION * size);
};

export const Pixel = (pixel: number) => {
  const Perfect = createPerfectPixel(ScreenOptions.DesignResolution as any);
  return Perfect(pixel);
};

