const MODAL_SWITCH = 'MODAL_SWITCH';

let showModal = false;

export function flipModal(arg = !showModal) {
  showModal = arg;

  return {
    type: MODAL_SWITCH,
    showModal,
  };
}

export function reducer(state = {
  showModal,
}, action) {
  switch(action.type) {
  case MODAL_SWITCH:
    return {
      ...state,
      showModal: action.showModal,
    };
  default:
    return state;
  }
}
