import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Image, Dimensions } from 'react-native';

export default class ModalScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const image = this.props.route.params.image;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={image} style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    alignSelf: 'center',
                    margin: 10,

                }}
                    resizeMethod="resize"></Image>
            </View >
        );
    }
}
