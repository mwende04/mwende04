import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { WeeksData, warmups, cooldowns } from './config/data';
import { styles } from './config/styles';
import { SplashScreen } from 'expo';

import Weeks from './screens/Weeks'
import WorkoutList from './screens/WorkoutList';
import Workout from './screens/Workout';
import ImageModal from './screens/ImageModal';




const Stack = createStackNavigator();

function getHeaderTitle(navigation) {
  return navigation.getParam("title");
}



function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerRight: () => (
          <Image style={styles.logo} source={require('./assets/images/Logo_NINERS_Academy_Chemnitz_2016_RGB2.png')} />
        ),
        headerRightStyle: styles.logo,
        headerStyle: {
          // backgroundColor: '#e35a00',
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Weeks"
        component={Weeks}
        options={{ title: "NINERS Cyber Academy" }}
      />
      <Stack.Screen
        name="WorkoutList"
        component={WorkoutList}
        options={{ title: "Workouts" }}
      />
      <Stack.Screen
        name="WorkoutDetails"
        component={Workout}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="ImageModal"
        component={ImageModal}
      />
    </Stack.Navigator>
  );
}

function getValues(obj, key) {
  var objects = [];
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
      objects = objects.concat(getValues(obj[i], key));
    } else if (i == key) {
      objects.push(obj[i]);
    }
  }
  return objects;
}

function cacheImages(images) {
  return images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  });
}

export default class App extends Component {
  state = {
    isReady: false,
    isSplashReady: false,
  };


  async _loadAssetsAsync() {
    const data = { weeks: WeeksData, warmups: warmups, cooldowns: cooldowns }
    const imageAssets = cacheImages(getValues(data, 'imageUrl'));

    await Promise.all(imageAssets);
  }

  /* async _cacheSplashResourcesAsync() {
     const gif = require('./assets/splash.png');
     return Asset.fromModule(gif).downloadAsync();
   };*/

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    /*  if (!this.state.isAppReady) {
        return (
          <View style={{ flex: 1 }}>
            <Image
              source={require('./assets/splash.png')}
              onLoad={this._loadAssetsAsync}
              onFinish={() => this.setState({ isAppReady: true })}
            />
          </View>
        );
      }*/
    return (
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    );
  }

}
