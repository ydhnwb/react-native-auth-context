import AsyncStorage from "@react-native-community/async-storage";

const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, authToken: action.data.token, loadingApp: false};

    case 'CHECK':
      return {...state,authToken: action.data.currentToken, loadingApp: false};

    case 'LOGOUT':
      return {...state,authToken: null, loadingApp: false};
    default:
      return state;
  }
};

export default Reducer;
