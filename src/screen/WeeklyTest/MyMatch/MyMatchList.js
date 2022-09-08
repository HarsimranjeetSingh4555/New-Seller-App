import { StyleSheet, ScrollView, StatusBar, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from 'react'
import MyMatch from "../../LoginFlow/MyMatch/MyMatch";

const MyMatchList = ({ navigation }) => {
    return (
        <>

            <StatusBar backgroundColor="#0006C1" barStyle='light-content' />


            <ScrollView style={styles.container}>
                <View>
                    <View>
                        <Image source={require('../../../screen/HomeScreen/assets/logo.png')} style={styles.logo} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <View>
                            <Image source={require('../../HomeScreen/assets/mymatch.png')} style={{ height: 50, width: 50, marginVertical: 15, marginHorizontal: 10 }} />
                        </View>
                        <View>
                            <Text style={styles.mainText}>MyMatch </Text>
                        </View>
                    </View>

                    <View style={styles.border}>

                        <View style={styles.drop}>
                            <Text style={styles.headerText}>
                                Name
                            </Text>
                            <View style={styles.category}>
                                <TextInput>101 </TextInput>
                            </View>
                        </View>
                        <View style={styles.drop}>
                            <Text style={styles.headerText}>
                                Father Name
                            </Text>
                            <View style={styles.category1}>
                                <TextInput>18-04-2022 </TextInput>
                            </View>
                        </View>
                        <View style={styles.drop}>
                            <Text style={styles.headerText}>
                                Qualification
                            </Text>
                            <View style={styles.categoryC}>
                                <TextInput>2022 </TextInput>
                            </View>
                        </View>
                        <View style={styles.drop}>
                            <Text style={styles.headerText}>
                                City Name
                            </Text>
                            <View style={styles.category}>
                                <TextInput>2022 </TextInput>
                            </View>
                        </View>
                        <View style={styles.drop}>
                            <Text style={styles.headerText}>
                                Mobile No.
                            </Text>
                            <View style={styles.category}>
                                <TextInput>2022 </TextInput>
                            </View>
                        </View>

                        <View style={styles.border2}>
                            <View style={styles.drop}>
                                <Text style={styles.headerText2}>
                                    Name of IELTS institute
                                </Text>
                                <View style={styles.category2}>
                                    <TextInput>101 </TextInput>
                                </View>
                            </View>
                            <View style={styles.drop}>
                                <Text style={styles.headerText2}>
                                    City Name of IELTS Institute
                                </Text>
                                <View style={styles.category2}>
                                    <TextInput>101 </TextInput>
                                </View>
                            </View>
                            <View style={styles.drop}>
                                <Text style={styles.headerText2}>
                                    Joining Date of Institute
                                </Text>
                                <View style={styles.category2}>
                                    <TextInput>101 </TextInput>
                                </View>
                            </View>
                        </View>

                        <View style={{ borderWidth: 1, marginHorizontal: 12, marginVertical: 15, borderRadius: 12, height: 100 }}>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: '500', marginHorizontal: 15, color: 'red', marginTop: 10 }}>Over all Results</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>

                                <View style={{ borderWidth: 1, width: '30%', height: 50, borderRadius: 10 }}>
                                    <TouchableOpacity>
                                        <View>
                                            <Text style={styles.band}>Speaking</Text>
                                            <Text style={styles.student}>40 Students</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ borderWidth: 1, width: '30%', height: 50, borderRadius: 10 }}>
                                    <TouchableOpacity>
                                        <View>
                                            <Text style={styles.band}>Reading</Text>
                                            <Text style={styles.student}>150 Students</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ borderWidth: 1, width: '30%', height: 50, borderRadius: 10 }}>
                                    <TouchableOpacity>
                                        <View>
                                            <Text style={styles.band}>Listening</Text>
                                            <Text style={styles.student}>300 Students</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                    </View>

                    <View style={{ backgroundColor: "#0006C1", marginHorizontal: 10, marginVertical: 10, padding: 15, borderRadius: 13 }}>
                        <TouchableOpacity>
                            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: '500', color: '#fff' }}>Post</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default MyMatchList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight,
    },
    logo: {
        marginTop: 10,
        height: 70,
        width: 130
    },
    mainText: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: '500',
        color: '#000',
        marginVertical: 20,
        marginHorizontal: 10
    },
    drop: {
        // borderWidth:1,
        // marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    border: {
        borderWidth: 1,
        borderColor: "#0006C1",
        marginHorizontal: 10,
        borderRadius: 12,
        height: 'auto'
    },
    border2: {
        borderWidth: 1,
        height: 150,
        marginHorizontal: 10,
        borderRadius: 12,
        marginTop: 15
    },
    headerText: {
        fontSize: 18,
        // marginHorizontal: 10,
        fontWeight: '600',
        color: "#0006C1",
        marginVertical: 5,
    },
    headerText2: {
        fontSize: 14,
        fontWeight: '600',
        color: "#0006C1",
        marginVertical: 10,

    },
    category1: {
        borderBottomWidth: 2,
        width: 220,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: -3,
        marginRight: 10
    },
    category: {
        borderBottomWidth: 2,
        width: 230,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: -3,
        marginLeft: 5
    },
    categoryC: {
        borderBottomWidth: 2,
        width: 220,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: -3,
        marginLeft: -10
    },
    category2: {
        borderBottomWidth: 2,
        width: 150,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        marginTop: -5,
        marginRight: 10
    },
    band: {
        textAlign: 'center',
        color: '#000',
        fontSize: 15,
        fontWeight: '500'
    },
    student: {
        textAlign: 'center',
        color: '#000',
        fontSize: 15,
        fontWeight: '400'
    },
})