import { useParams, useSearchParams } from 'react-router'

const About = () => {
  const params = useParams()
  const [search] = useSearchParams()

  console.log(params)
  console.log(search)

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About Page where you can learn more about us.</p>
    </div>
  )
}

export default About
