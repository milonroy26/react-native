import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function ProjectFore() {

    const [randormBackground, setRandomBackground] = useState("#222222");

    const generateColor = () => {
        const hexRange = "0123456789ABCDEF";

        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)];
        }
        setRandomBackground(color);
    }

    return (
        <>
            <StatusBar backgroundColor={randormBackground} />
            <View style={[styles.container]}>

                <View style={[styles.ColorCodeBox, { backgroundColor: randormBackground }]}>
                    <Text selectable={true} style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Hex:   {randormBackground}</Text>
                </View>

                <TouchableOpacity onPress={generateColor}>
                    <View style={styles.actionBtn}>
                        <Text style={styles.actionBtnText}>Press me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionBtn: {
        width: 100,
        height: 100,
        backgroundColor: '#50DBB4',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    ColorCodeBox: {
        width: 300,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderWidth: 1,
    }
})