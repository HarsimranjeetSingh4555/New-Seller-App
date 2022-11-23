import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, ImageBackground, StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker'

const Review = ({ navigation }) => {


   const [OfficePic1, setOfficePic1] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
   const [showoption, setShowoption] = useState(false)
   const [accessToken, setAccess] = useState(null);


   const openGalleryFront = () => {
      ImageCropPicker.openPicker({
         // multiple: true,
         width: 100,
         height: 100,
         cropping: false
      }).then(OfficePic1 => {
         console.log(OfficePic1);
         setShowoption(false)
         setOfficePic1(OfficePic1.path)
      });
   }

   function SaveData() {

      let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMDQwMDEwLCJpYXQiOjE2NjkxNzYwMTAsImp0aSI6ImViODExYzgxY2NjMDRlMmZhZDk4OWRhYzVjNjhkYzFmIiwidXNlcl9pZCI6MjV9.rKlKx96qnNBgo352xM1KmkX3JrGNs7kODXMG6OwpSIU"
      setAccess(accessToken)

      let formData = new FormData();
      let filename = OfficePic1.split('/').pop();
      console.log("filename = " + filename);
      let match = /\.(\w+)$/.exec(filename);
      console.log("match = " + match);
      let type = match ? `image/${match[1]}` : `image`;
      console.log("type = " + type);
      formData.append('OfficePic1', { uri: OfficePic1, name: filename, type })

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
            navigation.navigate('Jsonfile')
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
                     
                        <TouchableOpacity onPress={() => openGalleryFront()}>
                           <ImageBackground source={{ uri: OfficePic1 }} style={styles.border}/>
                        </TouchableOpacity>                     
                        
                  </View>
               </View>


               {/* < TouchableOpacity onPress={() => navigation.navigate('BuyPlan')} style={styles.Btn}> */}
               < TouchableOpacity onPress={SaveData} style={styles.Btn}>
                 
                     <Text style={styles.btn}> Submit </Text>
                  
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
      overflow:'hidden',
      borderRadius:10
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