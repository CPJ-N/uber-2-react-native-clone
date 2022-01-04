import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Maps from '../components/Maps'
import tw from 'tailwind-react-native-classnames'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'


const MapScreen = () => {
    const Stack = createStackNavigator()

    return (
        <View>
            
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
