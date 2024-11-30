import Popularcategories from "./_components/Popularcategories"
import Popularproducts from './_components/Popularproducts'
import Imagesection from "./_components/Imagesection"

const page = () => {
  return (
    <div className="mt-36 overflow-x-hidden">
      <Imagesection/>
      <Popularcategories/>
      <Popularproducts/>
    </div>
  )
}

export default page