import { createContext, useReducer } from 'react';
// import {
//   State,
//   Action
// } from '../types';

// interface DataContext {
//   Context: React.Context<any>;
//   Provider: FC<any>;
// }

interface Props {
  children: any;
}

const createDataContext = (
  reducer: any,
  actions: any,
  defaultValue: any
) => {
  const Context = createContext({});

  const Provider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions: any = {}
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>{children}</Context.Provider>
    )
  }

  return {Context, Provider}
}

export default createDataContext;