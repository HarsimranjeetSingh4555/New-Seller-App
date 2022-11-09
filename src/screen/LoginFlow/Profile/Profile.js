import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, ImageBackground, StatusBar } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput'

const Profile = ({ navigation }) => {

   const [name, setName] = useState()
   const [number, setNumber] = useState()
   const [desigation, setDesigation] = useState()

   const [imagefront, setImagefront] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
   const [showoption, setShowoption] = useState(false)

   const openGalleryFront = () => {
      ImageCropPicker.openPicker({
         width: 100,
         height: 100,
         cropping: false
      }).then(imagefront => {
         console.log(imagefront);
         setShowoption(false)
         setImagefront(imagefront.path)
      });
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
                     <Image source={require('../Profile/assets/logo.png')} style={styles.logo} />
                  </View>
                  <View>
                     <Text style={styles.wel}> Let's create your profile</Text>
                  </View>
               </View>
               
               <View style={{ alignSelf: 'center', marginVertical: 10 }}>

                  <TouchableOpacity style={styles.borderdelete}>
                     <View>
                        <Image source={require('../CreateProfile/assets/delete.png')} style={styles.delete} />
                     </View>
                  </TouchableOpacity>


                  <View>
                     <View style={styles.border}>
                        <TouchableOpacity onPress={() => openGalleryFront()}>
                           <View>
                              <Image source={require('../CreateProfile/assets/Camerab.png')} style={styles.camera} />
                           </View>
                        </TouchableOpacity>
                     </View>
                     <View>

                        <ImageBackground source={{ uri: imagefront }} style={styles.dp} />

                     </View>
                  </View>

               </View>



               <CustomTextInput label={'Contact Person Name'} value={name} setValue={setName} />
               <CustomTextInput label={'Contact Number'} value={number} setValue={setNumber} />
               <CustomTextInput label={'Contact Persons Desigation'} value={desigation} setValue={setDesigation} />




               <TouchableOpacity onPress={() => navigation.navigate('Aboutus')} style={styles.Btn}>
                  <Text style={styles.btn}> Submit </Text>
               </TouchableOpacity>


            </View>
         </ScrollView>
      </>
   )
}

export default Profile

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
   dp: {
      overflow: 'hidden',
      marginTop: 10,
      width: 140,
      height: 140,
      borderRadius: 10
   },
   border: {
      padding: 4,
      marginLeft: '78%',
      position: 'absolute',
      zIndex: 1,
      marginTop: "85%",
   },
   camera: {
      width: 34,
      height: 34,
      marginLeft: 1,
   },
   borderdelete: {
      marginLeft: '26%',
      position: 'absolute',
      zIndex: 1,
   },
   delete: {
      width: 50,
      height: 50,
      marginLeft: 1,
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