import {connect} from 'react-redux';
import AppView from './AppView';
import {bindActionCreators} from 'redux';

import * as SessionStateActions from './session/SessionState';

export default connect(
  state =>({
    isReady: state.getIn(['session', 'isReady']),
    firstTime: state.getIn(['session', 'firstTime']),
    showInstr: state.getIn(['session', 'showInstr'])
  }),
  dispatch =>{
    return {

      sessionStateActions: bindActionCreators(SessionStateActions, dispatch)

    };
  }
)(AppView);
