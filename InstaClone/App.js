import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Feed from './src/pages/Feed';
import Login from './src/pages/Login';

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <Feed />
    </>
  );
};
export default App;
