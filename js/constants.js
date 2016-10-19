import {
    Platform
} from 'react-native';

export const statusBarHeight = Platform.OS === 'ios' ? 20 : 25
export const navBarHeight = Platform.OS === 'ios' ? 44 : 20