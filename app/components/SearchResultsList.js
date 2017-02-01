import React, { Component } from 'react';
import { ListView, View, Text, StyleSheet } from 'react-native';

import SearchResultsRow from './SearchResultsRow'

export default class SearchResultsList extends Component {
  constructor(props, context) {
    super(props, context);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
    };
  }

  _renderRow(data) {
    return (
      <SearchResultsRow data={data}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
});
