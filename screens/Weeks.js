import React, { Component } from 'react';
import { Image, TouchableOpacity, ScrollView, FlatList, ImageBackground, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { decode, encode } from 'base-64'
import { WeeksData } from '../config/data';
import { styles } from '../config/styles';

if (!global.btoa) { global.btoa = encode }

if (!global.atob) { global.atob = decode }

const firebaseConfig = {
    apiKey: "AIzaSyBm1_SaOxi7_Zi2nViXQudPscLqb1mNLUw",
    authDomain: "niners-workout.firebaseapp.com",
    databaseURL: "https://niners-workout.firebaseio.com",
    projectId: "niners.workout",
    storageBucket: "niners-workout.appspot.com"
};

const projectID = 'niners-workout'
const key = 'AIzaSyBm1_SaOxi7_Zi2nViXQudPscLqb1mNLUw'
const doc = 'weeks'
const firestoreUrl = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${doc}?key=${key}`



export default class Weeks extends Component {

    constructor() {
        super();
        /*this.ref = firebase.firestore().collection('boards');
        this.unsubscribe = null;
        this.state = {
            isLoading: true,
            boards: []
        };*/
    };



    /*onCollectionUpdate = () => {
        db.collection("weeks")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                });
            }).catch((error) => {
                console.error(error);
            });
    };
    getWeeksFromApi = () => {
        return fetch(firestoreUrl)
            .then((response) => response.json())
            .then(json => FireStoreParser(json))
            .then(json => console.log("weeks: " + JSON.stringify(json.documents)))
            .catch((error) => {
                console.error(error);
            });
    }*/
    onPressItem = (item) => {
        let data = item.workouts
        this.props.navigation.navigate('WorkoutList', { item: data })
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/NINERS_BG_TEST-small.jpg')} style={styles.backgroundImage}>
                    <View style={styles.item}>
                        <View style={styles.content}>
                            <Text style={styles.text}><Text style={{ fontWeight: "bold", textAlign: 'center' }}> <Ionicons name="ios-basketball" size={20} color="#e35a00" /> 6 Week Challenge <Ionicons name="ios-basketball" size={20} color="#e35a00" /></Text></Text>
                        </View>
                    </View>
                    <ScrollView>
                        {
                            WeeksData.map((item, key) =>
                                (
                                    <TouchableOpacity onPress={() => this.onPressItem(item)}>
                                        <View style={styles.item}>
                                            <View style={{ width: 100 }}>
                                                <Image
                                                    source={item.logo}
                                                    resizeMethod="contain"
                                                    style={{ width: 100, height: 150 }}></Image>
                                            </View>
                                            <View>
                                                <View style={styles.content}>
                                                    <Text style={styles.title}>{item.title}</Text>
                                                    <Text style={styles.text}>{item.descritpion}</Text>
                                                </View>
                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                ))
                        }
                    </ScrollView>
                    <Text style={{ textAlign: 'center' }}>&copy; Michael Wende</Text>
                </ImageBackground>
            </View>
        );
    }
};
