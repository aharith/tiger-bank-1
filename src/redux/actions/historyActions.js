const addHistory = (data) => ({
  type: "ADD_HISTORY",
  data,
});

const clearHistory = () => ({
  type: "CLEAR_HISTORY",
});

export { addHistory, clearHistory };
