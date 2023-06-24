import React, { useState } from 'react';
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

function Rest(): JSX.Element {
  const [data, setData] = useState(null);

  const getServicio = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(async (res) => {
      const resultado = await res.json();
      setData(resultado.base_experience)
    })
  }

  return (
    <View>
      <Text>Tu hiciste {count} clicks</Text>
    </View>
  );
}

export default Hook;