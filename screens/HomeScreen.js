import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {fetchWeatherData} from '../api/weather';

const HomeScreen = () => {
  const [locations, setLocations] = useState([1, 2, 3]);
  const [city, setCity] = useState('');

  const handleSearch = () => {
    fetchWeatherData(city);
  };
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
              value={city}
              onChangeText={text => setCity(text)}
            />
            {/* Icon */}
            <TouchableOpacity className="pr-10" onPress={handleSearch}>
              <MaterialIcon name="search" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
            {locations.map((location, index) => {
              let showBorder = index + 1 !== locations.length;
              let borderClass = showBorder
                ? 'border-0 border-b-2 border-b-gray-400'
                : '';
              return (
                <TouchableOpacity
                  key={index}
                  className={
                    'flex-row items-center p-3 px-4 mb-1' + borderClass
                  }>
                  <MaterialIcon name="location-on" size={20} color="black" />
                  <Text className="text-black text-lg ml-2">{location}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* forecast section */}
        <View className="mx-4 flex justify-around flex-1 mb-2">
          {/* Location */}
          <Text className="text-white, text-2xl, text-center font-bold ">
            London,{' '}
            <Text className="text-gray-300 text-lg font-semibold">
              {' '}
              United Kingdom
            </Text>
          </Text>

          {/* Weather Image */}
          <View cclassName="w-52 h-52 absolute">
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1525490829609-d166ddb58678?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
          </View>

          {/* degree celcius */}
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              23&#176;
            </Text>
            <Text className="text-center text-white text-xl tracking-widest">
              Partly Cloudy
            </Text>
          </View>
          {/* Other Stats */}
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <McIcon size={25} name={'weather-windy'} color={'white'} />
              <Text className="text-white font-semibold text-base">22Km</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <McIcon size={25} name="water-outline" color={'white'} />
              <Text className="text-white font-semibold text-base">25%</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <McIcon size={25} name={'weather-sunny'} color={'white'} />
              <Text className="text-white font-semibold text-base">6:05AM</Text>
            </View>
          </View>
        </View>
        {/* Forecast for next days */}
        <View className="m-5 border">
          <View className="flex-row gap-2 items-center mb-5">
            <MaterialIcon size={25} name={'date-range'} color={'white'} />
            <Text className="text-white text-base">Daily Forecast</Text>
          </View>
          <ScrollView horizontal={true} className="gap-5">
            <View
              style={{backgroundColor: 'transparent-white'}}
              className="border w-24 items-center rounded-2xl p-3 ">
              <McIcon
                size={25}
                name={'weather-lightning-rainy'}
                color={'white'}
              />
              <Text className="text-white text-base">Monday</Text>
              <Text className="text-white text-base">13&#176;</Text>
            </View>
            <View
              style={{backgroundColor: 'transparent-white'}}
              className="border w-24 items-center rounded-2xl p-3 ">
              <McIcon
                size={25}
                name={'weather-lightning-rainy'}
                color={'white'}
              />
              <Text className="text-white text-base">Monday</Text>
              <Text className="text-white text-base">13&#176;</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
