import Fruits from '@/public/Fruits.png'
import Image from 'next/image'

interface Types{
    name:string,
    imageUrl:string
}
let AllTypes: Types[] = [
    {name: "Fresh Fruits", imageUrl: "https://cdn-icons-png.flaticon.com/512/415/415682.png"},
    {name: "Fresh Vegetables", imageUrl: "https://cdn-icons-png.flaticon.com/512/135/135620.png"},
    {name: "Meat & Fish", imageUrl: "https://cdn-icons-png.flaticon.com/512/2965/2965485.png"},
    {name: "Snacks", imageUrl: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png"},
    {name: "Beverages", imageUrl: "https://cdn-icons-png.flaticon.com/512/1495/1495415.png"},
    {name: "Beauty & Health", imageUrl: "https://cdn-icons-png.flaticon.com/512/2913/2913500.png"}, // Updated URL
    {name: "Bread & Bakery", imageUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081965.png"},
    {name: "Baking Needs", imageUrl: "https://cdn-icons-png.flaticon.com/512/763/763656.png"},
    {name: "Cooking", imageUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046860.png"},
    {name: "Diabetic Food", imageUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076838.png"},
    {name: "Dish Detergents", imageUrl: "https://cdn-icons-png.flaticon.com/512/3515/3515431.png"},
    {name: "Oil", imageUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048466.png"},
];


const Popularcategories = () => {
  return (
    <div className="px-40">
        <p className="text-xl font-semibold my-6">Popular Categories</p>
        <div className='grid grid-cols-6 grow gap-6'>
        {
            AllTypes.map((data,index)=>(
                <div key={index} className='flex h-44 flex-col justify-center items-center border py-4 gap-1 rounded-md'>
                    <Image src={data.imageUrl} alt="" className='h-24 w-24' width={100} height={100}/>
                    <p className='text-sm'>{data.name}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Popularcategories