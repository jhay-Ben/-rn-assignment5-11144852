import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native';


const Transaction = () => {
    const transactions = [
        { id: '1', title: 'Apple', subtitle: 'Entertainment', amount: '- $5,99', logo: require('../assets/apple.png') },
        { id: '2', title: 'Spotify', subtitle: 'Music', amount: '- $12,99', logo: require('../assets/spotify.png') },
        { id: '3', title: 'Money Transfer', subtitle: 'Transaction', amount: '$300', logo: require('../assets/moneyTransfer.png') },
        { id: '4', title: 'Grocery', subtitle: 'Shopping', amount: '- $88', logo: require('../assets/grocery.png') },
        { id: '5', title: 'Hmmm', subtitle: 'lol', amount: '- $88', logo: require('../assets/grocery.png') },
        
        
      ];
    return (
      
        <View style={styles.container}>
         
            <View style={styles.textContainer}>
                 <Text style={styles.transText}>Transaction</Text>
                 <Text style={styles.sellText}>Sell All</Text>
            </View>

            
           <View>
            {transactions.map(money => (
          <View key={money.id} style={styles.popularJobCard}>
            <View style={styles.transactionContainer}>
                <View style={styles.logoContainer}>
                    <Image source={money.logo} style={styles.companyLogo} />
                </View>

                <View style={styles.text2Container}>
                    <Text style={styles.title}>{money.title}</Text>
                    <Text style={styles.subtitle}>{money.subtitle}</Text> 
                </View>
            </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{money.amount}</Text>
                </View>
          </View>
        ))}
        </View>

        </View>
        
        
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // padding: 25, 
       
    },
    textContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    transText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    sellText: {
        fontSize: 18,
        color: '#0786db'
    },
    popularJobCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // // backgroundColor: '#f1f1f1',
        // borderRadius: 8,
        padding: 15,
        // marginBottom: 0,
      },
      logoContainer: {
        backgroundColor: "#d1d1d1",
        height: 50,
        width: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text2Container: {
        marginLeft: 15,
      },
      title: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      subtitle: {
        color: 'grey',
        fontSize: 16,
      },
      amount: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      transactionContainer: {
        // justifyContent: 'space-between',
        flexDirection: 'row'
      },
});

export default Transaction;