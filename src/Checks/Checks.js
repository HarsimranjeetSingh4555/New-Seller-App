import { StyleSheet, ScrollView, FlatList,Dimensions, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Checks = () => {
   
  
    // const data = [
    //     {
    //         id: "1",
    //         // img: require('../../Profile/assets/reviews.png'),
    //         header: 'PORFENSSIONAL',
    //         header2: 'Package Valid For 1 Month',
    //         header3: 'Price - 7000/- + 18% GST',
    //         dot: '.',
    //         text: ' Full Details : About us, Specialization, Contact Person Name, Deshigation with Pics, 5 Videos of 10 Mintus each,Office Pics, Yours certifications, Previous results & Customers reviews.',
    //         text1: 'Douryou Chat Unlimited',
    //         text2: 'Douryou Notifications Unlimited',
    //         text3: 'Sell Franchise Unlimited',
    //         text4: "Offer Jobs Unlimited",

    //         text5: 'Bydefult 5 Star Rating ',
    //         text6: '20 Ads Publish in all Area’s',
    //         text7: ' Listing all Categories ',
    //         text8: 'Top Listing Inbound leads From all Area’s ',
    //         text9: "Inbound leads From all Area’s",
    //         text10: 'Intersted Visitor',

    //         text11: 'User’s Requirments From all Area’s',
    //         text12: 'My Match Acording to my Specialzation form all Area’s',
    //         text13: 'Marketing Intelligence(Hot Prospects Identification through Artificial Intelligence) from all Area’s',

    //         text14: 'Interview Publish in all Area’s ',
    //         text15: 'Top Banner for 1 Months',
    //         text16: 'Lead Share of PR Customers',
    //         text17: 'Data Share of online weekly IELTS Test',
    //         text18: 'Discount 10% off on promosational Events stall Hot',
    //         text19: 'Area to target Customers',
    //         btn: 'Buy now'

    //     },
    //     {
    //         id: "2",
    //         // img: require('../../Profile/assets/reviews.png'),
    //         header: 'BUSINESS',
    //         header2: 'Package Valid For 1 Month',
    //         header3: 'Price - 5000/- + 18% GST',
    //         dot: '.',
    //         text: ' Full Details : About us, Specialization, Contact Person Name, Deshigation with Pics, 5 Videos of 10 Mintus each,Office Pics, Yours certifications, Previous results & Customers reviews.',
    //         text1: 'Douryou Chat Unlimited',
    //         text2: 'Douryou Notifications Unlimited',
    //         text3: 'Sell Franchise Unlimited',
    //         text4: "Offer Jobs Unlimited",



    //         text5: 'Bydefult 4 Star Rating ',
    //         text6: '10 Ads Publish in all Area’s',
    //         text7: ' Listing in 4 Categories ',
    //         text8: ' Middle Listing',
    //         text9: "Inbound leads From all Area’s",
    //         text10: 'Intersted Visitor',

    //         text11: 'User’s Requirments From all Area’s',
    //         text12: 'My Match Acording to my Specialzation form all Area’s',
    //         text13: 'Marketing Intelligence(Hot Prospects Identification through Artificial Intelligence) from all Area’s',
    //         text14: 'none ',
    //         text15: 'none ',
    //         text16: 'none ',
    //         text17: 'none ',
    //         text18: 'none ',
    //         text19: 'none ',
    //         btn: 'Buy now'


    //     },
    //     {
    //         id: "3",
    //         // img: require('../../Profile/assets/reviews.png'),
    //         header: 'ULTIMATE',
    //         header2: 'Package Valid For 1 Month',
    //         header3: 'Price - 3000/- + 18% GST',
    //         dot: '.',
    //         text: ' Full Details : About us, Specialization, Contact Person Name, Deshigation with Pics, 5 Videos of 10 Mintus each,Office Pics, Yours certifications, Previous results & Customers reviews.',
    //         text1: 'Douryou Chat Unlimited',
    //         text2: 'Douryou Notifications Unlimited',
    //         text3: 'Sell Franchise Unlimited',
    //         text4: "Offer Jobs Unlimited",

    //         text5: 'Bydefult 3 Star Rating ',
    //         text6: '5 Ads Publish in all Area’s',
    //         text7: ' Listing all Categories ',
    //         text8: ' Listing',
    //         text9: "Inbound leads From all Area’s",
    //         text10: 'Intersted Visitor',

    //         text11: 'none',
    //         text12: 'none',
    //         text13: 'none',
    //         text14: 'none ',
    //         text15: 'none ',
    //         text16: 'none ',
    //         text17: 'none ',
    //         text18: 'none ',
    //         text19: 'none ',

    //         btn: 'Buy now'

    //     },


    // ]

    const data = [
        {
          id: '40454230',
         heading: 'My top 3 Expertise',
          name: 'Butter Paneer',
          name2: 'Lassi',
          name3:'Chicken Curry',
          name4:'none',
        },
        {
          id: '70078463',
          heading: 'My cooking style',
          name: 'Baking',
          name2: 'Grilling',
          name3:'frying',
          name4:'Steaming'
        },
        {
          id: '99305926',
          name: 'Baking',
          name2: 'Grilling',
          name3:'frying',
          name4:'Steaming'
        },
      ]

    const [imageActive, setimageActive] = useState(0)
    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imageActive) {
                setimageActive(slide);
            }
        }
    }
    return (
        <ScrollView onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal style={styles.wrap}>
            {data.map((e, index) =>
                <View style={{ padding: 10 }}>
                    <Text style={styles.topText}>{e.heading}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <TouchableOpacity><View style={styles.borBut}><Text style={styles.textBut}>{e.name}</Text></View></TouchableOpacity>
                        <TouchableOpacity><View style={styles.borBut}><Text style={styles.textBut}>{e.name2}</Text></View></TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <TouchableOpacity><View style={styles.borBut}><Text style={styles.textBut}>{e.name3}</Text></View></TouchableOpacity>

                        {e.name4 != 'none' ? <TouchableOpacity><View style={styles.borBut}><Text style={styles.textBut}>{e.name4}</Text></View></TouchableOpacity>
                            : <View></View>
                        }
                    </View>
                </View>


            )}
        </ScrollView>
    )
}

