import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, wassap', likesCount: 12 },
        { id: 2, message: 'My first post here standing alone', likesCount: 35 },
        { id: 2, message: 'hi are you doing today', likesCount: 35 },
        { id: 2, message: 'you did this for why', likesCount: 35 },
        { id: 2, message: 'why not', likesCount: 35 },
      ],
      newPostText: 'post-area'
    },
    dialogsPage: {
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
        { id: 3, message: 'Wassap' },
        { id: 4, message: 'Wassap' },
        { id: 5, message: 'Wassap' },
      ],
      newMessageBody: ""

    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;