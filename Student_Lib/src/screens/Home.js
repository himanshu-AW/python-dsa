import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Text style={{fontSize: 40, color: '#e69138'}}>Home</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