export default Checks

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#E5E5E5;'
    },
    imageConst1:{
        marginTop:22,
        marginLeft:15
    },
    imgConst: {
        height: 300,
        width: 400,
    },
    heartIcon: {
        height: 30,
        width: 30,
        margin: 10,
    },
    textBut: {
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        margin: 5
    },
    borBut: {
        backgroundColor: '#187498',
        width: 150,
        height: 40,
        borderRadius: 20,
        elevation: 0.5
    },
    mainBut: {
        alignItems: 'flex-end',
        marginTop: -25,
        // marginHorizontal: 20
    },
    nameText: {
        fontWeight: '500',
        fontSize: 35,
        color: '#000'
    },
    text: {
        fontWeight: '600',
        color: '#797979',
        fontSize: 18
    },
    locConst: {
        flexDirection: 'row',
        margin: 10
    },
    rawMain: {
        flexDirection: 'row',
    },
    gryText: {
        color: '#797979',
        fontSize: 18,
        fontWeight: '400'
    },
    locBorder: {
        borderColor: '#969696',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginVertical: 10
    },
    textParag: {
        fontSize: 17,
        fontWeight: '500',
        color: '#999999',
        padding: 20
    },
    paraBor: {
        backgroundColor: '#ECECEC',
        borderRadius: 18,
        marginVertical: 10
    },
    topText: {
        color: '#000',
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center'
    },
    imaCont: {
        alignItems: 'center',
        marginVertical: 20
    },
    imgCon: {
        height: 200,
        width: 200,
    },
    topText1: {
        color: '#FF5A6A',
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center'
    },
    texPar: {
        color: '#97999B',
        fontSize: 23.5,
        textAlign: 'center',
        marginVertical: 20
    },
    topText2: {
        color: '#187498',
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 10
    },
    topTex: {
        color: '#000',
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 40
    },
    imgCon: {
        height: 80,
        width: 80,
    },
    topTe: {
        color: '#000',
        fontSize: 22,
        fontWeight: '600',
        marginHorizontal: 15
    },
    paraBord: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        marginVertical: 10,
        borderWidth: 1,
    },
    raw: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    mainButton: {
        backgroundColor: '#187498',
        height: 50,
        borderRadius: 12,
        marginVertical: 15
    },
    textBut1: {
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        margin: 12
    },
    raw2: {
        flexDirection: 'row',
    },
    modalText: {
        color: '#000',
        fontSize: 16.5,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 15
    },
    Input1: {
        justifyContent: "center",
        marginVertical: 30,
    },
    imageList: {
        height: 50,
        width: 250,
        borderRadius: 10,
        opacity: 0.2,
        borderColor: '#000',
        borderWidth: 2,
        marginVertical: 5
    },
    textList: {
        position: "absolute",
        margin: 15,
        fontSize: 20,
        fontWeight: '600',
        alignSelf: "center",
        color: '#000',
    },
    minBut: {
        backgroundColor: '#187498',
        height: 50,
        borderRadius: 12,
    },
    imageStar: {
        height: 28,
        width: 28,
    },
    wrap: {
        width: WIDTH * 0.90,
        height: HEIGHT * 0.26,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        overflow: 'hidden',
      },
      wrapdot: {
        position: "absolute",
        flexDirection: "row",
        alignSelf: "center",
        marginVertical:150
      },
      dotActive: {
        margin: 4,
        marginTop: 8,
        color: "black",
        height: 15,
        width:15,
        // borderRadius:50,
        // width: "27%",
        borderRadius: 8,
        borderWidth: 8,
        borderColor: '#187498',
      },
      dot: {
        margin: 4,
        marginTop: 8,
        color: "red",
        height: 15,
        width:15,
        borderRadius: 8,
        borderWidth: 8,
        borderColor: '#969696',
      },
})