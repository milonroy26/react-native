import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function FundamentalsfStylesheet() {

    const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello Wold text !</Text>
    </View>
  )
}


// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  whiteText: {
    color: "#FFFFFF",
  },

  darkText: {
    color: "#000000",
  },
})


