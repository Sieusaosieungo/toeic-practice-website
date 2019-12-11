const initialState = {};

const user = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case "EXAM_TEST":
      return action.data;
    default:
      return state;
  }
};

export default user;
