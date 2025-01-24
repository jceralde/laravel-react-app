import { Facebook, Github, Linkedin } from 'lucide-react'

const SocialIconList = () => {
  return (
    <div className="flex gap-x-4">
      <Github size={20} strokeWidth={1} />
      <Linkedin size={20} strokeWidth={1} />
      <Facebook size={20} strokeWidth={1} />
    </div>
  )
}

export default SocialIconList
