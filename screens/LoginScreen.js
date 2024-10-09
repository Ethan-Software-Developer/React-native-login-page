import { View, Text, Image, TextInput, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'white', height, width }}>
      <StatusBar style="light" />
      <Image style={{ height, width, position: 'absolute' }} source={require("../assets/background.png")} />
      {/* Lights Images */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', width }}>
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping()} style={{ height: height * 0.3, width: width * 0.2 }} source={require("../assets/light.png")} />
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping()} style={{ height: height * 0.2, width: width * 0.15 }} source={require("../assets/light.png")} />
      </View>

      {/* Title and Form */}
      <View style={{ height, width, justifyContent: 'space-around', paddingTop: height * 0.1, paddingBottom: 10 }}>
        {/* Title */}
        <View style={{ alignItems: 'center' }}>
          <Animated.Text entering={FadeInUp.duration(1000).springify()} style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1, fontSize: height * 0.06 }}>
            Login
          </Animated.Text>
        </View>
      
        {/* Form */}
        <View style={{ alignItems: 'center', marginHorizontal: 16 }}>
          <Animated.View entering={FadeInDown.duration(1000).springify()} style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: 15, borderRadius: 15, width: '90%', marginBottom: 16 }}>
            <TextInput placeholder="email" placeholderTextColor={"black"} style={{ height: 40 }} />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: 15, borderRadius: 15, width: '90%' }}>
            <TextInput placeholder="password" placeholderTextColor={"black"} secureTextEntry style={{ height: 40 }} />
          </Animated.View>
        </View>
        <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={{ alignItems: 'center', width: '100%' }}>
  <TouchableOpacity style={{ width: '90%', backgroundColor: '#38BDF8', padding: 10, borderRadius: 15, marginBottom: 12, marginHorizontal: 'auto' }}>
    <Text style={{ fontSize: height * 0.025, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
      Login
    </Text>
  </TouchableOpacity>
</Animated.View>

        <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text style={{ color: '#3B82F6' }}> SignUp</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
