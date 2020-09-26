import AsyncStorage from "@react-native-community/async-storage";

const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, authToken: action.data.token};

    case 'CHECK':
      return {...state,authToken: action.data.currentToken};

    case 'LOGOUT':
      return {...state,authToken: null};
    default:
      return state;
  }
};

export default Reducer;
