import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, ImageBackground, TouchableHighlight, StatusBar } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
import CustomTextInput from '../../../Component/CustomTextInput/CustomTextInput'


const CreateProfie = ({ navigation }) => {

   const [CompanyName, setCompanyName] = useState()
   const [CompanyAddress, setCompanyAddress] = useState()
   const [CompanyDistrictName, setCompanyDistrictName] = useState()
   const [CompanyStateName, setCompanyStateName] = useState()
   const [CompanyEmailID, setCompanyEmailID] = useState()
   const [CompanyWebsiteLink, setCompanyWebsiteLink] = useState()
   const [CompanyLoginPhoneNo, setCompanyLoginPhoneNo] = useState()
   const [accessToken, setAccess] = useState(null);

   const [CompanyLogo, setCompanyLogo] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
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
      }).then(CompanyLogo => {
         console.log(CompanyLogo);
         setShowoption(false)
         setCompanyLogo(CompanyLogo.path)
      });
   }


   function SaveData() {

      let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMDU5MDU3LCJpYXQiOjE2NjkxOTUwNTcsImp0aSI6IjhmZWEwNGIxMjA2YzQyZmFiZTNlZTFhZGFlZWJhZDU1IiwidXNlcl9pZCI6MjV9.5ZaAfjz75KxYt7TFnosxRUBv_fuWhe0QcYIAz6CZ9xQ"
      setAccess(accessToken)

      let formData = new FormData();
      let filename = CompanyLogo.split('/').pop();
      console.log("filename = " + filename);
      let match = /\.(\w+)$/.exec(filename);
      console.log("match = " + match);
      let type = match ? `image/${match[1]}` : `image`;
      console.log("type = " + type);
      formData.append('CompanyName', CompanyName)
      formData.append('CompanyAddress', CompanyAddress)
      formData.append('CompanyDistrictName', CompanyDistrictName)
      formData.append('CompanyLogo', { uri: CompanyLogo, name: filename, type })
      formData.append('CompanyStateName', CompanyStateName)
      formData.append('CompanyEmailID', CompanyEmailID)
      formData.append('CompanyWebsiteLink', CompanyWebsiteLink)
      formData.append('CompanyLoginPhoneNo', CompanyLoginPhoneNo)
      formData.append("is_active", true)
      formData.append("is_user", true)




      fetch('https://douryou.herokuapp.com/douryou-seller-api/seller-registration/', {
         method: 'Post',
         headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
            'Authorization': 'Bearer ' + accessToken,
         },
         body: formData
      }).then((result) => {
         result.json().then((response) => {
            console.log(response, "Response");
            navigation.navigate('Profile')
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
                     <Image source={require('../../LoginFlow/assets/logo.png')} style={styles.logo} />
                  </View>
                  <View>
                     <Text style={styles.wel}> Let's create company profile</Text>
                  </View>
               </View>

               <View style={{ alignSelf: 'center', marginVertical: 10 }}>

                  <TouchableOpacity style={styles.borderdelete}>
                     <Image source={require('../CreateProfile/assets/delete.png')} style={styles.delete} />
                  </TouchableOpacity>

                  <View>

                     <TouchableOpacity onPress={() => openGalleryFront()} style={styles.border}>
                        <Image source={require('../CreateProfile/assets/Camerab.png')} style={styles.camera} />
                     </TouchableOpacity>

                     <View>

                        <ImageBackground source={{ uri: CompanyLogo }} style={styles.dp} />

                     </View>
                  </View>

               </View>


               <CustomTextInput label={'Company Name'} value={CompanyName} setValue={setCompanyName} />
               <CustomTextInput label={'Company Adress'} value={CompanyAddress} setValue={setCompanyAddress} />
               <CustomTextInput label={'District Name'} value={CompanyDistrictName} setValue={setCompanyDistrictName} />
               <CustomTextInput label={'State Name'} value={CompanyStateName} setValue={setCompanyStateName} />
               <CustomTextInput label={'Email-ID'} value={CompanyEmailID} setValue={setCompanyEmailID} />
               <CustomTextInput label={'WebSite'} value={CompanyWebsiteLink} setValue={setCompanyWebsiteLink} />
               <CustomTextInput label={'Login Phone no.'} value={CompanyLoginPhoneNo} setValue={setCompanyLoginPhoneNo} />




               {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.Btn}> */}
               <TouchableOpacity onPress={SaveData} style={styles.Btn}>
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