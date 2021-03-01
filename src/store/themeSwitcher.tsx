import React, { createContext, ReactNode, Reducer, useReducer } from "react"
import { useContext } from "react"

enum ACTION_TYPES {
  TOGGLE = "TOGGLE",
}

type Action = { type: ACTION_TYPES.TOGGLE }

interface State {
  dark: boolean
}

const INITIAL_STATE: State = {
  dark: true,
}

const reducer: Reducer<State, Action> = (
  prevState: State,
  action: Action
): State => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE:
      return {
        ...prevState,
        dark: !prevState.dark,
      }
    default:
      return INITIAL_STATE
  }
}

export const Context = createContext<{
  state: typeof INITIAL_STATE
  dispatch: (action: Action) => void
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
})

export const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <Context.Provider value={{ dispatch, state }}>{children}</Context.Provider>
  )
}

export const useThemeSwitcherStore = () => {
  const { state, dispatch } = useContext(Context)

  const toggle = () => {
    dispatch({ type: ACTION_TYPES.TOGGLE })
  }

  return {
    state,
    toggle,
  }
}
