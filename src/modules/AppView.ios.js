import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import NavigatorViewContainer from './navigator/NavigatorViewContainer';
import * as snapshotUtil from '../utils/snapshot';

import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';
import GuideScreen from '../components/GuideScreen';

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,

    showInstr: PropTypes.bool,
    firstTime: PropTypes.bool,

    sessionStateActions: PropTypes.shape({
      firstTimeDone: PropTypes.func.isRequired,
      resetSessionStateFromSnapshot: PropTypes.func.isRequired,
      initializeSessionState: PropTypes.func.isRequired
    })

    //dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        //const {dispatch} = this.props;

        if (snapshot) {
          //dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
          this.props.sessionStateActions.resetSessionStateFromSnapshot(snapshot);
        } else {
          this.props.sessionStateActions.initializeSessionState();
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }
  firstTimeDone = () =>{
    //console.log('AppView.firstTimeDone');
    this.props.sessionStateActions.firstTimeDone();
  }

  render() {
    if (this.props.firstTime) {
      return (<GuideScreen guidePics={['pic0', 'pic1', 'pic2', 'pic3']} guideDone ={() =>{this.firstTimeDone();}}/>);
    }
    if (!this.props.isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor='#455a64' barStyle='light-content' />
        <NavigatorViewContainer />
        {__DEV__ && <DeveloperMenu />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
