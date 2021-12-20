import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw `bg-white h-full`}>
            {/* <Text style={ }>I am the home screen</Text> */}
            <View style={tw `p-5`}>
                <Image 
                style ={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain"
                }}
                source={{
                    uri: "https://links.papareact.com/gzs",
                }}/>

                <GooglePlacesAutocomplete
                    nearbyPlacesAPI='GooglePlaceSearch'
                    debounce={400}
                    placeholder='where from?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'YOUR API KEY',
                        language: 'en',
                    }}
                />

                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
