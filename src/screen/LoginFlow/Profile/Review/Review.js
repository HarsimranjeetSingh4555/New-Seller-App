import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, StatusBar, Dimensions } from 'react-native'
import React from 'react'

const Review = ({ navigation }) => {
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
                  <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
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
                           <Text style={{ color: '#000', fontWeight: '600', fontSize: 15, marginTop: 9, marginHorizontal: 8 }}>Upload Your Customer's Reviews</Text>
                        </View>
                     </View>
                     <View>
                        <TouchableOpacity>
                           <Image source={require('../assets/Camera.png')} style={styles.camera} />
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>

               <View style={styles.mainBorder}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>
                     <View>
                        <TouchableOpacity>
                           <Text style={styles.border}></Text>
                        </TouchableOpacity>
                     </View>

                     <View>
                        <TouchableOpacity>
                           <Text style={styles.border}></Text>
                        </TouchableOpacity>
                     </View>

                     <View>
                        <TouchableOpacity>
                           <Text style={styles.border}></Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>

               < TouchableOpacity onPress={() => navigation.navigate('BuyPlan')} style={styles.Btn}>
                  <View >
                     <Text style={styles.btn}> Submit </Text>
                  </View>
               </TouchableOpacity>

            </View>
         </ScrollView>
      </>
   )
}

export default Review

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

   camera: {
      width: 34,
      height: 34,
      marginLeft: 1,
   },
   border: {
      width: Dimensions.get('screen').width*0.3,
      height: 160,
      borderWidth: 1,
      // marginVertical:10
   },
   mainBorder: {
      borderWidth: 1,
      height: 'auto',
      width: '97%',
      borderRadius: 10,
      marginHorizontal: 7,
      marginTop: 20,
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
})