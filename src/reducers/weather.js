//Weather Reducer

export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        weather: action.weather
      };
    default:
      return state;
  }
};
