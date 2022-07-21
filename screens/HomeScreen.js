import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-red-500`}>I am the Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
