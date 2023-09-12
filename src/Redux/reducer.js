let initState = {
  data : []
};

let reducer = (state = initState, action) => {
  const {type, payload } = action;

  switch (type) {
    case "FETCH":
      return { ...state, data: payload };
    default:
      return state;
  }
};

export default reducer;
