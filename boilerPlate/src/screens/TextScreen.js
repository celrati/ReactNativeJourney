import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () => {

    const [name, setName] = useState('');

    return <View>
        <Text>Enter Name :</Text>
        <TextInput style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}

        
        />

    </View>
};


const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding: 2
    }
});

export default TextScreen;