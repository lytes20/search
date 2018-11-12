const initialState = {
  meals: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        meals: action.payload,
      };
    default:
      return state;
  }
};
