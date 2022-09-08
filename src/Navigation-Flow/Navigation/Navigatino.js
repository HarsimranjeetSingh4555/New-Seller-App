import { View, Text, EventEmitter } from 'react-native'
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigation from '../TopTabNavigation/TopTabNavigation';
import WellComeScreen from '../../screen/LoginFlow/WellcomeScreen/WellComeScreen';
import Login from '../../screen/LoginFlow/Login/Login';
import VerifyCode from '../../screen/LoginFlow/VerifiyCode/VerifyCode';
import CreateProfie from '../../screen/LoginFlow/CreateProfile/CreateProfie';
import Profile from '../../screen/LoginFlow/Profile/Profile';
import Aboutus from '../../screen/LoginFlow/Aboutus/Aboutus';
import MyMatch from '../../screen/LoginFlow/MyMatch/MyMatch';
import UploadeOfficePic from '../../screen/LoginFlow/Profile/UploadeOfficePic/UploadeOfficePic';
import Certificate from '../../screen/LoginFlow/Profile/Certificate/Certifacate';
import Result from '../../screen/LoginFlow/Profile/Result/Result';
import Review from '../../screen/LoginFlow/Profile/Review/Review';
import BuyPlan from '../../screen/LoginFlow/Profile/BuyPlan/BuyPlan';
import Profenssional from '../../screen/LoginFlow/Profile/Profenssional/Profenssional';
import Business from '../../screen/LoginFlow/Profile/Business/Business';
import Ultimate from '../../screen/LoginFlow/Profile/Ultimate/Ultimate';

import UsaList from '../../screen/PrCategories/UsaList/UsaList';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';
import Demo from '../../screen/HomeScreen/ILETSScreen/Demo';
import StudentFee from '../../screen/HomeScreen/ILETSScreen/StudentFee/StudentFee';
import ClassTiming from '../../screen/HomeScreen/ILETSScreen/ClassTiming/ClassTiming';
import MyClass from '../../screen/HomeScreen/ILETSScreen/MyClass/MyClass';
import AICustomer from '../../screen/HomeScreen/SpecialScreen/AICustomer/AICustomer';
import Home from '../../screen/HomeScreen/SpecialScreen/Home/Home';
import HotArea from '../../screen/HomeScreen/SpecialScreen/HotArea/HotArea';
import EventsScreen from '../../screen/EventsScreen/EventsScreen';
import PrCategories from '../../screen/PrCategories/PrCategories';
import PrEnquirtForm from '../../screen/PrCategories/PrEnquirtForm';
import PrForm from '../../screen/PrCategories/PrEnquirtForm/PrForm/PrForm';
import Canada from '../../screen/PrCategories/CanadaList/Canada/Canada';
import CanadaList from '../../screen/PrCategories/CanadaList/CanadaList';
import Usa from '../../screen/PrCategories/UsaList/USA/Usa';
import Uk from '../../screen/PrCategories/UkList/UK/Uk';
import Australia from '../../screen/PrCategories/AustrilaList/Australia/Australia';
import NewZealand from '../../screen/PrCategories/NewZealandList/NewZealand/NewZealand';
import UkList from '../../screen/PrCategories/UkList';
import AustrilaList from '../../screen/PrCategories/AustrilaList/AustrilaList';
import NewZealandList from '../../screen/PrCategories/NewZealandList/NewZealandList';
import ViewAds from '../../screen/Lists/ViewAds';
import LikeAds from '../../screen/Lists/LikeAds';
import ShareAds from '../../screen/Lists/ShareAds';
import ViewInterview from '../../screen/Lists/ViewInterview/ViewInterview';
import LikeInterview from '../../screen/Lists/LikeInterview/LikeInterview';
import ShareInterview from '../../screen/Lists/ShareInterview';
import ViewProfile from '../../screen/Lists/ViewProfile/ViewProfile';
import LikeProfile from '../../screen/Lists/LikeProfile/LikeProfile';
import ShareProfile from '../../screen/Lists/ShareProfile/ShareProfile';
import JobOffer from '../../screen/Form/JobOffer';
import CustomTodatDeal from '../../Component/CustomTodayDeal/CustomTodatDeal';
import SellFranchise from '../../screen/Form/SellFranchise/SellFranchise';
import InterstedVistor from '../../screen/InterstedVisitor/InterstedVistor';
import UserRequirement from '../../screen/HomeScreen/UserRequirement/UserRequirement';
import WeeklyTest from '../../screen/WeeklyTest/WeeklyTest';
import ListofStudent from '../../screen/WeeklyTest/ListofStudent/ListofStudent';
import EventSecond from '../../screen/EventsScreen/EventSecond';
import PaymentGateWay from '../../screen/EventsScreen/PaymentGateWay/PaymentGateWay';
import ProfileDetails from '../../screen/ProfileDetails/ProfileDetails'







