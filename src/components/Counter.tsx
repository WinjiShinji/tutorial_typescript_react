import { ChangeEvent, useReducer } from "react"
import CounterComponent from "./CounterComponent"

// Reducer Logic //
const initState = { count: 0, text: "" }

// Controversial Enums //
// const enum REDUCER_ACTION_TYPE {
//   INCREMENT,
//   DECREMENT,
// }

const REDUCER_ACTION_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  NEW_INPUT: "NEW_INPUT",
}

type ReducerAction = {
  type: string
  payload?: string
}

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
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

const Counter = () => {
  // const [count, setCount] = useState<number>(1) // <number> - optional if inferred
  const [state, dispatch] = useReducer(reducer, initState)

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value })
  }

  return (
    <>
      <CounterComponent
        increment={increment}
        decrement={decrement}
        handleTextInput={handleTextInput}
      >
        Count is {state.count}
      </CounterComponent>
      <h2>{state.text}</h2>
    </>
  )
}
export default Counter
