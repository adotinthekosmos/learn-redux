// src/js/reducers/index.js
// const initialState = {
//     articles: [],
//     tmp:'lala'
//   };
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_ARTICLE:
//         state.articles.push(action.payload);
//         return {...state,tmp:'kaka'};
//       default:
//         return state;
//     }
//   };
//   export default rootReducer;

// src/js/reducers/index.js
const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      state.articles.push(action.payload);
      //...state create a copy of state object, change the copied state
      //with new articles[] attribute
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;
