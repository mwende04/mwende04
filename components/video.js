import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Video } from 'expo-av';

export default class WorkoutVideo extends Component {

    state = {
        mute: true,
        shouldPlay: false,
    }

    render() {
        const { width } = Dimensions.get('window');
        const videoUrl = this.props.url;
        return (
            <Video
                source={videoUrl}
                shouldPlay={this.state.shouldPlay}
                isMuted={this.state.mute}
                resizeMode="cover"
                useNativeControls
                style={{ width: 100, height: 100 }}
            />
        );
    }
};
