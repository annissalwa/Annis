import React, { Component } from 'react'
import { Image, Pressable, Text, View, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export class Home extends Component {
  render() {
    return (
      <View className="flex-1 items-center justify-start py-8 -top-9">
        <ScrollView className="-mx-10 pl-12">
          <View className="w-96 h-16 rounded-lg bg-emerald-400 top-2 -left-3">
            <View className="flex-row">
              <Image className="w-10 h-10 top-3 left-3 rounded-full " source={require("../assets/Hiking-icon.jpg")}></Image>
              <Text className="text-left top-4 text-3xl font-semibold left-5">HikeMate</Text>
            </View>
          </View>
          <View className="w-screen">
            <Image className="w-full h-60 -top-1 right-5" resizeMode="contain" source={require("../assets/promote.jpg")}></Image>
          </View>
          <View className="-top-6">
            <View>
              <Text className="text-left text-3xl top-10 font-medium">Activity</Text>
            </View>
            <View className="flex-row">
              <View className="mr-1 w-20 h-20 rounded-lg bg-green-300 top-12">
                <Pressable onPress={() => Alert.alert('Pressed')}>
                  <Image className="w-10 h-10 top-5 left-5 " source={require("../assets/icon hiking.png")}></Image>
                </Pressable>
              </View>
              <View className="mr-1 w-20 h-20 rounded-lg bg-green-300 top-12">
                <Pressable onPress={() => Alert.alert('Pressed')}>
                  <Image className="w-10 h-10 top-5 left-5 " source={require("../assets/icon campsite.png")}></Image>
                </Pressable>
              </View>
              <View className="mr-1 w-20 h-20 rounded-lg bg-green-300 top-12">
                <Pressable onPress={() => Alert.alert('Pressed')}>
                  <Image className="w-10 h-10 top-5 left-5 " source={require("../assets/icon trails.png")}></Image>
                </Pressable>
              </View>
              <View className="mr-1 w-20 h-20 rounded-lg bg-green-300 top-12">
                <Pressable onPress={() => Alert.alert('Pressed')}>
                  <Image className="w-10 h-10 top-5 left-5 " source={require("../assets/icon outdoor.png")}></Image>
                </Pressable>
              </View>
            </View>
            <View className="flex-row top-14 right-3">
              <Text className="text-center mr-2 w-24 font-medium">Hike</Text>
              <Text className="text-center mr-2 w-16 font-medium">Campsite</Text>
              <Text className="text-center mr-2 w-20 font-medium">Trails</Text>
              <Text className="text-center mr-2 w-20 font-medium">Outdoor Activities</Text>
            </View>
          </View>
          <View className="top-2">
            <View className="justify-start left-14 top-2">
              <Text className="text-left text-3xl top-14 right-14 font-medium">Review</Text>
            </View>
            <View>
              <View className="justify-start w-60 left-20 top-14">
                <Image className="w-14 h-14 rounded-full right-20 top-5" source={require("../assets/lisa racher.jpg")}></Image>
                <Text className="font-semibold text-base right-3 -top-9">Lisa Racher</Text>
                <Text className="font-sm right-3 -top-8 text-gray-500">Mount Kinabalu is one of the most popular hiking destination in Sabah</Text>
              </View>
              <View>
                <Image className="w-44 h-52 top-11 rounded-xl" source={require("../assets/Hiking Forest.jpg")}></Image>
                <Image className="w-40 h-24 -top-40 left-44 ml-1 rounded-xl" source={require("../assets/Hiking Forest.jpg")}></Image>
                <Image className="w-40 h-24 -top-36 left-44 ml-1 rounded-xl" source={require("../assets/Hiking Forest.jpg")}></Image>
              </View>
              <View className="items-start flex-row -top-36">
                <Image className="w-8 h-8" resizeMode="contain" source={require("../assets/love icon.png")}></Image>
                <Text className="top-2 left-3 text-base">956 people liked this</Text>
              </View>
            </View>
            <View className="-top-44">
              <View className="justify-start w-60 left-20 top-14">
                <Image className="w-14 h-14 rounded-full right-20 top-5" source={require("../assets/richard harllow.jpg")}></Image>
                <Text className="font-semibold text-base right-3 -top-9">Richard Harllow</Text>
                <Text className="font-sm right-3 w-64 -top-8 text-gray-500">Bukit Broga is a fantastic hiking spot with well-mountained trails and stunning ssunrise views from the summit. It's perfect for all skill levels, just remember to wear good shoes and bring water!</Text>
              </View>
              <View>
                <Image className="w-44 h-52 top-11 rounded-xl" source={require("../assets/richard r 1.jpg")}></Image>
                <Image className="w-40 h-24 -top-40  left-44 ml-1 rounded-xl" source={require("../assets/richard r 2.jpg")}></Image>
                <Image className="w-40 h-24 -top-36 left-44 ml-1 rounded-xl" source={require("../assets/richard r 3.jpg")}></Image>
              </View>
              <View className="items-start flex-row -top-36">
                <Image className="w-8 h-8" resizeMode="contain" source={require("../assets/love icon.png")}></Image>
                <Text className="top-2 left-3 text-base">256 people liked this</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Home
