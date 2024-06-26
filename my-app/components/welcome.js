import React from 'react';
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';

const Welcome = ({ name }) => {
  return (
    <View style={styles.container}>
      
      <View style={{flexDirection:"row"}}>
        
        <View>
          <TouchableOpacity>  
          <Image source={require('../assets/profile.png')} style={styles.profileImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Welcome back,</Text>
          <Text style={styles.name}>{name}</Text>
        </View>

      </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity>
          <Image source={require('../assets/search.png')} style={styles.searchImage} />
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: Platform.OS === "android" ?  30 : 0,
  },
  textContainer: {
    marginLeft: 15,
  },
  text: {
    // flexDirection: 'row',
    alignItems: 'center',
    color: 'grey',
    fontSize: 18,
    marginRight: 5,
    marginBottom: 5,
  },
  name: {
    // flexDirection: "row",
    fontSize: 24,
    fontWeight: 'bold',
    // marginTop: 25,
    // marginRight: 10,
  },
  namebox: {
    marginRight: 30,
  },
  profileImage: {
    flexDirection: "row",
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 'auto',
  },
  searchContainer: {
    backgroundColor: "#d1d1d1",
    height: 50,
    width: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchImage: {
    // flexDirection: "row",
    
    // width: 45,
    // height: 45,
    // borderRadius: 20,
    // marginRight: 'auto',
  },
});

export default Welcome;
