import { StyleSheet, Text, View } from "react-native";

function SecondPage(props) {
  return (
    <View>
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
