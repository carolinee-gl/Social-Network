import { isInaccessible } from "@testing-library/react";

 let initialState = {
   sidebar: {}
 }

const sidebarReducer = (state = initialState, action) => {
    return state;
   }
   export default sidebarReducer;