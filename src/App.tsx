import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import List from "./components/List"
import Section from "./components/Section"
import { CounterProvider } from "./context/CounterContext"
import { initState } from "./context/CounterContext"

// interface User {
//   id: number
//   username?: string
// }

// Taxing function //
type FibFunc = (n: number) => number
const fibFunc: FibFunc = (n) => {
  if (n < 2) return n
  return fibFunc(n - 1) + fibFunc(n - 2)
}
const myNum: number = 37

function App() {
  const [count, setCount] = useState<number>(0)
  // const [users, setUsers] = useState<User[] | null>(null)
  // const [user, setUser] = useState<User>({} as User) // not recommended!
  // setUsers([{ id: 1 }, { id: 2 }, { id: 3 }])

  const inputRef = useRef<HTMLInputElement>(null)
  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)
  // optional chaining?. for possible null values.

  useEffect(() => {
    console.log("mounting")
    return () => console.log("unmounting")
  }, [])

  const addOne = useCallback(
    (): // e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    void => setCount((prev) => prev + 1),
    []
  )

  const addTwo = useCallback((): void => setCount((prev) => prev + 2), [])
  // void - no return value, opposite of any.

  // useMemo //
  const myResult = useMemo<number>(() => fibFunc(myNum), [])

  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <>
          <Heading title={"Hello"} />
          <Section>This is my section.</Section>
          <Counter />
          <List
            items={["☕ Coffee", "🎶 Music", "🖥 Code"]}
            render={(item: string) => <span className="gold">{item}</span>}
            />
          <h1>{count}</h1>
          <button type="button" onClick={addOne}>Add 1</button>
          <button type="button" onClick={addTwo}>Add 2</button>
          <h2>{myResult}</h2>
          <form>
            <label htmlFor="inputRef">Input</label>
            <input placeholder="Input" type="text" id="inputRef" ref={inputRef} />
          </form>
        </>
      </CounterProvider>
    </>
  )
}

export default App
