import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { WeeksData, warmups, cooldowns } from './config/data';
import { styles } from './config/styles';

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
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    /* const imageAssets = cacheImages([
       'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
       require('./assets/images/circle.jpg'),
     ]);*/
    const data = { weeks: WeeksData, warmups: warmups, cooldowns: cooldowns }
    const imageAssets = cacheImages(getValues(data, 'imageUrl'));
    //const videoAssets = cacheImages(getValues(data, "videoUrl"));

    //await Promise.all([...imageAssets, ...videoAssets]);
    await Promise.all([...imageAssets]);
  }
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
    return (
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    );
  }

}
