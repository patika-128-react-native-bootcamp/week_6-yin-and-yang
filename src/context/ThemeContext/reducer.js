export default (state, action) => {
  switch (action.type) {
    case 'LIGHT_MODE': {
      return {...state, darkMode: "light"};
    }

    case 'DARK_MODE': {
      return {...state, darkMode: "dark"};
    }

    default:
      return state;
  }
};
