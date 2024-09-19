import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>01</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>02</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>03</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>04</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>06</Text>
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10
    },

    container: {
        marginTop: 4,
    },

    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        backgroundColor: 'lightblue',
    },

    cardElevated: {
        backgroundColor: '#CAD%E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2
    }
})