import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi there';
    const greeting2 = <Text> Hi 2</Text>;
    return <View>
                <Text style={styles.textStyle}> This is components screen !?</Text>
                <Text style={styles.subHeaderStyle}>{greeting}</Text>
                {greeting2}
            </View>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize : 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;