import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard(
    {bestImage}: {bestImage: string}
) {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
            style={styles.cardImage}
            source={{uri: bestImage}}
        />

        <View style={styles.cardBody}>
            <Text style={styles.title}>Beautiful and dramatic London</Text>
            <Text style={styles.subtitle}>See how London----</Text>
            <Text style={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam consectetur quibusdam praesentium? Id, quibusdam dolore.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 8
    },

    card: {
        width: 350,
        height: 360,
        borderRadius: 7,
        marginVertical: 4,
        padding: 2,
    },

    cardElevated: {
        backgroundColor: '#f1f1f1',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },

    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },

    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },

    title: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },

    subtitle:{
        color: '#000000',
        fontSize: 14,
        marginBottom: 6,
    },

    description: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6
    },

    cardFooter: {
        color: 'navy',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 4,
        textAlign: 'right',
    },
})