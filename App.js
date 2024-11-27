import { StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';

import FirstPage from './screens/FirstPage.js';
import SecondPage from './screens/SecondPage.js';
import FourthPage from './screens/FourthPage.js';

export default function App() {
  const [pageNum, setPageNum] = useState(1);

  function setPage(pageNum) {
    setPageNum(pageNum);
  }

  let screen = <FirstPage nextScreen={setPage}/>

  if (pageNum === 1) {
    screen = <FirstPage  nextScreen={setPage}/>
  }
  if (pageNum === 2) {
    screen = <SecondPage  nextScreen={setPage}/>
  }
  if (pageNum === 4) {
    screen = <FourthPage  nextScreen={setPage}/>
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
