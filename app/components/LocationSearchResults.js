import React, { Component, PropTypes } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class LocationSearchHeader extends Component {

  _getStyles(width, height) {
    const { collapsed } = this.props;
    return StyleSheet.create({
      container: {
        height: height - 160,
        width: width,
        position: 'absolute',
        top: collapsed ? height : 160,
        left: 0,
        backgroundColor: 'white',
        opacity: collapsed ? 0.5 : 1,
      }
    });
  }

  render() {
    const { width, height } = Dimensions.get('window');
    const styles = this._getStyles(width, height);
    return (
      <Animatable.View
        style={styles.container}
        transition={['top', 'opacity']}
        easing="ease-out-circ"
        duration={400}
      >
        {this.props.children}
      </Animatable.View>
    );
  }
}
