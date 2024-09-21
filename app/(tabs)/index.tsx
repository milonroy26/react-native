import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import ProjectOne from '@/components/learn/ProjectOne/ProjectOne';
import ProjectThere from '@/components/learn/projectThere/ProjectThere';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/web_cover__mobil.jpg')}
          style={styles.reactLogo}
        />
      }>

      {/* title */}
      {/* <ThemedText type="title">Welcome to React Native! </ThemedText>
      <FundamentalsfStylesheet /> */}

      {/* project two*/}
      {/* <ProjectOne /> */}

      {/* project three */}
      <ProjectThere />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({ 
  reactLogo: {
    height: "100%",
    width: "100%",
    position: 'absolute', 
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",

  },
});
