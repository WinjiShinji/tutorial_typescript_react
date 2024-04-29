import Counter from "./components/Counter"
import Heading from "./components/Heading"
import List from "./components/List"
import Section from "./components/Section"

function App() {
  return (
    <>
      <Heading title={"Hello"} />
      <Section>This is my section.</Section>
      <Counter />
      <List
        items={["☕ Coffee", "🎶 Music", "🖥 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  )
}

export default App
