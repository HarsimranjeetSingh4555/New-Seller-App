import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView, ScrollView, Label, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';

const gustData = [

  {
    id: '1',
    image: require('../../Lists/assets/read.png'),
    chat: require('../../Lists/assets/chat1.png'),
    bell: require('../../Lists/assets/share.png'),
    img: require('../../Lists/assets/fav.png'),
    Name: 'Prabhjot Singh',
    Email: 'simranjeet.extech@gmail.com',
    DistName: 'Dist. Name',
    DateTime: 'Checking Date & Time:-'
  },
  {
    id: '2',
    image: require('../../Lists/assets/read.png'),
    chat: require('../../Lists/assets/chat1.png'),
    bell: require('../../Lists/assets/share.png'),
    img: require('../../Lists/assets/fav.png'),
    Name: 'Prabhjot Singh',
    Email: 'simranjeet.extech@gmail.com',
    DistName: 'Dist. Name',
    DateTime: 'Checking Date & Time:-'
  },
  {
    id: '3',
    image: require('../../Lists/assets/read.png'),
    chat: require('../../Lists/assets/chat1.png'),
    bell: require('../../Lists/assets/share.png'),
    img: require('../../Lists/assets/fav.png'),
    Name: 'Prabhjot Singh',
    Email: 'simranjeet.extech@gmail.com',
    DistName: 'Dist. Name',
    DateTime: 'Checking Date & Time:-'
  },
  {
    id: '4',
    image: require('../../Lists/assets/read.png'),
    chat: require('../../Lists/assets/chat1.png'),
    bell: require('../../Lists/assets/share.png'),
    img: require('../../Lists/assets/fav.png'),
    Name: 'Prabhjot Singh',
    Email: 'simranjeet.extech@gmail.com',
    DistName: 'Dist. Name',
    DateTime: 'Checking Date & Time:-'
  },

]


// const btnPressed = () => {


//   navigation.navigate('PrForm')
// }

const GustData = ({ item, navigation }) => {
  return (
    <View style={styles.mainList}>

      <TouchableOpacity>
        <View style={styles.fav}>
          <Image source={item.img} style={{ height: 40, width: 40 }} />
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity onPress={() => navigation.navigate('PrForm')}>
          <View style={styles.Pic}>
            <Image source={item.image} style={styles.pic} />
          </View>
        </TouchableOpacity>

        <View style={styles.adress}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={styles.label} >Name: </Text>
            </View>
            <View>
              <Text style={styles.name}>
                {item.Name}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={styles.label} >E-mail ID: </Text>
            </View>
            <View>
              <Text style={styles.email}>
                {item.Email}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={styles.label} >Dist.Name: </Text>
            </View>
            <View>
              <Text style={styles.dist}>
                {item.DistName}
              </Text>
            </View>
          </View>

        </View>



      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>

        <View style={{ marginRight: 20, margin: 2 }}>
          <TouchableOpacity>
            <Image source={item.chat} style={{ height: 22, width: 23 }} />
          </TouchableOpacity>
        </View>

        <View style={{ marginRight: 10, margin: 2 }}>
          <TouchableOpacity>
            <Image source={item.bell} style={{ height: 22, width: 20 }} />
          </TouchableOpacity>
        </View>

      </View>

      <View>
        <View style={{ backgroundColor: '#0006C1', padding: 19, borderRadius: 10 }}>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: '800', marginLeft: 20 }}>{item.DateTime}</Text>
        </View>
      </View>

    </View>
  )
}

const CanadaList = ({ navigation }) => {

  return (
    <>
      <StatusBar backgroundColor="#0006C1" barStyle='light-content' />
      <SafeAreaView style={styles.container}>
        <ScrollView >

          <View>
            <View style={styles.mainlogo}>
              <Image source={require('../../HomeScreen/assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.Name1}>
              <View style={styles.topmain}>
                <View style={styles.topad}>
                  <Image source={require('../../HomeScreen/assets/canada.png')} style={styles.ad} />
                </View>

                <View style={styles.maintext}>
                  <Text style={styles.toptext}>Canada</Text>
                </View>

              </View>
            </View>

            <FlatList
              // horizontal
              data={gustData}
              renderItem={GustData}
              keyExtractor={item => item.id}
              onPress={() => btnPressed()}
            />


          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default CanadaList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainlogo: {
    alignItems: 'flex-start',
    justifyContent: "center",
    marginTop: 15,
  },
  logo: {
    height: 65,
    width: "30%",
  },
  Name1: {
    height: 55,
    width: "97%",
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 7,
    borderRadius: 10,
    borderColor: '#000000',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  topmain: {
    flexDirection: "row",
  },
  ad: {
    height: 38,
    width: 36,
  },
  maintext: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 25,
    // marginRight:25,
  },
  toptext: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#000"
  },
  mainList: {
    height: 'auto',
    width: '97%',
    borderWidth: 1,
    marginHorizontal: 7,
    marginVertical: 2,
    borderRadius: 10
},
Pic: {
    marginHorizontal: 10,
},
pic: {
    height: 100,
    width:100
},
fav: {
   alignSelf:'flex-end'
},
label: {
  fontSize: 16,
  fontWeight: '700',
  color: '#000',
  // marginVertical: 2,
},
name: {
  fontSize: 15,
  fontWeight: '300',
  color: '#000',
  marginTop: 2,
  width:Dimensions.get('screen').width*0.45,
},
email: {
  fontSize: 15,
  fontWeight: '300',
  color: '#000',
  marginTop:1,
  width:Dimensions.get('screen').width*0.42,
},
dist: {
  fontSize: 15,
  fontWeight: '300',
  color: '#000',
  marginTop:2,
},


})