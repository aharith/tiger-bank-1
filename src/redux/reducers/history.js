const history = (state = {}, { type, data }) => {
  switch (type) {
    case "ADD_HISTORY":
      // state.push(data);
      const list = state.historyList || []
      list.push(data)
      state = {...state, historyList: [...list]}
      break;
    case "CLEAR_HISTORY":
      state = {...state, historyList: []};
      break;
    default:
      break;
  }
  return state;
};
export default history;
