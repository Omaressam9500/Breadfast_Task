import React, { FC, forwardRef } from "react";
import {
  Animated,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { Colors, Pixel, ScreenOptions } from "../constants/styleConstants";

interface containerProps {
  children?: JSX.Element[] | JSX.Element;
  style?: StyleProp<ViewStyle>;
}

interface contentProps {
  noPadding?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  paddingVertical?: boolean;
  children?: JSX.Element[] | JSX.Element;
  options?: ScrollViewProps;
  onScroll?: any;
  ref?: any;
}

export const Container: FC<containerProps> = ({ children, style }) => {
  return (
    <View
      style={[{ flex: 1, backgroundColor: Colors.screenBackgroundColor, paddingTop: ScreenOptions.StatusBarHeight, }, style]}>
      {children}
    </View>
  );
};

export const Content: FC<contentProps> = forwardRef(
  (
    {
      children,
      noPadding,
      style,
      contentContainerStyle,
      paddingVertical,
      options,
    },
    ref,
  ) => {
    return (
      <ScrollView
        ref={ref}
        style={style}
        contentContainerStyle={[
          paddingVertical && { paddingVertical: Pixel(30) },
          contentContainerStyle,
        ]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...options}>
        <View style={{ paddingHorizontal: noPadding ? undefined : Pixel(20) }}>
          {children}
        </View>
      </ScrollView>
    );
  },
);
