import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    ScrollView, Button, FlatList, TouchableOpacity
} from 'react-native';
import { styles } from '../config/styles';
import { Ionicons } from '@expo/vector-icons';

export default class WorkoutList extends Component {
    constructor(props) {
        super(props);
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "0%"
                }}
            />
        );
    };

    onPressItem = (item) => {
        this.props.navigation.navigate('WorkoutDetails', { item: item, title: item.title })
    }

    render() {
        const workouts = this.props.route.params.item;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/NINERS_BG_TEST-small.jpg')} style={styles.backgroundImage}>
                    <View style={styles.item}>
                        <View style={styles.content}>
                            <Text style={{ fontWeight: "bold" }}><Ionicons name="ios-basketball" size={30} color="#e35a00" /> Meistere 3 aus 4 Workouts in 5 Tagen!</Text>
                            <Text style={{ fontWeight: "bold" }}><Ionicons name="ios-basketball" size={30} color="#e35a00" />  Fordere dich und dein Team am Wochenende mit der Challenge heraus!</Text>
                        </View>
                    </View>

                    <ScrollView>
                        {
                            workouts.map((item, key) => (
                                <TouchableOpacity onPress={() => this.onPressItem(item)}>
                                    <ImageBackground source={item.logo} style={styles.workoutItem} imageStyle={{ opacity: 0.6 }} >
                                        <View style={styles.content}>
                                            <Text style={styles.title}>
                                                <Text style={{ color: '#fff' }}>
                                                    {item.title}
                                                </Text>
                                            </Text>
                                            <Text style={styles.text}>
                                                <Text style={{ color: '#fff' }}>
                                                    {item.descritpion}
                                                </Text>
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            ))
                        }

                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}