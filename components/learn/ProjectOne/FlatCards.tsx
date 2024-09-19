import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>

       <View style={styles.container}>
         <View style={[styles.card, styles.cardOne]}>
           <Text>Red</Text>
         </View>
         <View style={[styles.card, styles.cardTwo]}>
           <Text>Blue</Text>
         </View>
         <View style={[styles.card, styles.cardThree]}>
           <Text>Green</Text>
         </View>
         <View style={[styles.card, styles.cardThree]}>
           <Text>Green</Text>
         </View>
       </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },

    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 6,

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardOne:{
        backgroundColor: '#50DBB4'
    },
    cardTwo:{
        backgroundColor: '#50DBB4'
    },
    cardThree:{
        backgroundColor: '#5DA3FA'
    }
})