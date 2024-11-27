import { Text, View, StyleSheet } from 'react-native'

function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 100,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: Colors.primary
  },
  textStyle: {
    fontSize: '25%',
    fontWeight: 'bold',
    color: Colors.primary,
    fontFamily: 'Agua'
  }
})

