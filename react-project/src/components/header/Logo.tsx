import { PencilLine } from "lucide-react"

const Logo = () => {
  return (
    <a href="#" className="flex gap-x-2">
      <PencilLine strokeWidth={1} />
      <span className="font-semibold">masterLib</span>
    </a>
  )
}

export default Logo
