import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, StatusBar } from 'react-native'
import React from 'react'

const BuyPlan = ({navigation}) => {
   return (
      <>
         <StatusBar
            backgroundColor="#0006C1"
            barStyle={'light-content'} />

         <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View>
               <View style={styles.main}>
                  <View>
                     <Image source={require('../assets/logo.png')} style={styles.logo} />
                  </View>
                  <View>
                     <Text style={styles.wel}> Let's create your profile</Text>
                  </View>
               </View>

               <View style={{ alignItems: 'flex-end', marginRight: 35 }}>
                  <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                     <Text style={styles.skip}>Skip</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.Input}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <View style={{ flexDirection: 'row' }}>
                        <View>
                           <Image source={require('../assets/reviews.png')} style={styles.camera} />
                        </View>
                        <View>
                           <Text style={{ color: '#000', fontWeight: '600', fontSize: 16, marginTop: 9, marginHorizontal: 10 }}> Buy Your Plans</Text>
                        </View>
                     </View>

                  </View>
               </View>

               <View style={{ borderWidth: 4, borderColor: '#0006C1', height: 310, marginHorizontal: 12, marginTop: 20 }}>

                  <View>
                     <Text style={styles.plan}>FREEPLAN</Text>
                  </View>
                  <View>
                     <Text style={{ borderBottomWidth: 2, marginHorizontal: 20, paddingBottom: 15, color: '#646464', fontWeight: '500' }}>Your plan expires on
                     </Text>
                  </View>
                  <View style={{ marginVertical: 40, marginHorizontal: 20, }}>
                     <Text style={{ borderBottomWidth: 2, paddingBottom: 15, color: '#000', fontWeight: '600', fontSize: 25, paddingLeft: 60 }}>Ads*
                     </Text>
                  </View>

                  <View>
                     <Text style={{fontWeight:'500',fontSize:15,fontStyle:'italic',paddingLeft:30,color:'#000'}}> 7 days Trail  Plan </Text>
                  </View>

               </View>

                  <View>
                     <Text style={styles.or}>OR</Text>
                  </View>
           
                  <TouchableOpacity  onPress={() => navigation.navigate('Profenssional')} style={styles.Btn}>
                  <View >
                     <Text style={styles.btn}> Upgrade Plan</Text>
                     </View>
                  </TouchableOpacity>
               

            </View>
         </ScrollView>
      </>
   )
}

export default BuyPlan

const styles = StyleSheet.create({
   logo: {
      width: '70%',
      height: 160,
      alignSelf: 'center',
      marginTop: '10%'
  },
   wel: {
      marginVertical: 20,
      textAlign: 'center',
      fontSize: 25,
      color: '#000000',
      fontWeight: '600'
   },
   skip: {
      borderWidth: 1,
      padding: 5,
      width: 50,
      textAlign: 'center',
      backgroundColor: '#0006C1',
      color: '#fff',
      fontWeight: '500',
      fontSize: 16,
      borderRadius: 5
   },
   border: {
      padding: 4,
      marginLeft: 95,
      position: 'absolute',
      zIndex: 1,
      marginTop: 99
   },
   camera: {
      width: 34,
      height: 34,
      marginLeft: 1,
   },
   border: {
      width: 120,
      height: 120,
      borderWidth: 1,
   },
   borderdelete: {
      marginLeft: 90,
      position: 'absolute',
      zIndex: 1,
   },
   delete: {
      width: 50,
      height: 50,
      marginLeft: 1,
   },
   Input: {
      marginHorizontal: 20,
      marginTop: 10,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10
   },
   input: {
      marginBottom: 10,
      color: '#969696',
      fontSize: 17,
      fontWeight: '600',
      borderBottomWidth: 1
   },
   plan: {
      color: '#02043F',
      fontWeight: '600',
      fontSize: 30,
      textAlign: 'center',
      marginVertical: 30
   },
   or:{
      fontWeight:'500',
      fontSize:20,
      textAlign:'center',
      marginVertical:50,
      color:'#000'
   },
   Btn: {
      alignItems: 'center',
      marginVertical: 10,

  },
  btn: {
      backgroundColor: '#0006C1',
      paddingHorizontal: 50,
      paddingVertical: 15,
      color: '#FFFFFF',
      fontSize: 25,
      borderRadius: 15,
      fontWeight: "600"
  },
})