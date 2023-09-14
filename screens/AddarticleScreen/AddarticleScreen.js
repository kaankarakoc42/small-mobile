
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js'
import { WebView } from 'react-native-webview';

class AddarticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

        <WebView source={{ uri: 'https://sm.mmdjamali.ir/p/1/edit' }} style={{ flex: 1 }} />

    )
  }
}

export default AddarticleScreen

                