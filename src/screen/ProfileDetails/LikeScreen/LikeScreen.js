import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const LikeScreen = () => {
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

export default LikeScreen

const styles = StyleSheet.create({
    box: {
        height: 140,
        width: Dimensions.get('screen').width*0.3,
        borderWidth: 1,
    },
})