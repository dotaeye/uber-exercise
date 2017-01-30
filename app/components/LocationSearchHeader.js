import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import * as Animatable from 'react-native-animatable';

const AnimatableTextInput = Animatable.createAnimatableComponent(TextInput);

const containerTransitions = ['width', 'height', 'left', 'top'];
const textInputTransitions = ['backgroundColor', 'height', 'bottom', 'width', 'opacity'];


export default class LocationSearchHeader extends Component {

  constructor(props, context) {
    super(props, context);
  }

  _onFocus() {
    this.props.expand()
  }

  render() {
    const styles = this._getStyles();
    return (
      <Animatable.View
        style={styles.container}
        transition={containerTransitions}
      >

        <Animatable.View style={styles.blackDot}
          transition={['top', 'left']}
        />

        <Animatable.View style={styles.grayDot}
          transition={['opacity']}
        />

        <Animatable.View style={styles.grayVerticalLine}
          transition={['opacity']}
        />

        <AnimatableTextInput
          style={styles.textInputA}
          placeholder="Work"
          placeholderTextColor='#666'
          transition={textInputTransitions}
        />

        <AnimatableTextInput
          style={styles.textInputB}
          placeholder="Where to?"
          placeholderTextColor='#666'
          onFocus={this._onFocus.bind(this)}
          transition={textInputTransitions}
        />
      </Animatable.View>
    );
  }

  _getStyles() {
    const windowWidth = Dimensions.get('window').width;
    const collapsed = this.props.collapsed;
    return StyleSheet.create({
      container: {
        backgroundColor: 'white',
        width: collapsed ? windowWidth - 40 : windowWidth,
        height: collapsed ? 50 : 140,
        position: 'absolute',
        left: collapsed ? 20 : 0,
        top: collapsed ? 60 : 20,
      },
      grayDot: {
        width: 7,
        height: 7,
        borderRadius: 3.5,
        position: 'absolute',
        left: 25,
        top: 55,
        backgroundColor: '#ccc',
        opacity: collapsed ? 0 : 1
      },
      grayVerticalLine: {
        width: 1,
        height: 44,
        position: 'absolute',
        left: 28,
        top: 64,
        backgroundColor: '#ccc',
        opacity: collapsed ? 0 : 1
      },
      blackDot: {
        width: 7,
        height: 7,
        backgroundColor: '#252525',
        position: 'absolute',
        left: collapsed ? 8 : 25,
        top: collapsed ? 22 : 110,
      },
      textInputA: {
        height: 38,
        width: windowWidth - 70,
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        left: 46,
        bottom: collapsed ? 0 : 60,
        borderRadius: 5,
        backgroundColor: collapsed ? 'white' : '#f3f3f3',
        opacity: collapsed ? 0 : 1
      },
      textInputB: {
        height: 38,
        width: windowWidth - 70,
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        left: collapsed ? 26 : 46,
        bottom: collapsed ? 5 : 10,
        borderRadius: 5,
        backgroundColor: collapsed ? 'white' : '#e8e8e8',
        // backgroundColor: 'red'
      },

    });
  }
}

