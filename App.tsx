/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  LogBox,
  useColorScheme,
  View,
} from 'react-native';

import FlashMessage from 'react-native-flash-message';

import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./src/navigation/Navigation";
import { Pixel, ScreenOptions } from './src/constants/styleConstants';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const queryClient = new QueryClient();
LogBox.ignoreAllLogs();

function App(): JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle="dark-content"
      />
      <Navigation />
      <FlashMessage
        position="top"
        hideOnPress={true}
        style={{
          paddingTop: 10,
          marginTop: Platform.OS === "android" ? ScreenOptions.StatusBarHeight + Pixel(7) : Pixel(15),
        }}
        
        floating
      />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
