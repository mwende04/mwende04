import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, ImageBackground, Image, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import WorkoutVideo from '../components/video';
import { warmups, cooldowns } from '../config/data';
import { styles } from '../config/styles';
import { Entypo } from '@expo/vector-icons';



class Exercise extends Component {
    constructor(props) {
        super(props);
    }
    onPressImage = (image) => {
        this.props.nav.navigate('ImageModal', { image: image, nav: this.props.nav });
    }

    showExerciseVideo = () => {
        if (this.props.item["videoUrl"] === undefined) {
            if (this.props.item["imageUrl"] === undefined) {
                return <Image source={require("../assets/images/week1/week1_logo.jpg")}
                    resizeMethod="contain"
                    style={{ width: 100, height: 100 }} />
            } else {
                return <TouchableHighlight
                    onPress={() => this.onPressImage(this.props.item.imageUrl)}
                ><Image source={this.props.item.imageUrl}
                    resizeMethod="contain"
                    style={{ width: 100, height: 100 }} /></TouchableHighlight>
            }
        } else {
            return <WorkoutVideo url={this.props.item.videoUrl}></WorkoutVideo>
        }
    }


    render() {
        return (
            <View>
                <View style={styles.exercise}>
                    <View style={{ flex: 1, alignItems: "stretch" }}>
                        {this.showExerciseVideo()}
                    </View>
                    <View style={{ flex: 3 }} >
                        <View style={styles.content}>
                            <Text style={styles.text}>{this.props.item.title}</Text>
                            <Text style={styles.description}>{this.props.item.descritpion}</Text>
                            <View style={styles.separator} />
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center" }}>
                                <View style={{ flex: 1 }}><Entypo name="bar-graph" size={20} color="#000" /></View>
                                <View style={{ flex: 10 }}>
                                    <Text style={{ fontWeight: "bold", padding: 5 }}>{this.props.item.repetitions}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View >
            </View>
        );
    }
}

export default class Workout extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const item = this.props.route.params.item;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/NINERS_BG_TEST-small.jpg')} style={styles.backgroundImage}>
                    <ScrollView>
                        <Text style={styles.pageTitle}>Warmup</Text>
                        <ScrollView>
                            {
                                warmups[item.warmup].map((item, key) => (
                                    <Exercise item={item} nav={this.props.navigation} />
                                ))
                            }
                        </ScrollView>
                        <View style={styles.container}>
                            <Text style={styles.pageTitle}>Workout</Text>
                            <ScrollView>
                                {
                                    item.excercises.map((item, key) => (

                                        <Exercise item={item} nav={this.props.navigation} />
                                    ))
                                }
                            </ScrollView>
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.pageTitle}>Cooldown</Text>
                            <ScrollView>
                                {
                                    cooldowns[item.cooldown].map((item, key) => (

                                        <Exercise item={item} nav={this.props.navigation} />
                                    ))
                                }
                            </ScrollView>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }
}
