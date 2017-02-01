import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import AssetMap from '../config/AssetMap'

export default class SearchResultsRow extends Component {

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Image source={AssetMap[data.icon]} style={styles.icon}/>
        <View>
          <Text>{data.title}</Text>
          <Text style={styles.subtitle}>{data.subtitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  subtitle: {
    color: '#999',
    fontSize: 12
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 20,
  }
});
