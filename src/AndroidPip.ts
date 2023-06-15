import { NativeEventEmitter, NativeModules, Platform } from 'react-native'

class AndroidPip {
  EventEmitter: NativeEventEmitter | null;

  constructor() {
    this.EventEmitter =
      Platform.OS === 'android'
        ? new NativeEventEmitter(NativeModules.RNAndroidPip)
        : null;
  }

  onPipModeChanged(listener: (isModeEnabled: Boolean) => void) {
    return this?.EventEmitter?.addListener('PIP_MODE_CHANGE', listener);
  }

  enableAutoPipSwitch() {
    return NativeModules?.RNAndroidPip?.enableAutoPipSwitch();
  }

  disableAutoPipSwitch() {
    return NativeModules?.RNAndroidPip?.disableAutoPipSwitch();
  }

  configureAspectRatio(width: number, height: number) {
    return NativeModules?.RNAndroidPip?.configureAspectRatio(
      Math.floor(width),
      Math.floor(height)
    );
  }

  enterPictureInPictureMode(width?: number, height?: number) {
    return NativeModules?.RNAndroidPip?.enterPictureInPictureMode();
  }
}

export default new AndroidPip();