import { useParams, useSearchParams } from 'react-router'

const HCharge = () => {
  const params = useParams()
  const [search] = useSearchParams()

  console.log(params)
  console.log(search)

  return (
    <div>
      hcharge
    </div>
  )
}

export default HCharge
