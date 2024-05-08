import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={{
          uri: 'https://images.unsplash.com/photo-1601882906700-3035ebabe365?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <SafeAreaView className="flex flex-1">
        {/* Search Section */}
        <View style={{height: '7%'}} className="mx-4 relative z-50">
          {/* Search Text */}
          <View className="flex-1 flex-row justify-between items-center border border-red-50 rounded-full">
            <TextInput
              placeholder="Search city"
              placeholderTextColor={'lightgray'}
              className="pl-10 text-white h-10 flex-1 text-base"
            />
            {/* Icon */}
            <TouchableOpacity className="pr-10">
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
