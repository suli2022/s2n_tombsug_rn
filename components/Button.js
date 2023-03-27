/*
* File: Button.js
* Author: Erős István
* Copyright: 2023, Erős István
* Group: Szoft II N
* Date: 2023-03-27
* Github: https://github.com/erosistvan/
* Licenc: GNU GPL
*/
import React from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native'

const Button = (props) => {
  return (
    <TouchableHighlight 
    style={styles.button}
    onPress={props.onPress}
    >
        <Text style={styles.buttonText}>Számít</Text>
    </TouchableHighlight>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        width: '90%',
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },  
});