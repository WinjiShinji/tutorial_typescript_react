import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react"

type CounterProps = {
  // setCount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode
  increment: MouseEventHandler
  decrement: MouseEventHandler
  handleTextInput: ChangeEventHandler<HTMLInputElement>
}

const CounterComponent = ({
  increment,
  decrement,
  handleTextInput,
  children,
}: CounterProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={handleTextInput} />
    </>
  )
}
export default CounterComponent
