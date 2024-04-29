// ---- Old Method with React.FC - NOT RECOMMENDED! ---- //

// const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   )
// }
// export default Section

// ---- New Method with ReactNode - RECOMMENDED! ---- //
import { ReactNode } from "react"
type SectionProps = {
  title?: string
  children: ReactNode
}

const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}
export default Section
