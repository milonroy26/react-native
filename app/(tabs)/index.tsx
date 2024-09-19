import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import ProjectOne from '@/components/learn/ProjectOne/ProjectOne';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      {/* title */}
      {/* <ThemedText type="title">Welcome to React Native! </ThemedText>
      <FundamentalsfStylesheet /> */}

      {/* project one */}
      <ProjectOne />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({ 
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
