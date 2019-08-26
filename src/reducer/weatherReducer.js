const initalState = {
  weather: []
};

export const weatherReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        ...state,
        weather: action.payload
      };
    default:
      return state;
  }
};
