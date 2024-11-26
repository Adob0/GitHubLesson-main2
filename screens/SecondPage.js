import { StyleSheet, Text, View } from "react-native";

function SecondPage(props) {
  return (
    <Text style={styles.Text}>[as]</Text>
  );
}

export default SecondPage;

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    color: "blue"
  }
});
