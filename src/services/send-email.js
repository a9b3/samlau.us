import axios from 'axios';

const SEND_EMAIL = 'SEND_EMAIL';
const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
const SEND_EMAIL_FAIL = 'SEND_EMAIL_FAIL';
const EMAIL_ENDPOINT = 'http://localhost:9000/api/send_mail';

function sendEmailFetch() {
  return {
    type: SEND_EMAIL,
  };
}

function sendEmailSuccess() {
  return {
    type: SEND_EMAIL_SUCCESS,
  };
}

function sendEmailFail(e) {
  return {
    type: SEND_EMAIL_FAIL,
    error: e,
  };
}

export function sendEmail(message) {
  return dispatch => {
    dispatch(sendEmailFetch());

    return axios.post(EMAIL_ENDPOINT, message)
    .then(res => dispatch(sendEmailSuccess(res)))
    .catch(e => dispatch(sendEmailFail(e)));
  };
}

export function reducer(state = {}, action) {
  switch (action.type) {
    case SEND_EMAIL:
      return Object.assign({}, state, {
        error: undefined,
        inProgress: true,
      });
    case SEND_EMAIL_SUCCESS:
      return Object.assign({}, state, {
        error: undefined,
        inProgress: false,
      });
    case SEND_EMAIL_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        inProgress: false,
      });
    default:
      return state;
  }
}
