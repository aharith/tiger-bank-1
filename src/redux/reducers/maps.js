const maps = (state = {}, { type, data }) => {
  switch (type) {
    case "UPDATE_MAP":
      state = {
        ...state,
        location: {...data},
      };
      break;
    default:
      break;
  }
  return state;
};
export default maps;
