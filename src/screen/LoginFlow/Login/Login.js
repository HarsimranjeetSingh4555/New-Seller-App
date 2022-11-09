import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react';
import PhoneInput from 'react-native-phone-number-input';



const Login = ({ navigation }) => {
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
                            <Text style={styles.wel}> WELCOME</Text>
                        </View>
                        <View>
                            <Text style={styles.text}> We will send an SMS message to  {'\n'} verify your phone number</Text>
                        </View>
                    </View>

                    <View style={styles.PhoneInput}>
                        <PhoneInput
                            defaultValue={number}
                            defaultCode='IN'
                            containerStyle={{
                                height: 60,
                                borderRadius: 10,
                                borderWidth: 1

                            }}
                            textContainerStyle={{
                                paddingTop: 0,
                                fontWeight: '600',
                                height: 58,
                                paddingBottom: -10,
                                borderRadius: 10
                            }}
                        />

                    </View>
                    <View style={styles.SMS}>
                        <Text style={styles.smstext}> Carrier SMS charges may apply</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('VerifyCode')} style={styles.Btn}>
                        
                            <Text style={styles.btn}> Submit </Text>
                        
                    </TouchableOpacity>
                    {/* <View style={styles.SMS}>
                        <Text style={styles.smstext}>Not a member?</Text>
                    </View> */}

                </View>
            </ScrollView>
        </>

    )
}

export default Login

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        height: 160,
        alignSelf: 'center',
        marginTop: '25%'
    },
    wel: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
        fontWeight: '600'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        color: '#000000',
        fontWeight: '600'
    },
    PhoneInput: {
        marginTop: '10%',
        // marginHorizontal: 35,
        alignSelf: 'center'
    },
    SMS: {
        alignSelf: "center",
        marginTop: 20
    },
    smstext: {
        color: '#7F8184',
        fontWeight: '500',
        fontSize: 20,
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
    bottomBtn: {
        padding: 5,
        paddingHorizontal: 7,
        borderRadius: 5,
        marginHorizontal: 13
    },
    bottomBtnImg: {
        height: 45,
        width: 45
    }

})