import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity  } from 'react-native';

const Card = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/Card.png')} style={styles.image} />
                </View>
            </TouchableOpacity>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginBottom: 0,
        // padding: 25, 
    },
    imgContainer: {
        // flex: 1,
        padding:25,
        // marginBottom: 0,
    },
});

export default Card;