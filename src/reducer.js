export const initialState = {
  user: null,
};
export const actionTypes = {
  Set_User: "SET_USER",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.Set_User:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
export default reducer;
