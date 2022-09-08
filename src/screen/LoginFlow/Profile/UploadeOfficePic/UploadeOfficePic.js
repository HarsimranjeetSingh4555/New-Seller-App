import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, StatusBar, Dimensions } from 'react-native'
import React from 'react'

const UploadeOfficePic = ({ navigation }) => {
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
                           <Image source={require('../assets/pic.png')} style={styles.camera} />
                        </View>
                        <View>
                           <Text style={{ color: '#000', fontWeight: '600', fontSize: 16, marginTop: 5, marginHorizontal: 10 }}> Upload Your Office Pics</Text>
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

               <View style={styles.btn}>
                  <TouchableOpacity style={styles.btnsubmit} onPress={() => navigation.navigate('Certificate')}>
                     <Text style={styles.button}> SUBMIT</Text>
                  </TouchableOpacity>
               </View>

            </View>
         </ScrollView>
      </>
   )
}

export default UploadeOfficePic

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
      marginHorizontal:7,
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
   btn: {
      alignSelf: 'center',
      width: '50%',
      marginVertical: 30

   },
   btnsubmit: {
      backgroundColor: "#0006C1",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderRadius: 15,
   },
   button: {
      color: "white",
      fontSize: 26,
      fontWeight: '600',
      fontSize: 30
   }
})