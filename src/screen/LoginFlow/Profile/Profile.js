import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, ImageBackground, StatusBar } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker'
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput'

const Profile = ({ navigation }) => {

   const [ContactPersonName, setContactPersonName] = useState()
   const [ContactPersonNumber, setContactPersonNumber] = useState()
   const [ContactPersonDesigation, setContactPersonDesigation] = useState()
   const [accessToken, setAccess] = useState(null);

   const [ContactPersonPic, setContactPersonPic] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
   const [showoption, setShowoption] = useState(false)

   const openGalleryFront = () => {
      ImageCropPicker.openPicker({
         width: 100,
         height: 100,
         cropping: false
      }).then(ContactPersonPic => {
         console.log(ContactPersonPic);
         setShowoption(false)
         setContactPersonPic(ContactPersonPic.path)
      });
   }

   
   function SaveData() {

      let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMDU5MDU3LCJpYXQiOjE2NjkxOTUwNTcsImp0aSI6IjhmZWEwNGIxMjA2YzQyZmFiZTNlZTFhZGFlZWJhZDU1IiwidXNlcl9pZCI6MjV9.5ZaAfjz75KxYt7TFnosxRUBv_fuWhe0QcYIAz6CZ9xQ"
      setAccess(accessToken)

      let formData = new FormData();
      let filename = ContactPersonPic.split('/').pop();
      console.log("filename = " + filename);
      let match = /\.(\w+)$/.exec(filename);
      console.log("match = " + match);
      let type = match ? `image/${match[1]}` : `image`;
      console.log("type = " + type);
      formData.append('ContactPersonName', ContactPersonName)
      formData.append('ContactPersonNumber', ContactPersonNumber)
      formData.append('ContactPersonDesigation', ContactPersonDesigation)
      formData.append('ContactPersonPic', { uri: ContactPersonPic, name: filename, type })
      formData.append("is_active", true)
      formData.append("is_user", true)

      fetch('https://douryou.herokuapp.com/douryou-seller-api/seller-registration/', {
         method: 'Patch',
         headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
            'Authorization': 'Bearer ' + accessToken,
         },
         body: formData
      }).then((result) => {
         result.json().then((response) => {
            console.log(response, "Response");
            navigation.navigate('Aboutus')
            alert("DATA SAVE")
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

                        <ImageBackground source={{ uri: ContactPersonPic }} style={styles.dp} />

                     </View>
                  </View>

               </View>



               <CustomTextInput label={'Contact Person Name'} value={ContactPersonName} setValue={setContactPersonName} />
               <CustomTextInput label={'Contact Number'} value={ContactPersonNumber} setValue={setContactPersonNumber} />
               <CustomTextInput label={'Contact Persons Desigation'} value={ContactPersonDesigation} setValue={setContactPersonDesigation} />




               {/* <TouchableOpacity onPress={() => navigation.navigate('Aboutus')} style={styles.Btn}> */}
               <TouchableOpacity onPress={SaveData} style={styles.Btn}>
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