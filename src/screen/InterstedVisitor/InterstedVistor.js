import { StyleSheet, Text, View, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const InterstedVistor = () => {
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
                        </View>
                    </View>

                    <View>
                        <Text style={styles.vistor}>Intersted Vistors</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/ilets.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>ILETS</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/read.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Study Visa</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Passport.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Passport</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Loan.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Education Loan </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/AirTicket.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Trevel Insurance</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/airport.png')} style={{ width: 70, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>AirPort</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Tourist.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Tourist & Business {'\n'}visa </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Permit.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Work Permit</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/JobAbroad.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Jobs at{'\n'} Abroad </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Accom.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Accommoda-{'\n'} tion at Abroad</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/PR.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}> Permanent{'\n'}Resident</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/TourTravel.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Tour & Travel{'\n'}Package</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/Internation.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>International{'\n'}Courier </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/LegalAdv.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Legal Advisor</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 7, marginVertical: 10 }}>

                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/test.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Onliine IELTS{'\n'}Class  </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.box}>
                                <View>
                                    <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                                        <Image source={require('../HomeScreen/assets/weekly.png')} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={styles.text}> Online Weekly{'\n'}IELTS Test </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default InterstedVistor

const styles = StyleSheet.create({
    Logo: {
        // color: '#D1070A',
        marginTop: 10,
        height: 50,
        width: 90
    },
    vistor: {
        textAlign: 'center',
        color: '#000',
        fontSize: 30,
        fontWeight: '900'
    },
    box: {
        borderWidth: 1,
        borderRadius: 12,
        height:170,
        width:Dimensions.get('screen').width*0.45,
    },
    text: {
        textAlign: 'center',
        color: "#000",
        fontSize: 20,
        fontWeight: '900'
    },
})