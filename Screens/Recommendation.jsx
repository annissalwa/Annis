import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Slideshow from 'react-native-image-slider-show'

export class Recommendation extends Component {
    render() {
        return (
            <View className="flex-1 items-center justify-start py-10 -top-9">
                <ScrollView className="-mx-10 pl-2">
                    <View className="w-96 h-16 rounded-lg bg-emerald-400 top-2 left-10">
                        <View className="flex-row">
                            <Image className="w-10 h-10 top-3 left-3 rounded-full " source={require("../assets/Hiking-icon.jpg")}></Image>
                            <Text className="text-left top-4 text-3xl font-semibold left-5">HikeMate</Text>
                        </View>
                    </View>
                    <View className="w-full">
                        <View>
                            <Image className="w-full h-60 top-3" source={require("../assets/main recommendation.jpg")}></Image>
                            <Text className="text-5xl text-white font-extrabold -top-36 text-center" >What is Today's Exploring</Text>
                        </View>
                    </View>
                    <View className="items-center">
                        <View className="w-72 h-12 rounded-full bg-white -top-24 items-center">
                            <Image className="w-8 h-8 right-28 top-2" source={require("../assets/search icon.png")}></Image>
                            <Text className="text-base text-neutral-500 -top-4">Search by city, trail, park</Text>
                        </View>
                    </View>
                    <View className="items-start ml-44 left-2 -top-14">
                        <Text className="text-2xl font-extrabold right-32">Near Me</Text>
                    </View>
                    <View className="w-90 h-90 -top-11">
                        <Slideshow
                            dataSource={[
                                { url: require("../assets/r broga hill.jpg") },
                                { url: require("../assets/r mount alai.jpg") },
                                { url: require("../assets/r mount stong.jpg") }
                            ]} />
                        <Text className="text-black top-10 left-10">Let's go Hiking</Text>
                    </View>
                    <View>
                        <View className="items-start ml-44 left-2 top-14">
                            <Text className="text-2xl font-extrabold right-32">Popular</Text>
                        </View>
                        <View className="items-center top-14">
                            <Image className="w-80 h-52 top-3 rounded-2xl right-2" resizeMode="full" source={require("../assets/r mount kinabalu.jpg")}></Image>
                            <Text className="top-5 right-28 text-lg font-semibold">Mount Kinabalu</Text>
                            <Text className="top-5 right-28 text-sm font-normal mr-8 underline ">Ranau, Sabah</Text>
                            <View className="flex-row">
                                <Image className="w-4 h-4 right-9 top-6 mr-6" resizeMode="full" source={require("../assets/icon star.png")}></Image>
                                <Text className="top-6 right-12 text-sm font-normal ">4.9 (2138) . Hard . 22.4km . Est.187days</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View className="items-center top-28">
                            <Image className="w-80 h-52 top-3 rounded-2xl right-2" resizeMode="full" source={require("../assets/r penang hill.jpg")}></Image>
                            <Text className="top-5 right-24 text-lg font-semibold">Penang Hill Heritage</Text>
                            <Text className="top-5 right-28 text-sm font-normal mr-12 underline ">Penang Hill</Text>
                            <View className="flex-row right-3">
                                <Image className="w-4 h-4 right-9 top-6 mr-6" resizeMode="full" source={require("../assets/icon star.png")}></Image>
                                <Text className="top-6 right-12 text-sm font-normal ">4.7 (145) . Hard . 5.1km . Est.3h 19m</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View className="items-start ml-44 left-2 top-44">
                            <Text className="text-2xl font-extrabold right-32 mr-7">State</Text>
                        </View>
                        <View className="flex-row items-start ml-14">
                            <View>
                                <Image className="w-32 h-32 top-48 rounded-2xl " resizeMode="full" source={require("../assets/r mount kinabalu.jpg")}></Image>
                                <Text className="font-bold text-3xl text-white top-28 left-8">Perak</Text>
                            </View>
                            <View>
                                <Image className="w-32 h-32 top-48 rounded-2xl ml-3" resizeMode="full" source={require("../assets/r mount kinabalu.jpg")}></Image>
                                <Text className="font-bold text-3xl text-white top-28 left-10">Perak</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View className="items-center top-full">
                            <Image className="w-80 h-52 top-full rounded-2xl right-2" resizeMode="full" source={require("../assets/r mount kinabalu.jpg")}></Image>
                            <Text className="top-5 right-28 text-lg font-semibold">Mount Kinabalu</Text>
                            <Text className="top-5 right-28 text-sm font-normal mr-8 underline ">Ranau, Sabah</Text>
                            <View className="flex-row">
                                <Image className="w-4 h-4 right-9 top-6 mr-6" resizeMode="full" source={require("../assets/icon star.png")}></Image>
                                <Text className="top-6 right-12 text-sm font-normal ">4.9 (2138) . Hard . 22.4km . Est.187days</Text>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </View>
        )
    }
}

export default Recommendation
