import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectTravelTimeInformation } from '../slices/navSlice'
import NavigateCard from './NavigateCard'

const data = [
    {
        id: 'Uber-X-123',
        title: "Uber-x",
        multipler: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: 'Uber-XL-456',
        title: "Uber XL",
        multipler: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: 'Uber-LUX-789',
        title: "Uber LUX",
        multipler: 1.75,
        image: "https://links.papareact.com/7pf",
    }
]

const SURGE_CHARGE_RATE = 1.5 


const RideOptionsCard = () => {

    const navigation = useNavigation()
    const [selected, setSelected] = useState()
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item :{ id, title, multipler, image}, item}) => (
                    <TouchableOpacity 
                        onPress={() => setSelected(item)}
                        style={tw` flex-row justify-between items-center px-10 ${id === selected?.id && 'bg-gray-200'}`}
                        >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{uri : image}}
                        />
                        <View styles={tw`-ml-6`}>
                            <Text styles={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>Travel Time {travelTimeInformation?.duration?.text}</Text>
                        </View>
                        <Text style={tw `text-xl`}>
                            {new Intl.NumberFormat('en-gb', {
                                style: 'currency',
                                currency: 'GBP'
                            }).format(
                                (travelTimeInformation?.duration.value + SURGE_CHARGE_RATE * multipler) / 100
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled={!selected} style={tw`bg-black m-3 ${!selected && "bg-gray-300 "}`}>
                    <Text style={tw `text-center text-white text-xl`}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

export default RideOptionsCard;

const styles = StyleSheet.create({})
