import { StyleSheet, Text, View, Image, ScrollView,Dimensions, StatusBar, TouchableOpacity, TextInput, } from 'react-native';
import React, { useState } from 'react'
// import { Rating } from 'react-native-ratings'
import TopTabNavigation from '../../Navigation-Flow/TopTabNavigation/TopTabNavigation'

const ProfileDetails = ({ navigation }) => {

  const [videocount, setVideoCount] = useState(0);
  const increment = () => {
    if (videocount <= videocount) {
      setVideoCount(videocount + 1)
    }
  }

  return (
    <>
      <StatusBar
        backgroundColor="#0006C1"
        barStyle={'light-content'} />
      <ScrollView style={{ flex: 1,backgroundColor:'#fff' }}>
        <View>
          <View style={styles.Name}>
            <View style={styles.row}>
              <View>
                <TouchableOpacity>
                  <Image source={require('../ProfileDetails/assets/rose.jpg')} style={styles.dp} />
                </TouchableOpacity>
              </View>

              <View >
                <TouchableOpacity>
                  <Text style={styles.link}>Eazyvisa Immigration Cusultalt</Text>
                </TouchableOpacity>
                <Text style={styles.address}>Sco-40-41,{'\n'}Sector-34A, Chandigarh</Text>
              </View>
            </View>

            <View style={styles.bar}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.professional}>  Professional </Text>
                </View>
              </TouchableOpacity>


              {/* <View style={{ marginLeft: 10, marginTop: 6 }}>
                <Rating
                  ratingColor='#EFD757'
                  ratingCount={5}
                  imageSize={20}
                  tintColor="#D1070A"
                />
              </View> */}
              
            </View>
          </View>

          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('../ProfileDetails/assets/About.png')} style={styles.icon} />
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.text}>About us</Text>
                </TouchableOpacity>
              </View>
              <View >
                <TouchableOpacity>
                  <Text style={{marginLeft:'63%',marginTop:7,color:"#0006C1",
                  fontSize:15,textDecorationLine:'underline',fontWeight:'bold'}}>Read More</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>

          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('../ProfileDetails/assets/our.png')} style={styles.icon} />
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.text}>Our Specialization</Text>
                </TouchableOpacity>
              </View>
              <View >
                <TouchableOpacity>
                  <Text style={{marginLeft:'50%',marginTop:7,color:"#0006C1",
                  fontSize:15,textDecorationLine:'underline',fontWeight:'bold'}}>Read More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('../ProfileDetails/assets/we.png')} style={styles.icon} />
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.text}>We are Sever in these categories</Text>
                </TouchableOpacity>
              </View>
              <View >
                <TouchableOpacity>
                  <Text style={{marginLeft:'21%',marginTop:7,color:"#0006C1",
                  fontSize:15,textDecorationLine:'underline',fontWeight:'bold'}}>Read More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View >
            <View style={styles.boder}>
              <View style={styles.Flex}>
                <View>
                  <Image source={require('../ProfileDetails/assets/person.png')} style={styles.Pic} />
                </View>
                <View>
                  <Text style={styles.Text}>Contacting Persson & Details</Text>
                </View>
              </View>

              <View style={styles.Flex2}>
                <View>
                  <Image source={require('../ProfileDetails/assets/dppic.png')} style={styles.dppic} />
                </View>
                <View style={styles.input}>
                  <View style={{ flexDirection: 'row', }}>
                    <View>
                      <Text style={styles.profile}>Name</Text>
                    </View>

                  </View>
                  <View>
                    <Text style={styles.profile}>Contact No.</Text>
                  </View>
                  <View>
                    <Text style={styles.profile}>Desigation</Text>
                  </View>

                </View>
              </View>

            </View>
          </View>

         

          <View style={styles.Boder}>

            <TopTabNavigation navigation={navigation}/>

          </View>


        </View>
      </ScrollView>

     <View style={{backgroundColor:'#fff',height:60}}> 
     <View style={styles.lsatborder}>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ marginLeft: 5 }}>
              {/* <TouchableOpacity> */}
              <Image source={require('../ProfileDetails/assets/eye.png')} style={styles.eye} />
              {/* </TouchableOpacity> */}
            </View>


            <View style={{ flexDirection: 'row' }}>
              {/* <TouchableOpacity> */}
              <View>
                <Image source={require('../ProfileDetails/assets/like.png')} style={styles.like} />
              </View>
              {/* </TouchableOpacity> */}
              <View style={{ marginLeft: 10, marginTop: 8, width: '30%' }}>
                <Text>{videocount}</Text>
              </View>
            </View>

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 30 }}>
            <TouchableOpacity onPress={() => increment()}>
              <Image source={require('../ProfileDetails/assets/like.png')} style={styles.thum} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../ProfileDetails/assets/message.png')} style={styles.message} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../ProfileDetails/assets/share.png')} style={styles.share} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
     </View>
    </>
  )
}

export default ProfileDetails

const styles = StyleSheet.create({
  Name: {
    height: 155,
    width: '97%',
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 7,
    borderRadius: 6,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
  },
  dp: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginHorizontal: 7
  },
  link: {
    fontWeight: '600',
    fontSize: 18,
    color: '#040271',
    marginVertical: 2
  },
  address: {
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "#0006C1",
    marginTop: 7,
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  professional: {
    fontSize: 20,
    fontWeight: '500',
    color: '#EFD757',
    fontStyle: 'italic',

  },
  listboarder: {
    borderWidth: 1,
    height: 53,
    width: '97%',
    marginHorizontal: 7,
    marginVertical: 9,
    borderRadius: 10,
    padding: 8
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 5
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 5,

  },
  boder: {
    borderWidth: 1,
    width: '97%',
    height: 170,
    marginHorizontal: 7,
    marginVertical: 10,
    borderRadius: 10,
    padding: 8,
    borderColor: '#000000'
  },
  Flex: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Pic: {
    height: 36,
    width: 36,
  },
  Text: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000000',
    marginHorizontal: 20,
    marginVertical: 5
  },
  Flex2: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20
  },
  dppic: {
    height: 95,
    width: 95,
    borderRadius: 5,
  },
  input: {
    marginHorizontal: 10,
  },
  profile: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '600',
    marginVertical:5
  },
  Boder: {
    height: 680,
    width: '97%',
    borderWidth: 1,
    borderColor: '#000000',
    marginHorizontal: 7,
    marginVertical: 10,
    borderRadius: 3,
  },
  FLEX: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-around'
  },
  iconn: {
    height: 34,
    width: 31
  },
  box: {
    height: 118,
    width: 118,
    borderWidth: 1,
  },
  lsatborder: {
    borderWidth: 1,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    padding: 2,
    marginBottom: 30,
  backgroundColor:'#fff'
  },
  date: {
    color: '#D1070A'
  },
  eye: {
    height: 15,
    width: 21,
    marginTop: 10
  },
  like: {
    height: 21,
    width: 20,
    marginLeft: 50,
    marginTop: 7
  },
  share: {
    height: 17,
    width: 15,
    marginTop: 8,
    margin: 20,
    marginLeft: 25
  },
  thum: {
    height: 21,
    width: 20,
    marginTop: 6,
    // marginRight:9
    marginLeft:10
    
  },
  message: {
    height: 20,
    width: 21,
    marginLeft: 27,
    marginTop: 6
  },
  partOneIcon: {
    height: 25,
    width: 25,
    margin: 8
  },

})