// Horrible way to do context!!! //

import {
  ChangeEvent,
  ReactElement,
  createContext,
  useCallback,
  useReducer,
} from "react"

// Reducer Logic //
type StateType = {
  count: number
  text: string
}

export const initState: StateType = { count: 0, text: "" }

const REDUCER_ACTION_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  NEW_INPUT: "NEW_INPUT",
}

type ReducerAction = {
  type: string
  payload?: string
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" } // double bang ??
    default:
      throw new Error()
  }
}

const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  )
  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  )
  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value })
  }, [])
  return { state, increment, decrement, handleTextInput }
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
}

export const CounterContext =
  createContext<UseCounterContextType>(initContextState)

type ChildrenType = {
  children?: ReactElement | undefined
}

export const CounterProvider = ({
  children,
  ...initState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  )
}
