import { DOING, DONE, RESOURCES, TODO } from "./actionTypes";

let initState = {
  data: [],
};

let reducer = (state = initState, action) => {
  const { type, payload } = action;
  // if(payload){
    // const { idx, data } = payload;
  // }
  // console.log(payload)

  switch (type) {
    case "FETCH":
      return { ...state, data: payload.data };

    case RESOURCES:
      return { ...state, data: [...state.data, (state.data[payload?.idx].resources = payload?.data)] };

    case TODO:
      return { ...state, data: [...state.data, (state.data[payload?.idx].todo = payload?.data)] };

    case DOING:
      return { ...state, data: [...state.data, (state.data[payload?.idx].doing = payload?.data)] };

    case DONE:
      return { ...state, data: [...state.data, (state.data[payload?.idx].done = payload?.data)] };

    default:
      return state;
  }
};

export default reducer;
