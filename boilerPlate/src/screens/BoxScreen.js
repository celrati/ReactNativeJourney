import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';


const BoxScreen = () => {

    const [colors, setColors] = useState([]);
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle1}> Child1</Text>
        <Text style={styles.textStyle2}> Child2</Text>
        <Text style={styles.textStyle3}> Child3</Text>

    </View>
};



const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 200
    },
    textStyle1:{
        borderWidth: 3,
        borderColor: 'red',
        flex:1
    },
    textStyle2:{
        borderWidth: 3,
        borderColor: 'red',
        flex:1,
        alignSelf: 'flex-start'
    },
    textStyle3:{
        borderWidth: 3,
        borderColor: 'red',
        flex:1

    }
});

export default BoxScreen;