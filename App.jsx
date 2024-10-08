import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, VirtualizedList } from 'react-native';

export default function App() {
  return (
    <View className = "flex-1 items-center justify-start p-20">
      <View className = "w-80 h-16 rounded-lg bg-emerald-400 -top-10">
        <View className = "flex-row">
          <Image className = "w-10 h-10 top-3 left-3 rounded-full " source={require("./assets/Hiking-icon.jpg")}></Image>
          <Text className = "text-left top-4 text-3xl font-semibold left-5">HikeMate</Text>
        </View>
      </View>
      <View className="w-screen">
          <Image className="w-full h-72 -top-10" resizeMode="contain" source={require("./assets/Hiking Forest.jpg")}></Image>
      </View>
      <View>
        <Text className="text-left text-3xl right-32 -top-7 font-medium">Activity</Text>
      </View>
      <View className="flex-row top-4">
        <View className="mr-1 w-20 h-20 rounded-lg bg-green-300 -top-10"></View>
        <View className="mr-1 w-20 h-20 rounded-lg bg-green-300 -top-10"></View>
        <View className="mr-1 w-20 h-20 rounded-lg bg-green-300 -top-10"></View>
        <View className="mr-1 w-20 h-20 rounded-lg bg-green-300 -top-10"></View>
      </View>
    </View>
  );
}

