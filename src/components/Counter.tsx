import { useState } from "react"
import CounterComponent from "./CounterComponent"

const Counter = () => {
  const [count, setCount] = useState<number>(1) // <number> - optional if inferred

  return (
    <>
      <CounterComponent setCount={setCount}>
        Count is {count}
      </CounterComponent>
    </>
  )
}
export default Counter
