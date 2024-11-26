import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";

function ThirdPage({goHome}) {
  return (
    <View>
      <Text>Third Page</Text>
      <MainButton onClick={goHome}>Go home</MainButton>
    </View>
  );
}

export default ThirdPage;

const styles = StyleSheet.create({});
