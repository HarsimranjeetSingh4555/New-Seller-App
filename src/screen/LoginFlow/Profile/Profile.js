import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight,StatusBar } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <>      
       <StatusBar
        backgroundColor="#0006C1"
        barStyle={'light-content'}/>

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

           <View style={{alignSelf:'center',marginVertical:10}}>
           <View  style={styles.borderdelete}>
                  <TouchableOpacity>
                  <View>
                    <Image source={require('../Profile/assets/delete.png')} style={styles.delete}/>
                  </View>
                  </TouchableOpacity>
              </View>
              <View  style={styles.border}>
                  <TouchableOpacity>
                  <View>
                    <Image source={require('../Profile/assets/Camera.png')} style={styles.camera}/>
                  </View>
                  </TouchableOpacity>
              </View>
               <View>
                <TouchableOpacity>
                     <Image source={require('../Profile/assets/dp.png')} style={styles.dp}/> 
                </TouchableOpacity>
               </View>
           </View>

            <View style={styles.Input}>
              <Text style={{color:'#626262',fontWeight:'600',fontSize:16}}>Contact Person's Name</Text>
               <TextInput placeholder='' keyboardType='' style={styles.input} /> 
            </View>

            <View style={styles.Input}>
              <Text style={{color:'#626262',fontWeight:'600',fontSize:16}}>Contact Number </Text>
               <TextInput placeholder='' keyboardType='' style={styles.input} /> 
            </View> 

             <View style={styles.Input}>
              <Text style={{color:'#626262',fontWeight:'600',fontSize:16}}> Contact Person's Desigation </Text>
               <TextInput placeholder='' keyboardType='' style={styles.input} /> 
            </View> 

           

            <View style={styles.Btn}>
               <TouchableOpacity onPress={() => navigation.navigate('Aboutus')}>
                  <Text style={styles.btn}> Submit </Text>
               </TouchableOpacity>
            </View>


         </View>
      </ScrollView>
      </>
  )
}

export default Profile

const styles = StyleSheet.create({
    logo: {
        width:300,
        height:160,
        alignSelf: 'center',
        marginTop: 30
    },
    wel: {
     marginVertical: 20,
     textAlign: 'center',
     fontSize: 25,
     color: '#000000',
     fontWeight: '600'
  },
   dp:{
       marginTop:10,
        width:120,
        height:120, 
     },
     border:{
        padding:4,
        marginLeft:95,
        position:'absolute',
        zIndex:1,
        marginTop:99
     },
     camera:{
        width:34,
        height:34,
        marginLeft:1,
     },
     borderdelete:{
        marginLeft:90,
        position:'absolute',
        zIndex:1,
     },
     delete:{
        width:50,
        height:50,
        marginLeft:1,
     },
    
     Input: {
        marginHorizontal: 20,
        marginTop:10,
        borderWidth:1,
        padding:10,
        borderRadius:10
     },
     input: {
       marginBottom:10,
        color:'#969696',
        fontSize:17,
        fontWeight:'600',
        borderBottomWidth:1
     },
     Btn: {
        alignItems: 'center',
       marginVertical:10,
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