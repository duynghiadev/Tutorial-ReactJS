const initState = {
  users: [
    { id: 1, name: "Duy Nghia" },
    { id: 2, name: "Basil" },
    { id: 3, name: "Learn React Redux with Duy Nghia" },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
