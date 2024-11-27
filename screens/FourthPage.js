import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";

function FourthPage(props) {
  return (
    <MainButton onPress={props.nextScreen.bind(this,1)}>Fourth Page</MainButton>
  );
}

export default FourthPage;

const styles = StyleSheet.create({});