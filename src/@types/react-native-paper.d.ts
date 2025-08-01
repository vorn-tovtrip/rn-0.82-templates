// src/types/react-native-paper.d.ts
import 'react-native-paper';

declare module 'react-native-paper' {
  // Extend the colors type inside MD3Theme
  interface MD3Colors {
    text?: string;
    textSecondary?: string;
    // Add any custom keys you want
  }
}
