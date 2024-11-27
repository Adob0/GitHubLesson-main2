import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";

function SecondPage(props) {
  return (
    <View>
      <MainButton onPress = {props.nextScreen.bind(this,1)}>Second Page</MainButton>
      <Text style={styles.Text}>[as]</Text>
    </View>
  );
}

export default SecondPage;

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: "black",
    color: "black"
  }
});
