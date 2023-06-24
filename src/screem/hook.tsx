import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function Hook(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Tu hiciste {count} clicks</Text>
      <Button title="Clickeame" onPress={()=>{setCount(count+1)}}></Button>
    </View>
  );
}

export default Hook;
