import { PencilLine } from "lucide-react"

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <PencilLine strokeWidth={1} size={20} />
      <span className="font-semibold">masterLib</span>
    </div>
  )
}

export default Logo
