import {Map} from 'immutable';

export const RESET_STATE = 'SessionState/RESET';
export const INITIALIZE_STATE = 'SessionState/INITIALIZE';
export const FIRST_TIME_DONE = 'SessionState/FIRST_TIME_DONE';
export const SHOW_INSTR_DONE = 'SessionState/SHOW_INSTR_DONE';
export const INCR_INSTR_INDEX = 'SessionState/INCR_INSTR_INDEX';

// Initial state
const initialState = Map({
  isReady: false,
  showInstr: true,
  firstTime: true
});

export function resetSessionStateFromSnapshot(state) {
  return {
    type: RESET_STATE,
    payload: state
  };
}

export function initializeSessionState() {
  return {
    type: INITIALIZE_STATE
  };
}
export function firstTimeDone() {
  return {
    type: FIRST_TIME_DONE
  };
}
export function showInstrDone() {
  return {
    type: SHOW_INSTR_DONE
  };
}
// Reducer
export default function SessionStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE_STATE:
      return state.set('isReady', true);
    case RESET_STATE:
      return state.set('isReady', true)
                  .set('firstTime', action.payload.getIn(['session', 'firstTime']))
                  .set('showInstr', action.payload.getIn(['session','showInstr']));
    case SHOW_INSTR_DONE:
      return state.set('showInstr', false);
    case FIRST_TIME_DONE:
      return state.set('firstTime', false);
    default:
      return state;
  }
}
