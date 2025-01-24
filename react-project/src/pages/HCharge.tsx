import { useParams, useSearchParams } from 'react-router'

const HCharge = () => {
  const params = useParams()
  const [search] = useSearchParams()

  console.log(params)
  console.log(search)

  return (
    <div>
      {
        Array.from({ length: 100 }).map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et. Necessitatibus, voluptates. Quam, quidem
          </p>
        ))
      }
      {/* <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur harum sint, repellat alias hic repudiandae delectus quidem dolorum. Rerum nihil et accusamus adipisci sit blanditiis est officiis qui dicta sequi?
      </p> */}
    </div>
  )
}

export default HCharge
