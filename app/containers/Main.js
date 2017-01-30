import React, { Component, PropTypes } from 'react'
import {
  StyleSheet, View, Image, StatusBar, TouchableWithoutFeedback,
  Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import * as Animatable from 'react-native-animatable';

import {
  LocationButtonGroup,
  LocationSearchHeader,
  LocationSearchResults,
  SearchResultsList,
  NavigationIcon,
} from '../components'

const AnimatableImage = Animatable.createAnimatableComponent(Image);

const mapStateToProps = (state) => ({
  recentLocations: state.recentLocations,
  shortcutLocations: state.recentLocations.slice(0, 3),
  collapsed: state.locationSearchHeader.collapsed,
});

const mapActionsToProps = (dispatch) => {
  return {
    expandSearchHeader: bindActionCreators(actions.expandSearchHeader, dispatch),
    collapseSearchHeader: bindActionCreators(actions.collapseSearchHeader, dispatch),
  };
};

class Main extends Component {

  _handleExpandSearchHeader() {
    this.props.expandSearchHeader();
  }

  _getStyle() {
    const {
      collapsed
    } = this.props;
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: 20
      },
      menuWrapper: {
        position: 'absolute',
        left: 18,
        top: 25,
        width: 25,
        height: 25,
      },
      menuIcon: {
        width: 25,
        height: 25,
        position: 'absolute',
        left: 0,
        top: 0,
      },
      ham: {
        opacity: collapsed ? 1 : 0
      },
      arrow: {
        opacity: collapsed ? 0 : 1
      }
    });
  }

  render() {
    const {
      recentLocations,
      shortcutLocations,
      collapsed
    } = this.props;

    const styles = this._getStyle();

    return (
      <TouchableWithoutFeedback onPress={() => this.props.collapseSearchHeader()}>
        <View style={styles.container}>
          <StatusBar
            barStyle="dark-content"
          />

          <LocationSearchHeader
            collapsed={collapsed}
            expand={this._handleExpandSearchHeader.bind(this)}
          />

          <View style={styles.menuWrapper}>
            <AnimatableImage
              source={require('../images/icon-hamburger.png')}
              style={[styles.menuIcon, styles.ham]}
              transition={['opacity']}
            />
            <AnimatableImage
              source={require('../images/icon-arrow-left.png')}
              style={[styles.menuIcon, styles.arrow]}
              transition={['opacity']}
            />
          </View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Main);

