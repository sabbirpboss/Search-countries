import { View, Text, Image} from "react-native";
import React from "react";
// import { ImageBackground } from "react-native-web";

export default function Country({ country }) {
  return (
    <View>
      <Text style={{fontSize:30}}>Country Name: {country.name.common}</Text>
      <Text style={{fontSize:20,marginTop:5,marginBottom:5}}>Capital: {country?.capital}</Text>
      <Text style={{fontSize:14,marginTop:0,marginBottom:5}}>Area: {country.area}</Text>
      <Image source={{uri: country.flags.png}}
        style={{width: 100, height: 100, marginBottom:30}}
      ></Image>
    </View>
  );
}
