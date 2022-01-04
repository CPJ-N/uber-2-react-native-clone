import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Maps from '../components/Maps'
import tw from 'tailwind-react-native-classnames'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions, useNavigation } from '@react-navigation/native'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from 'react-native-elements'


const MapScreen = () => {
    const Stack = createStackNavigator()
    const navigation = useNavigation()

    return (
        <View>

            <TouchableOpacity 
                onPress={() => navigation.navigate("HomeScreen")}
                style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name="menu" />
            </TouchableOpacity>
            
            <View style={tw`h-1/2`}>
                <Maps />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator
                screenOptions={{
                    headerShown: false
                  }}
                  >
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigateCard}
                    />
                    <Stack.Screen
                        name='RideOptionsCard'
                        component={RideOptionsCard}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
