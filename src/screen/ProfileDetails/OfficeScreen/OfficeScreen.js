import { StyleSheet, Text, View,SafeAreaView, Dimensions } from 'react-native'
import React from 'react'

const OfficeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <View style={{marginTop:15}}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
    </View>

</View>
</SafeAreaView >
  )
}

export default OfficeScreen

const styles = StyleSheet.create({
  box: {
    height: 140,
    width: Dimensions.get('screen').width*0.3,
    borderWidth: 1,
},
})