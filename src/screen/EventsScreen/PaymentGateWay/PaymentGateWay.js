import { StyleSheet,SafeAreaView, Text, View ,StatusBar,Image,TouchableOpacity} from 'react-native'
import React from 'react'


const PaymentGateWay = ({navigation}) => {
  return (
    <>
    <StatusBar
        backgroundColor="#0006C1"
        barStyle={'light-content'}/>
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View>
                <View>
                    <Image source={require('../assets/logo.png')} style={styles.img}/>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={styles.text}> Payment Gateway</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </>
  )
}

export default PaymentGateWay

const styles = StyleSheet.create({
    img:{
        width:'70%',
        height:160,
        alignSelf:'center',
        marginVertical:'30%'
    },
    text:{
        color:'#000',
        fontSize:36,
        fontWeight:'600',
        textAlign:'center',
        marginTop:'30%'
    },
})