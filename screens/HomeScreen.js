import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';



const HomeScreen = () => {
    const dispatch = useDispatch()

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
                    placeholder='where from?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    enablePoweredByContainer={false}
                    minLength={2}
                    returnKeyType={"search"}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        }))
                        
                        dispatch(setDestination(null))
                        console.log('\n data')
                        console.log(data)
                        console.log('\n details')
                        console.log(details)
                    }}
                    fetchDetails={true}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />

                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