const Navigatino = () => {

  const Stack = createNativeStackNavigator();

  const [showWellcome, setShowWellcome] = useState(true)
  const [showWellcome1, setShowWellcome1] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowWellcome(false)
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowWellcome1(false)
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {showWellcome ? <Stack.Screen
          name="WellComeScreen" component={WellComeScreen} />
          : null}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="CreateProfie" component={CreateProfie} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Aboutus" component={Aboutus} />
        <Stack.Screen name="MyMatch" component={MyMatch} />
        <Stack.Screen name="UploadeOfficePic" component={UploadeOfficePic} />
        <Stack.Screen name="Certificate" component={Certificate} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="BuyPlan" component={BuyPlan} />
        <Stack.Screen name="Profenssional" component={Profenssional} />
        <Stack.Screen name="Business" component={Business} />
        <Stack.Screen name="Ultimate" component={Ultimate} />

        <Stack.Screen 
        name="PaymentGateWay" component={PaymentGateWay} />
       
 
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        
        <Stack.Screen name="PrCategories" component={PrCategories} />
        <Stack.Screen name="PrEnquirtForm" component={PrEnquirtForm} />
        <Stack.Screen name="PrForm" component={PrForm} />
        <Stack.Screen name="Canada" component={Canada} />
        <Stack.Screen name="CanadaList" component={CanadaList} />
        <Stack.Screen name="UsaList" component={UsaList} />
        <Stack.Screen name="USA" component={Usa} />
        <Stack.Screen name="Uk" component={Uk} />
        <Stack.Screen name="UkList" component={UkList} />
        <Stack.Screen name="Australia" component={Australia} />
        <Stack.Screen name="AustrilaList" component={AustrilaList} />     
        <Stack.Screen name="NewZealand" component={NewZealand} />
        <Stack.Screen name="NewZealandList" component={NewZealandList} />
       
        
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="StudentFee" component={StudentFee} />
        <Stack.Screen name="ClassTiming" component={ClassTiming} />
        <Stack.Screen name="MyClass" component={MyClass} />
        <Stack.Screen name="AICustomer" component={AICustomer} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HotArea" component={HotArea} />
        <Stack.Screen name="EventsScreen" component={EventsScreen} />
        <Stack.Screen name="EventSecond" component={EventSecond} />
   
        <Stack.Screen name="ViewAds" component={ViewAds} />
        <Stack.Screen name="LikeAds" component={LikeAds} />
        <Stack.Screen name="ShareAds" component={ShareAds} />
        <Stack.Screen name="ViewInterview" component={ViewInterview} />
        <Stack.Screen name="LikeInterview" component={LikeInterview} />
        <Stack.Screen name="ShareInterview" component={ShareInterview} />
        <Stack.Screen name="ViewProfile" component={ViewProfile} />
        <Stack.Screen name="LikeProfile" component={LikeProfile} />
        <Stack.Screen name="ShareProfile" component={ShareProfile} />
        <Stack.Screen name="CustomTodatDeal" component={CustomTodatDeal} />
        <Stack.Screen name="JobOffer" component={JobOffer} />
        <Stack.Screen name="SellFranchise" component={SellFranchise} />
        <Stack.Screen name="InterstedVistor" component={InterstedVistor} />
        <Stack.Screen name="UserRequirement" component={UserRequirement} />
        <Stack.Screen name="WeeklyTest" component={WeeklyTest} />
        <Stack.Screen name="ListofStudent" component={ListofStudent} />

        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigatino