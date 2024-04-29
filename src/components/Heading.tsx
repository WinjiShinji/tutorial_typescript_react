import { ReactElement } from "react"

type HeadingProps = { title: string }

const Heading = ({ title }: HeadingProps): ReactElement => {
  return <header>{title}</header>
}
export default Heading

// ReactElement - optional, added specificity.