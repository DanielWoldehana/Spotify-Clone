export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finished developing
  token:
    "BQBfofcnO62C1S69KtzjR-_IgtC4tZbsTQ_Eqz3KQAm2vhKdmEJ5rF5Mx2W1JV7-VjIVEuhi24oO4I5776qAuHcAY-cxteSQdthyvYlZdXAYJ7AjeLNELTYFHmO6o4JZ7MkLudr-XHzTFK3etXrnjm5i8B8KWfGaHMi8X_f6mozCuqx6",
};

const reducer = (state, action) => {
  console.log("the reducer action ", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
