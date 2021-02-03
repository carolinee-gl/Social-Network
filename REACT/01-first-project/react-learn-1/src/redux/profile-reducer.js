const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
  posts: [
    { id: 1, message: 'post1', likesCount: 12 },
    { id: 2, message: 'post2', likesCount: 35 },
    { id: 2, message: 'post3', likesCount: 35 },
    { id: 2, message: 'post4', likesCount: 35 },
    { id: 2, message: 'post5', likesCount: 35 },
  ],
  newPostText: 'post-area'

};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return { // let stateCopy = 
        ...state,
        newPostText: action.newText
      };

    default:
      return state;
  }
}


export const addPostActionCreator = () => ({
  type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer;