import { Dimensions } from 'react-native';

export type ScreenInfo = {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  orientation: 'portrait' | 'landscape';
  breakpoint: 'small' | 'medium' | 'large';
};

const SMALL_WIDTH = 320;
const MEDIUM_WIDTH = 768;

class ScreenUtils {
  static get screen(): ScreenInfo {
    const { width, height, scale, fontScale } = Dimensions.get('window');
    const orientation = width > height ? 'landscape' : 'portrait';
    const breakpoint =
      width <= SMALL_WIDTH
        ? 'small'
        : width <= MEDIUM_WIDTH
        ? 'medium'
        : 'large';

    return { width, height, scale, fontScale, orientation, breakpoint };
  }

  /** Convenience getters */
  static isPortrait() {
    return this.screen.orientation === 'portrait';
  }

  static isLandscape() {
    return this.screen.orientation === 'landscape';
  }

  static windowWidth = Dimensions.get('window').width;
  static screenWidth = Dimensions.get('screen').width;

  static screenHeight = Dimensions.get('screen').height;
  static windowHeight = Dimensions.get('window').height;
}

export default ScreenUtils;
