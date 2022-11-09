import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, ImageBackground, TouchableHighlight, StatusBar } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput'


const CreateProfie = ({ navigation }) => {

   const [first_name, setFirst_name] = useState()
   const [adress, setAdress] = useState()
   const [district, setDistrict] = useState()
   const [state, setState] = useState()
   const [email, setEmail] = useState()
   const [web, setWeb] = useState()
   const [phone, setPhone] = useState()

   const [imagefront, setImagefront] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
   const [showoption, setShowoption] = useState(false)



   // const [idproof, setIdproof] = useState('')

   // ImageCropPicker.openCamera({
   //    width: 300,
   //    height: 400,
   //    cropping: true,
   // }).then(imagefront => {
   //    console.log(imagefront);
   // });

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
                     <Image source={require('../../LoginFlow/assets/logo.png')} style={styles.logo} />
                  </View>
                  <View>
                     <Text style={styles.wel}> Let's create company profile</Text>
                  </View>
               </View>

               <View style={{ alignSelf: 'center', marginVertical: 10 }}>

                  <TouchableOpacity style={styles.borderdelete}>
                     <View>
                        <Image source={require('../CreateProfile/assets/delete.png')} style={styles.delete} />
                     </View>
                  </TouchableOpacity>


                  <View>

                     <TouchableOpacity onPress={() => openGalleryFront()} style={styles.border}>
                        <View>
                           <Image source={require('../CreateProfile/assets/Camerab.png')} style={styles.camera} />
                        </View>
                     </TouchableOpacity>

                     <View>

                        <ImageBackground source={{ uri: imagefront }} style={styles.dp} />

                     </View>
                  </View>

               </View>


               <CustomTextInput label={'Company Name'} value={first_name} setValue={setFirst_name} />
               <CustomTextInput label={'Company Adress'} value={adress} setValue={setAdress} />
               <CustomTextInput label={'District Name'} value={district} setValue={setDistrict} />
               <CustomTextInput label={'State Name'} value={state} setValue={setState} />
               <CustomTextInput label={'Email-ID'} value={email} setValue={setEmail} />
               <CustomTextInput label={'WebSite'} value={web} setValue={setWeb} />
               <CustomTextInput label={'Login Phone no.'} value={phone} setValue={setPhone} />




               <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.Btn}>
                     <Text style={styles.btn}> Submit </Text>
               </TouchableOpacity>



            </View>
         </ScrollView>
      </>

   )
}

export default CreateProfie

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