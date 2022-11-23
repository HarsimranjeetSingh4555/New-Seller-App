import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, StatusBar, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react';
import RnOtpTimer from 'rn-otp-timer';
// import { AuthContext } from '../../../../context/AuthContext';
// import  AsyncStorage  from '@react-native-async-storage/async-storage';


const VerifyCode = ({ navigation, route }) => {

   const { phone_number } = route.params;
   // const [number, setNumber] = useState(phone_number);
   const [otpis, setOtpis] = useState("");
   // const {login} = useContext(AuthContext)
   console.log(phone_number, 'phone_number')
   console.log(otpis, "otpisotpis")

   const verCode = async () => {


      let data = { phone_number, otpis }
      fetch('https://douryou.herokuapp.com/douryou-seller-api/seller-verify-otp/', {
         method: 'POST',
         headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
         },
         body: JSON.stringify(data)
      }).then((result) => {
         result.json().then((resp) => {
            console.log(resp, "resp")

            if (resp.status == true) {
               navigation.navigate('CreateProfie')
            } else {
               alert('Enter valid OTP')
            }
         }).catch((error) => {
            console.log(error);
         });
      })

   }

   return (
      <>
         <StatusBar
            backgroundColor="#0006C1"
            barStyle={'light-content'} />

         <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View>

               <View style={styles.main}>
                  <View>
                     <Image source={require('../../LoginFlow/assets/logo.png')} style={styles.logo} />
                  </View>
                  <View>
                     <Text style={styles.wel}>Verifiy Your Number</Text>
                  </View>
                  <View>
                     <Text style={styles.text}> Waiting to automatically delect an {'\n'} SMS sent</Text>
                  </View>
               </View>

               <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                  <View>
                     <Text style={{ color: '#000', fontSize: 20, fontWeight: '600' }}>{phone_number}</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                     <View>
                        <Text style={{ color: '#0006C1', fontSize: 18, fontWeight: '400' }}>Wrong number?</Text>
                     </View>
                  </TouchableOpacity>
               </View>

               <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "space-evenly", marginTop: 10 }}>
                  <TextInput
                     maxLength={4}
                     keyboardType={'numeric'}
                     style={{
                        fontWeight: '600',
                        alignSelf: 'center',
                        fontSize: 20,
                        height: 50,
                        width: Dimensions.get('window').width / 3.8,
                        borderWidth: 1,
                        letterSpacing: 15,
                        borderBottomColor: "#0006C1",
                        margin: 10,
                        borderTopColor: "#fff",
                        borderRightColor: "#fff",
                        borderLeftColor: "#fff",
                        borderStyle: 'dashed',

                     }}
                     value={otpis}
                     onChangeText={(text) => setOtpis(text)}
                  />
               </View>

               <View style={styles.CODE}>
                  <Text style={{ color: '#999999', }}>

                  </Text>
                  <TouchableOpacity>
                     <Text style={styles.Code}><RnOtpTimer
                        minutes={0}
                        seconds={60}
                        resendButtonStyle={styles.button}
                        resendButtonTextStyle={styles.buttonText}
                        resendButtonAction={() => {
                           console.log('otp resent!')
                        }}
                     /></Text>
                  </TouchableOpacity>
               </View>


               {/* <TouchableOpacity onPress={() => navigation.navigate('CreateProfie')} style={styles.Btn}> */}
               <TouchableOpacity onPress={verCode} style={styles.Btn}>
                  <View >
                     <Text style={styles.btn}>Submit </Text>
                  </View>
               </TouchableOpacity>



            </View>
         </ScrollView>
      </>
   )
}

export default VerifyCode

const styles = StyleSheet.create({
   logo: {
      width: '70%',
      height: 160,
      alignSelf: 'center',
      marginTop: '25%'
   },
   wel: {
      marginVertical: 40,
      textAlign: 'center',
      fontSize: 25,
      color: '#000000',
      fontWeight: '600'
   },
   text: {
      textAlign: 'center',
      fontSize: 18,
      color: '#000000',
      fontWeight: '600'
   },
   Btn: {
      alignItems: 'center',
      marginVertical: 20,
   },
   btn: {
      backgroundColor: '#0006C1',
      paddingHorizontal: 100,
      paddingVertical: 15,
      color: '#FFFFFF',
      fontSize: 25,
      borderRadius: 15,
      fontWeight: "600"
   },
   OTP: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 40,
   },
   InputOtp: {
      borderBottomWidth: 2,

      textAlign: 'center',
      borderColor: '#E4E3E3'
   },
   Second: {
      marginLeft: 40,
      marginTop: 20
   },
   CODE: {
      justifyContent: 'center',
      alignSelf: 'center'

   },
   Code: {
      color: '#545F74',
      fontSize: 15,
      marginLeft: 5
   },
})