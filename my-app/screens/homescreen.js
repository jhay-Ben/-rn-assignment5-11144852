import React from 'react';
import { View, ScrollView } from 'react-native';
import Welcome from '../components/welcome.js';
import Card from '../components/card.js';
import Buttons from '../components/imagebutton.js';
import Transaction from '../components/transaction.js';
// import { ScrollView } from 'react-native-gesture-handler';



export default function HomeScreen() {
    return (
     
        <View >
            <ScrollView>
        <Welcome name={'Eric Atsu'}/>
         <Card/>
         <Buttons/>
        {/* <Transaction/>  */}
        </ScrollView>
        </View> 
     
    );
  }
  
//   const styles = StyleSheet.create({
//     container: {
//     //   flex: 1,
//       backgroundColor: '#fff',
//       // alignItems: 'center',
//       // justifyContent: 'center',
//     },
//   });