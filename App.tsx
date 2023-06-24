/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, 
} from 'react-native';
import Hook from './src/screem/hook';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  // const [hora, setHora] = new useState('');

  // useEffect(() => {
  //   calc();
  // });

  // const calc = () => {
  //   setTimeout(() => {
  //     setHora(new Date().toLocaleString());
  //   }, 5000);
  // };

  // return (
  //   <SafeAreaView style={{}}>
  //     <StatusBar barStyle={true ? 'light-content' : 'dark-content'} />
  //     <ScrollView>
  //       <Text>{hora}</Text>
  //     </ScrollView>
  //   </SafeAreaView>
  // );
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Tu hiciste {count} clicks</Text>
      <Hook/>
    </View>
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
