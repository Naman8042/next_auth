import Shopleft from "../_components/Shopleft"
import Shopright from "../_components/Shopright"

const page = () => {
  return (
    <div className="flex py-4 mt-32">
        <Shopleft/>
        <Shopright/>
    </div>
  )
}

export default page