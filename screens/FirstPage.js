import { View, StyleSheet } from "react-native";

import MainButton from "../components/MainButton";

function MainPage(props) {
    return (
        <View style={styles.container}>
            <MainButton>Main Page</MainButton>
            <MainButton onPress={props.nextScreen.bind(this,2)}>Second Page</MainButton>
            <MainButton>Third Page</MainButton>
            <MainButton onPress={props.nextScreen.bind(this,4)}>Fourth Page</MainButton>
        </View>
    );
}

export default MainPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaaaaa',
        justifyContent: 'center'
    }
});