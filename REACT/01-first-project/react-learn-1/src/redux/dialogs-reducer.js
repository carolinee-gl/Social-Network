const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Caroline' },
    { id: 2, name: 'Stas' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Kostya' },
    { id: 5, name: 'Nadya' },
    { id: 6, name: 'Valya' },
    { id: 7, name: 'Sasha' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'Hi' },
    { id: 4, message: 'Hi' },
    { id: 5, message: 'Hi' },
  ],
  newMessageBody: ""

};

const dialogsReducer = (state = initialState, action) => {


  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})
export default dialogsReducer;