import { StyleSheet, Text, View, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'

const HomeScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increment = () => {
    if (count <= count) {
      setCount(count + 1)
    }
  }
  const bell = () => {
    if (count1 <= count1) {
      setCount1(count1 + 1)
    }
  }

  return (
    <>
      <StatusBar
        backgroundColor="#0006C1"
        barStyle={'light-content'} />

      <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
        <View>

          <View style={styles.navbar}>
            <View>
              <Image source={require('../HomeScreen/assets/logo.png')} style={styles.Logo} />
            </View>
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>

              <View>

                <TouchableOpacity onPress={() => increment()}>
                  <Image source={require('../../screen/HomeScreen/assets/chat1.png')} style={styles.message} />
                  <View>
                    <View style={{ backgroundColor: '#D1070A', borderRadius: 999, height: 17, width: 17, position: 'absolute', marginTop: -30, marginLeft: 29 }}>
                      <Text style={{ color: '#fff', textAlign: 'center', marginTop: -1, fontWeight: '400' }}>{count}</Text>
                    </View>
                  </View>
                </TouchableOpacity>

              </View>

              <View>
                <TouchableOpacity onPress={() => bell()}>
                  <Image source={require('../HomeScreen/assets/bell.png')} style={styles.bell} />
                  <View>
                    <View style={{ backgroundColor: '#D1070A', borderRadius: 999, height: 17, width: 17, position: 'absolute', marginTop: -31, marginLeft: 23 }}>
                      <Text style={{ color: '#fff', textAlign: 'center', marginTop: -1, fontWeight: '400' }}>{count1}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          </View>

          <View style={styles.bordertop}>

            <View style={{ flexDirection: 'row' }}>
              <View>
                <TouchableOpacity onPress={()=>navigation.navigate('ProfileDetails')}>
                  <Image source={require('../HomeScreen/assets/rose.jpg')} style={styles.dp} />
                </TouchableOpacity>
              </View>
              <View style={{ marginVertical: 15 }}>
                <TouchableOpacity>
                  <Text style={styles.link}>Eazyvisa Immigration Cusultalt</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.adress}>Sco-40-41</Text>
                  <Text style={styles.adress}>Sector-34A,Chandigarh</Text>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={require('../HomeScreen/assets/pen.png')} style={styles.pen} />
              </TouchableOpacity>
            </View>

            <View style={styles.bar}>
              <View style={{ marginVertical: 10 }}>
                <Text style={{ color: '#EFD757', fontSize: 20, fontStyle: 'italic', fontWeight: '500' }}>Professional</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
                <Image source={require('../HomeScreen/assets/Star.png')} style={styles.star} />
              </View>
            </View>

          </View>

          <View style={{ marginVertical: 20 }}>
            <Text style={{ textAlign: 'center', color: '#000', fontSize: 30, fontWeight: 'bold' }}>Business Panel</Text>
          </View>


          <View style={{ borderWidth: 2, marginHorizontal: 7, backgroundColor: '#000', marginVertical: 20 }}></View>



          <View style={styles.mainBorder}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 10 }}>
                <Image source={require('../HomeScreen/assets/customer.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 30, fontWeight: '900', color: '#0006C1' }}>Your Customer</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('ViewAds')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/ads.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>View Ads</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('LikeAds')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/ads.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Like Ads</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('ShareAds')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/ads.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Share Ads</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('ViewInterview')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/interview.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>View Interview</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('LikeInterview')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/interview.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Like Interview</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('ShareInterview')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/interview.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Share Interview</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('ViewProfile')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/profile.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>View Profile</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('LikeProfile')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/profile.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Like Profile</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={()=>navigation.navigate('ShareProfile')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/profile.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Share Profile</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

          </View>

          <View style={styles.mainBorder2}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/offer.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 30, fontWeight: '900', color: '#0006C1' }}>Post Your Offer </Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('CustomTodatDeal')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/today.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Today's Deal</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('JobOffer')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/job.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Offer Jobs</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={()=>navigation.navigate('SellFranchise')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/sell.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Franchise Sell</Text>
                  </View>
                </TouchableOpacity>
              </View>



            </View>
          </View>


          <View style={styles.mainBorder3}>
            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/FavR.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 30, fontWeight: '900', color: '#0006C1' }}>Favorite Customer </Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/FavR.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Favorite Customer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

          </View>

          <View style={styles.mainBorder3}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/deal.png')} style={{ width: 45, height: 45 }} />
              </View>
              <View style={{ marginVertical: 18 }}>
                <Text style={{ fontSize: 28, fontWeight: '900', color: '#0006C1' }}>Latest Deals for you </Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('InterstedVistor')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/vistor.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Intersted Vistors</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('UserRequirement')}>
                  <View style={{ alignSelf: 'center', marginTop: 15 }}>
                    <Image source={require('../HomeScreen/assets/user.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000',marginTop:5 }}>User’s Requirments</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
            </View>

           <View style={styles.mainBorder4}>
          <TouchableOpacity onPress={()=>navigation.navigate('PrCategories')}>
          <View style={styles.customer}>
              <View style={{ marginVertical: 10 }}>
                <Image source={require('../HomeScreen/assets/prr.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 35, fontWeight: '900', color: '#0006C1' }}>PR Score</Text>
              </View>
            </View>
          </TouchableOpacity>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('PrEnquirtForm')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/prform.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>PR Enquiry form </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('CanadaList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/canada.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Canada</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('UsaList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/usa.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>USA</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('UkList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/uk.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>UK</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('AustrilaList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/aus.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Australia</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('NewZealandList')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/nz.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>New-Zealand</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
           </View>


           <View style={styles.mainBorder5}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/offer.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 35, fontWeight: '900', color: '#0006C1' }}>Special For You</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/mymatch.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>My Match</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('WeeklyTest')}>
                  <View style={{ alignSelf: 'center', marginTop: 15 }}>
                    <Image source={require('../HomeScreen/assets/test.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' ,marginTop:2}}>Online Weekly IELTS Test</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/home.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#000' }}>Home Cunsultncy</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=> navigation.navigate('HotArea')}>
                  <View style={{ alignSelf: 'center', marginTop: 20 }}>
                    <Image source={require('../HomeScreen/assets/area.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' , marginTop:8}}>Hot Area To Target </Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.boxlst}>
                <TouchableOpacity onPress={()=> navigation.navigate('AICustomer')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/ai.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>A.I. Customers</Text>
                  </View>
                </TouchableOpacity>
              </View>



            </View>
           </View>

           <View style={styles.mainBorder6}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/ilets.png')} style={{ width: 50, height: 50,marginLeft:50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 35, fontWeight: '900', color: '#0006C1' ,marginRight:50}}>IELTS</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('Demo')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/demo.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Demo Class</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('ClassTiming')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/time.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Class Timing </Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('StudentFee')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/fees.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#000' }}> Student Fees</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('MyClass')}>
                  <View style={{ alignSelf: 'center', marginTop:15 }}>
                    <Image source={require('../HomeScreen/assets/classroom.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' ,}}>My Classroom </Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
           </View>

           <View style={styles.mainBorder7}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/event.png')} style={{ width: 50, height: 50,marginLeft:50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 35, fontWeight: '900', color: '#0006C1' ,marginRight:50}}>Events</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('EventsScreen')}>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/book.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>Book Event </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/event.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#000' }}>My Events</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

           </View>

           <View style={styles.mainBorder7}>

            <View style={styles.customer}>
              <View style={{ marginVertical: 15 }}>
                <Image source={require('../HomeScreen/assets/men.png')} style={{ width: 50, height: 50,marginLeft:50 }} />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 35, fontWeight: '900', color: '#0006C1' ,marginRight:50}}>Support</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

              <View style={styles.box}>
                <TouchableOpacity>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/package.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#000' }}>Business Package</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <TouchableOpacity>
                  <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                    <Image source={require('../HomeScreen/assets/help.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#000' }}>Help & Support</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

           </View>

           <TouchableOpacity>
          <View style={{backgroundColor:'#0006C1',padding:15,marginHorizontal:7,borderRadius:13,marginVertical:10}}>  
            <Text style={{textAlign:'center',color:'#fff',fontSize:25,fontWeight:'800'}}>LOG OUT</Text>
          </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    height: 60,
  },
  Logo: {
    // color: '#D1070A',
    marginTop: 10,
    height: 50,
    width: 90
  },
  message: {
    height: 26,
    width: 27,
    marginTop: 13,
    marginHorizontal: 10,
    position: 'relative'
  },
  bell: {
    height: 30,
    width: 25,
    marginTop: 10,
    marginHorizontal: 7,
  },
  search: {
    height: 40,
    width: 40,
    marginTop: 9,
    // marginHorizontal: 8,
  },
  bordertop: {
    height: 'auto',
    width: '97%',
    marginHorizontal: 7,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 12
  },
  dp: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10
  },
  link: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "#0006C1"
  },
  adress: {
    color: "#000",
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 3
  },
  pen: {
    height: 35,
    width: 35,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: -30
  },
  bar: {
    backgroundColor: "#0006C1",
    height: 45,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  star: {
    width: 15,
    height: 15,
  },
  mainBorder: {
    borderWidth: 1,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,

  },
  customer: {
    borderWidth: 1,
    height: 90,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  box: {
    borderWidth: 1,
    borderRadius: 12,
    height: 160,
    width:Dimensions.get('screen').width*0.44,
  },
  boxlst: {
    borderWidth: 1,
    borderRadius: 12,
    height: 140,
    width: '98%',
  },
  mainBorder2: {
    borderWidth: 1,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 20
  },
  mainBorder3: {
    borderWidth: 1,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height:  'auto',
    borderRadius: 12,
    marginVertical: 5
  },
  mainBorder4: {
    borderWidth: 1,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 5
  },
  mainBorder5: {
    borderWidth: 1,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 5
  },
  mainBorder6: {
    borderWidth: 1,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height:  'auto',
    borderRadius: 12,
    marginVertical: 5
  },
  mainBorder7: {
    borderWidth: 1,
    borderColor: '#0006C1',
    marginHorizontal: 7,
    height: 'auto',
    borderRadius: 12,
    marginVertical: 5
  },

})