import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export class Recommendation extends Component {
    render() {
        return (
            <View className="flex-1 items-center justify-start py-8 -top-9">
                <ScrollView className="-mx-24 pl-2">
                    <View className="w-96 h-16 rounded-lg bg-emerald-400 top-2">
                        <View className="flex-row">
                            <Image className="w-10 h-10 top-3 left-3 rounded-full " source={require("../assets/Hiking-icon.jpg")}></Image>
                            <Text className="text-left top-4 text-3xl font-semibold left-5">HikeMate</Text>
                        </View>
                    </View>
                    <View className="w-screen">
                        <View>
                            <Image className="w-full h-60 top-3 right-1" resizeMode="contain" source={require("../assets/main recommendation.jpg")}></Image>
                            <Text className="text-5xl text-white font-extrabold -top-36 text-center" >What is Today's Exploring</Text>
                        </View>
                    </View>
                    <View className="items-center">
                        <View className="w-72 h-12 rounded-full bg-white -top-24 items-center">
                            <Image className="w-8 h-8 right-28 top-2" source={require("../assets/search icon.png")}></Image>
                            <Text className="text-base text-neutral-500 -top-4">Search by city, trail, park</Text>
                        </View>
                    </View>
                    <View className="items-center -top-14">
                        <Text className="text-2xl font-extrabold right-32 ">Near Me</Text>
                    </View>
                    <View className="items-center ">
                        <Image className="w-full h-60 -top-15 rounded-3xl right-5 bg-black " resizeMode="cover" source={require("../assets/main recommendation.jpg")}></Image>
                    </View>


                </ScrollView>
            </View>
        )
    }
}

export default Recommendation
