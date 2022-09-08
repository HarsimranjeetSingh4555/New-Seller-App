import React, { useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import CustomDropDown from '../../../Component/CustomDropDown/CustomDropDown';
import { Picker } from '@react-native-picker/picker';
import CustomGender from '../../../Component/CustomGender/CustomGender';
import CustomUpload from '../../../Component/CustomUpload';


export default function JobOffer({ route }) {


    console.disableYellowBox = true
    const [text, onChangeText] = React.useState();
    const [fname, onChangeFname] = React.useState();
    const [city, onChangeCity] = React.useState();
    const [number, onChangeNumber] = React.useState();
    const [passport, onChangePassport] = React.useState()
    const [email, onChangeEmail] = React.useState();
    const [dob, onChangeDob] = React.useState();
    const [photo, onChangePhoto] = React.useState();
    const [upload, onChangeUpload] = React.useState();


    const [passportOption, setPassportOption] = useState(null);
    const passportData = [
        { value: 'Ordinary Passport' },
        { value: 'Official Passport' },
        { value: 'Diplomatic Passport' },
        { value: 'Emergency Passport' },
        { value: 'Family Passport' },
        { value: 'Collective Passport' },
    ];

    // service button
    const [option, setOption] = useState(null);
    const data = [
        { value: 'New Passport' },
        { value: 'Certificate Emergency' },
        { value: 'Re isssues' },
        { value: 'Lost / Damage' },
    ];

    return (
        <>

            <StatusBar backgroundColor="#0006C1" barStyle='light-content' />


            <ScrollView style={styles.container}>
                <View>
                    <View>
                        <Image source={require('../../HomeScreen/assets/logo.png')} style={styles.logo} />
                    </View>

                    <View>
                        <Text style={styles.mainText}>Offer Jobs</Text>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                           Job Title:
                        </Text>
                        <View style={styles.category}>
                        <TextInput> Enter Job Title </TextInput>
                        </View>
                    </View>
                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                           Total Employee Required:
                        </Text>
                        <View style={styles.category}>
                        <TextInput> Total Employee Required </TextInput>
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                            Who Can apply :
                        </Text>
                        <View style={styles.category}>
                            <CustomGender />
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                            Salary Period :
                        </Text>
                        <View style={styles.category}>
                            <CustomGender />
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                          Last Date for Apply:
                        </Text>
                        <View style={styles.category}>
                        <TextInput> DD\MM\YY </TextInput>
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                          Salary To:
                        </Text>
                        <View style={styles.category}>
                        <TextInput> Salary from </TextInput>
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                          Position Type:
                        </Text>
                        <View style={styles.category}>
                        <TextInput>Position Type</TextInput>
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                        MinimumQualification Required:
                        </Text>
                        <View style={styles.category}>
                        <TextInput>Minimum Qualification Required </TextInput>
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                        Minimum Experience:
                        </Text>
                        <View style={styles.category}>
                        <TextInput>Minimum Experience</TextInput>
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                        Describe About This Job :
                        </Text>
                        <View style={styles.category}>
                        <TextInput>Describe About This Job </TextInput>
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                        Location :
                        </Text>
                        <View style={styles.category}>
                        <TextInput>Location</TextInput>
                        </View>
                    </View>

                    <View style={styles.uploadtype}> 
                        <CustomUpload/>
                    </View>

                    <View >
                        <TouchableOpacity style={styles.submitbtn} >
                            <Text style={styles.submittext}> Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </>
    );
}

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
        marginVertical: 10
    },
    border: {
        borderWidth: 1,
        marginHorizontal: 10
    },
    submitbtn: {
        marginVertical: 10,
        marginHorizontal: 10,
        height: 50,
        width: "95%",
        backgroundColor: "#0006C1",
        marginBottom: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submittext: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },
    drop:{
        borderWidth:1,
        marginHorizontal:10,
        borderRadius:10,
        marginTop:10
    },
    headerText:{
        fontSize:15,
        marginHorizontal:10,
        fontWeight:'600',
        color:"#0006C1",
        marginVertical:5
    },
   uploadtype: {
    height: 370,
    width: "95%",
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: "#0006C1",
    marginVertical: 10,
    borderRadius:10

  },

});

