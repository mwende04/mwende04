import { View, StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            // paddingTop: (Platform.OS === 'ios') ? 20 : 0

        },
        item:
        {
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            borderColor: "#818a91",
            borderWidth: 0,
            backgroundColor: '#fff',
            shadowOffset: { height: 5, },
            shadowColor: 'black',
            shadowOpacity: 0.10,
        },
        overlay: {
            backgroundColor: '#000',
            opacity: 0.5

        },

        workoutItem:
        {
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            borderColor: "#818a91",
            borderWidth: 0,
            backgroundColor: '#e35a00',
            shadowOffset: { height: 5, },
            shadowColor: 'black',
            shadowOpacity: 0.10,
            minHeight: 100,
        },

        exercise:
        {
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            borderColor: "#818a91",
            borderWidth: 0,
            backgroundColor: '#fff',
            shadowOffset: { height: 5, },
            shadowColor: 'black',
            shadowOpacity: 0.10,
        },
        content:
        {
            flex: 1,
            padding: 10,
        },



        separator:
        {
            height: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            marginTop: 5,
            paddingLeft: 10,
        },

        backgroundImage: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
        title:
        {
            fontSize: 22,
            fontWeight: "bold",
            paddingLeft: 5,
        },
        text:
        {
            fontSize: 18,
            paddingLeft: 5,
        },
        description:
        {
            fontSize: 15,
            paddingLeft: 5
        },
        repetitions:
        {
            fontSize: 15,
            padding: 5,
        },
        pageTitle:
        {
            fontSize: 25,
            fontWeight: "bold",
            paddingLeft: 10,
            // paddingTop: (Platform.OS === 'ios') ? 20 : 0
        },

        logo: {
            width: 50,
            height: 33,
        },
    });