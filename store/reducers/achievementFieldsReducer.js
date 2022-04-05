const initialState = {
  achievementFields: [],
  achievementField: null,
};

const achievementFieldsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ACHIEVEMENT_FIELDS":
      return {
        ...state,
        achievementFields: action.payload,
      };
    default:
      return state;
  }
};
export default achievementFieldsReducer;
