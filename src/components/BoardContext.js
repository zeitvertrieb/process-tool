import React from "react";

const initialState = { group: "boardGroupByStatus" };

const reducer = (state, action) => {
  switch (action.type) {
    case "boardGroupByStatus":
      return { group: "boardGroupByStatus" };
    case "boardGroupByAssignment":
      return { group: "boardGroupByAssignment" };
    default:
      throw new Error();
  }
};

const groupStatus = () => ({ type: "boardGroupByStatus" });
const groupAssignment = () => ({ type: "boardGroupByAssignment" });

const actions = dispatch => ({
  groupStatus: () => dispatch(groupStatus()),
  groupAssignment: () => dispatch(groupAssignment())
});

const BoardContext = React.createContext(initialState);

export const BoardContextProvider = props => {
  const [reducerState, dispatch] = React.useReducer(reducer, initialState);
  const reducerActions = actions(dispatch);
  const context = {
    state: { ...reducerState },
    actions: { ...reducerActions }
  };

  return (
    <BoardContext.Provider value={context}>
      {props.children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => React.useContext(BoardContext);
