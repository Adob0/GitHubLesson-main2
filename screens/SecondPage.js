import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";

function SecondPage({goHome}) {
  return (
    <View>
      <Text>Second Page</Text>
      <MainButton onClick={goHome}>Go home</MainButton>
    </View>
  );
}

export default SecondPage;

const styles = StyleSheet.create({});
