//Project Password Generator

//Form validation
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import { object, number } from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const passwordSchema = object().shape({
    passwordLength: number()
        .min(4, 'Password must be longer than 4 characters').max(16, 'Password must be shorter than 16 characters').required('Password is required'),
})

const ProjectThere = () => {
    const [password, setPassword] = useState('');
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

    const [lowercase, setLowercase] = useState(true);
    const [uppercase, setUppercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, useSymbols] = useState(false);

    // Generate password
    const generatePasswordString = (passwordLength: number) => {
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolsChars = '!@#$%^&*()_+';

        let characterList = '';

        if (uppercase) {
            characterList += upperCaseChars;
        }

        if (lowercase) {
            characterList += lowerCaseChars;
        }

        if (numbers) {
            characterList += numberChars;
        }

        if (symbols) {
            characterList += symbolsChars;
        }

        const passwordResult = createPassword(characterList, passwordLength);

        setPassword(passwordResult);
        setIsPasswordGenerated(true);
    }

    // Create password
    const createPassword = (chareacters: string, passwordLength: number) => {

        let result = '';
        for (let i = 0; i < passwordLength; i++) {
            const chareacterIndex = Math.round(Math.random() * chareacters.length);
            result += chareacters.charAt(chareacterIndex);
        }
        return result;
    }

    // Reset password
    const resetPasswordstate = () => {
        setPassword('');
        setIsPasswordGenerated(false);
        setLowercase(true);
        setUppercase(false);
        setNumbers(false);
        useSymbols(false);
    }

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.appContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Password Generator</Text>
                    {/* Form */}
                    <Formik
                        initialValues={{ passwordLength: '' }}
                        validationSchema={passwordSchema}
                        onSubmit={values => {
                            generatePasswordString(+values.passwordLength)
                        }}>
                        {({
                            values,
                            errors,
                            touched,
                            isValid,
                            handleChange,
                            handleSubmit,
                            handleReset,
                            /* and other goodies */
                        }) => (
                            <>
                                <View style={styles.inputWrapper}>
                                    <View style={styles.inputColumn}>
                                        <Text style={styles.heading}>Password Length</Text>
                                        {touched.passwordLength && errors.passwordLength && (
                                            <Text style={styles.errorText}>
                                                {errors.passwordLength}
                                            </Text>
                                        )}
                                    </View>
                                    <TextInput
                                        style={styles.inputStyle}
                                        value={values.passwordLength}
                                        onChangeText={handleChange('passwordLength')}
                                        placeholder="Ex. 8"
                                        keyboardType='numeric'
                                    />
                                </View>

                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>Include lowercase</Text>
                                    <View>
                                        <BouncyCheckbox
                                            useBuiltInState
                                            isChecked={lowercase}
                                            onPress={() => setLowercase(!lowercase)}
                                            fillColor="#29AB87"
                                        />
                                    </View>
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>Include Uppercase letters</Text>
                                    <View>
                                        <BouncyCheckbox
                                            useBuiltInState
                                            isChecked={uppercase}
                                            onPress={() => setUppercase(!uppercase)}
                                            fillColor="#FED85D"
                                        />
                                    </View>
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>Include Numbers</Text>
                                    <View>
                                        <BouncyCheckbox
                                            useBuiltInState
                                            isChecked={numbers}
                                            onPress={() => setNumbers(!numbers)}
                                            fillColor="#C9A0DC"
                                        />
                                    </View>
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>Include Symbols</Text>
                                    <View>
                                        <BouncyCheckbox
                                            useBuiltInState
                                            isChecked={symbols}
                                            onPress={() => useSymbols(!symbols)}
                                            fillColor="#FC80A5"
                                        />
                                    </View>
                                </View>
                                <View style={styles.formActions}>
                                    <TouchableOpacity
                                        disabled={!isValid}
                                        style={styles.primaryBtn}
                                        onPress={() => handleSubmit()}
                                    >
                                        <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.secondaryBtn}
                                        onPress={() => {
                                            handleReset();
                                            resetPasswordstate()
                                        }}
                                    >
                                        <Text style={styles.secondaryBtnTxt}>Reset</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
                {isPasswordGenerated ? (
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.subTitle}>Result:</Text>
                        <Text style={styles.description}>Long Press to copy</Text>
                        <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
                    </View>
                ) : null}
            </SafeAreaView>
        </ScrollView>
    )
}

export default ProjectThere

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    formContainer: {
        margin: 8,
        padding: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 2,
    },
    description: {
        color: '#758283',
        marginBottom: 8,
    },
    heading: {
        fontSize: 15,
    },
    inputWrapper: {
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputColumn: {
        flexDirection: 'column',
    },
    inputStyle: {
        padding: 8,
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
    errorText: {
        fontSize: 12,
        color: '#ff0d10',
    },
    formActions: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    primaryBtn: {
        width: "auto",
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#5DA3FA',
    },
    primaryBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    secondaryBtn: {
        width: "40%",
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#CAD5E2',
    },
    secondaryBtnTxt: {
        textAlign: 'center',
    },
    card: {
        padding: 12,
        borderRadius: 6,
        marginHorizontal: 12,
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    generatedPassword: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 12,
        color: '#000'
    },
});