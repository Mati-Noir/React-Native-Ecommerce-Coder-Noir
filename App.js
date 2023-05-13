import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {

  const [isPortrait, setIsPortrait] = useState(true)

  const statePortrait = () => setIsPortrait(onPortrait)

  const onPortrait = () => {
    const dim = Dimensions.get("screen")
    return dim.height > dim.width
  }

  useEffect(() => {
    Dimensions.addEventListener('change', statePortrait)
    return () => {
      Dimensions.removeEventListener('change', statePortrait)
    }
  }, [])

  const [loaded] = useFonts({
    OpenSansBold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
    OpenSansRegular: require('./src/assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!loaded) return null

  return (
    <ShopNavigator/>
/*     <View style={styles.container}>
      {
        isPortrait ?
          <Text style={styles.texto}>Vertical</Text>
          :
          <Text style={styles.texto2}>Horizontal</Text>
      }
      <StatusBar style="auto" />
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily: "OpenSansBold",
  },
  texto2: {
    fontFamily: "OpenSansRegular",
  }
  
});
