import { StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';

import FirstPage from './screens/FirstPage.js';
import SecondPage from './screens/SecondPage.js';

export default function App() {
  const [pageNum, setPageNum] = useState(0);

  function page(pageNum) {
    setPageNum(2);
  }

  let screen = <FirstPage nextScreen={page}/>

  if (pageNum === 2) {
    screen = <SecondPage />
  }

  return (
    <SafeAreaView style={styles.container}>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
