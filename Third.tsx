import axios from "axios";
import React from "react";
import { Image, Text, View, SafeAreaView } from "react-native";

const Third = ({ navigation, route }: any) => {

    const { capital } = route.params
    const { useLayoutEffect, useState } = React;
    const [countryDetail, setCountryDetail] = useState({
        "current": { "weather_icons": ["https://"], "temperature": "", "precip": "", "wind_speed": "" }
    })

    useLayoutEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=2110ea1bf55761a18574adb318c0e27b&query=${capital}`)
            .then((response) => {
                setCountryDetail(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <SafeAreaView style={{flex: 1, width: "60%", alignSelf: "center"}}>
        <Text style={{fontWeight:"bold", fontSize:25, alignSelf: "center",padding:20, color:"black"}}>Weather Details</Text>
        <Image style={{width: 125,height: 125,marginTop:150,marginLeft:15}} source={{ uri: countryDetail?.current.weather_icons[0] }} />
        <Text style={{fontSize:20,padding:15}}>Temperature : {countryDetail?.current.temperature}°C</Text>
        <Text style={{fontSize:20,padding:15}}>Precipitation : {countryDetail?.current.precip}%</Text>
        <Text style={{fontSize:20,padding:15}}>Wind Speed : {countryDetail?.current.wind_speed} kmph</Text>
    </SafeAreaView>
    );
};

export default Third;
