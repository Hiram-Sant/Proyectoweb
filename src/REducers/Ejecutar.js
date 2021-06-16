export default (state, initialCaState) => {
    return {
      ...state,
      CaState: {
        ...initialCaState,
        started: true,
      }
    }
  };