import { PropsWithChildren, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageSourcePropType,
    Image,
    Pressable
} from 'react-native';


import DiceOne from '../../../assets/images/One.png'
import DiceTwo from '../../../assets/images/Two.png'
import DiceThree from '../../../assets/images/Three.png'
import DiceFour from '../../../assets/images/Four.png'
import DiceFive from '../../../assets/images/Five.png'
import DiceSix from '../../../assets/images/Six.png'



type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
    return (
        <View>
            <Image style={styles.diceImage} source={imageUrl} />
        </View>
    )
}

export default function ProjectFive() {

    const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

    const rollDiceOnTap = () => {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        switch (randomNumber) {
            case 1: setDiceImage(DiceOne); break;
            case 2: setDiceImage(DiceTwo); break;
            case 3: setDiceImage(DiceThree); break;
            case 4: setDiceImage(DiceFour); break;
            case 5: setDiceImage(DiceFive); break;
            case 6: setDiceImage(DiceSix); break;
            default: setDiceImage(DiceOne);
        }
    }

    return (
        <View style={styles.container}>
            <Dice imageUrl={diceImage} />
            <Text>
                <Pressable style={styles.rollDiceBtnText} onPress={rollDiceOnTap}>
                    <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
                </Pressable>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF2F2',
    },
    diceContainer: {
        margin: 12,
    },
    diceImage: {
        width: 200,
        height: 200,
    },
    rollDiceBtnText: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#E5E0FF',
        fontSize: 16,
        color: '#8EA7E9',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});