import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Label, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';


const gustData = [

    {
        id: '1',
        image: require('../EventsScreen/assets/cityimage.png'),
        fav: require('../EventsScreen/assets/fav.png'),
        chat: require('../EventsScreen/assets/chat1.png'),
        share: require('../EventsScreen/assets/share.png'),
        City: 'Moga,Punajab',
        date: '',
        duration: '',
        type: '',
        no: '',
    },
    {
        id: '12',
        image: require('../EventsScreen/assets/cityimage.png'),
        fav: require('../EventsScreen/assets/fav.png'),
        chat: require('../EventsScreen/assets/chat1.png'),
        share: require('../EventsScreen/assets/share.png'),
        City: 'Moga,Punajab',
        date: '',
        duration: '',
        type: '',
        no: '',
    },
    {
        id: '3',
        image: require('../EventsScreen/assets/cityimage.png'),
        fav: require('../EventsScreen/assets/fav.png'),
        chat: require('../EventsScreen/assets/chat1.png'),
        share: require('../EventsScreen/assets/share.png'),
        City: 'Moga,Punajab',
        date: '',
        duration: '',
        type: '',
        no: '',
    },


]

const GustData = ({ item,navigation }) => {
    return (
        <View style={styles.mainList}>

            
                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.Pic}>
                        <Image source={item.image} style={styles.pic} />
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={{ fontSize: 35, fontWeight: '600', color: '#000' }}>{item.City}</Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.fav}>
                            <Image source={item.fav} style={{ height: 50, width: 50 }} />
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.adress}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={styles.label} >Events Date: </Text>
                        </View>
                        <View>
                            <TextInput style={styles.name}>
                                {item.date}
                            </TextInput>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={styles.label} >Events Duration: </Text>
                        </View>
                        <View>
                            <TextInput style={styles.duration}>
                                {item.duration}
                            </TextInput>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={styles.label} >Events Type: </Text>
                        </View>
                        <View>
                            <TextInput style={styles.name}>
                                {item.type}
                            </TextInput>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={styles.label} >No. of Stall: </Text>
                        </View>
                        <View>
                            <TextInput style={styles.name}>
                                {item.no}
                            </TextInput>
                        </View>
                    </View>

                </View>
           <View style={{borderWidth:1,width:80,marginTop:10,marginHorizontal:10,padding:5,borderRadius:10,backgroundColor:'blue'}}>
           <TouchableOpacity onPress={()=>navigation.navigate('EventSecond')}>
                <Text style={{fontSize:15,fontWeight:'500',color:'#fff'}}>Book Now</Text>
            </TouchableOpacity>
           </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 ,marginTop:-30}}>

                <TouchableOpacity>
                    <View style={{ marginRight: 20, margin: 2 }}>
                        <Image source={item.chat} style={{ height: 30, width: 32 }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ marginRight: 10, margin: 2 }}>
                        <Image source={item.share} style={{ height: 30, width: 27 }} />
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const EventsScreen = ({navigation}) => {

    return (
        <>
            <StatusBar backgroundColor="#0006C1" barStyle='light-content' />
            <SafeAreaView style={styles.container}>
                <ScrollView >

                    <View>
                        <View style={styles.mainlogo}>
                            <Image source={require('../EventsScreen/assets/logo.png')} style={styles.logo} />
                        </View>

                        <View style={styles.Name1}>
                            <View style={styles.topmain}>
                                <View style={styles.topad}>
                                    <Image source={require('../EventsScreen/assets/book.png')} style={styles.ad} />
                                </View>

                                <View style={styles.maintext}>
                                    <Text style={styles.toptext}>Book Event</Text>
                                </View>

                            </View>
                        </View>

                        <FlatList
                            // horizontal
                            data={gustData}
                            renderItem={GustData}
                            keyExtractor={item => item.id}
                        />


                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default EventsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    mainlogo: {
        alignItems: 'center',
        justifyContent: "center",
        marginVertical: 40,
    },
    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginTop: '10%'
    },
    mainList: {
        height: 400,
        width: '97%',
        borderWidth: 1,
        marginHorizontal: 7,
        marginVertical: 5,
        borderRadius: 10
    },
    Name1: {
        height: 55,
        width: "97%",
        // borderWidth: 1,
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
        height: 40,
        width: 40,
    },
    maintext: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        // marginRight:25,
    },
    toptext: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "900",
        color: "#000"
    },
    Pic: {
        // marginVertical: 30,
        marginHorizontal: 15,
        marginTop: 15
    },
    pic: {
        height: 100,
        width: 100
    },
    fav: {
        marginLeft: 15,
        marginVertical: 25
    },
    adress: {
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        height: 200,
        borderRadius: 15
    },
    label: {
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
    },
    name: {
        borderBottomWidth: 2,
        width: 260,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    duration: {
        borderBottomWidth: 2,
        width: 230,
        height: 38,
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10
    },
})