import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView  } from 'react-native';
import Transaction from './transaction';

const Buttons = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <TouchableOpacity>
                <View style={styles.image}>
                    <Image source={require('../assets/send.png')} />
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.image}>
                    <Image source={require('../assets/recieve.png')} />
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.image}>
                    <Image source={require('../assets/loan.png')} />
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.image}>
                    <Image source={require('../assets/topUp.png')} />
                </View>
                </TouchableOpacity>
            </View>

            <View style={styles.textContainer}>
                <View style={styles.textBox}>
                    <Text style={styles.text}>Sent</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.text}>Receive</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.text}>Loan</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.text}>Topup</Text>
                </View>
            </View>

            <ScrollView>
            <Transaction/>
            </ScrollView>

        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1.9,
        // flexDirection: 'row',
        // marginTop: -190,
        // padding: 25, 
    },
    imageContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    image: {
        backgroundColor: "#d1d1d1",
        height: 70,
        width: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textContainer: {
        // flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },
      textBox: {
       
      },
      text: {
        fontSize: 18
      },
});

export default Buttons;