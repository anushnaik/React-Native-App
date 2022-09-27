import * as React from "react";
import {Image, Text, View, SafeAreaView } from "react-native";
import { TextInput, Button} from 'react-native-paper';
import axios from "axios";

const Second = ({ route, navigation }: any) => {
    const { countryName } = route.params
    const { useLayoutEffect, useState } = React;
    const [wrongCountryError, setwrongCountryError] = useState(false);
    const [countryDetail, setCountryDetail] = useState({
        "flags": { "png": "https://" }, "capital": "", "latlng": [0, 0], "population": ""
    })

    useLayoutEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((response) => {
                setCountryDetail(response.data[0])
            })
            .catch((error) => {
                setwrongCountryError(true)
            })
    }, [])
    return (
        <SafeAreaView style={{flex: 1, width: "90%", alignSelf: "center"}}>
        <Text style={{fontWeight:"bold", fontSize:25, alignSelf: "center", color:"black"}}>Country Details</Text>
        <Image style={{width: 250, height: 250,marginLeft:15,marginTop:40}} source={{ uri: countryDetail.flags.png }} />
        <Text style={{fontSize:20,padding:15,marginTop:20}}>Capital : {countryDetail?.capital}</Text>
        <Text style={{fontSize:20,padding:15}}>Country's Population : {countryDetail?.population}</Text>
        <Text style={{fontSize:20,padding:15}}>Latitude : {countryDetail?.latlng[0]} deg</Text>
        <Text style={{fontSize:20,padding:15}}>Longitude : {countryDetail?.latlng[1]} deg</Text>
    
    <Button style={{backgroundColor:"#6600ff", marginTop:45, borderRadius:5, width:300}} mode="contained" onPress={() => { navigation.push('Weather', { capital: countryDetail.capital }) }}>
    Capital Weather
  </Button>
    </SafeAreaView>
    );
};
export default Second;
