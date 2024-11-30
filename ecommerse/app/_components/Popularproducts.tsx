import Fruits from '@/public/Fruits.png'
import Image from 'next/image'

interface Product {
    name: string;
    imageUrl: string;
    price: number;
    rating: number; // rating out of 5
}

let popularProducts: Product[] = [
    { 
        name: "Apple", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/415/415682.png", 
        price: 1.5, 
        rating: 4.8 
    },
    { 
        name: "Banana", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/135/135620.png", 
        price: 0.9, 
        rating: 4.5 
    },
    { 
        name: "Chicken Breast", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/2965/2965485.png", 
        price: 5.0, 
        rating: 4.7 
    },
    { 
        name: "Potato Chips", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png", 
        price: 2.5, 
        rating: 4.3 
    },
    { 
        name: "Orange Juice", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/1495/1495415.png", 
        price: 3.0, 
        rating: 4.6 
    },
    { 
        name: "Shampoo", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/2913/2913500.png", 
        price: 6.5, 
        rating: 4.4 
    },
    { 
        name: "Croissant", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081965.png", 
        price: 2.0, 
        rating: 4.9 
    },
    { 
        name: "Flour", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/763/763656.png", 
        price: 1.2, 
        rating: 4.3 
    },
    { 
        name: "Olive Oil", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046860.png", 
        price: 8.0, 
        rating: 4.7 
    },
    { 
        name: "Diabetic Bread", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076838.png", 
        price: 3.5, 
        rating: 4.2 
    },
    { 
        name: "Dish Soap", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3515/3515431.png", 
        price: 2.8, 
        rating: 4.5 
    },
    { 
        name: "Coconut Oil", 
        imageUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048466.png", 
        price: 7.5, 
        rating: 4.6 
    },
];


const Popularcategories = () => {
  return (
    <div className="px-40">
        <p className="text-xl font-semibold my-6">Popular Products</p>
        <div className='grid grid-cols-6 grow gap-6'>
        {
            popularProducts.map((data,index)=>(
                <div key={index} className='flex h-48 flex-col justify-center items-center border py-2  rounded-md'>
                    <Image src={data.imageUrl} alt="" className='h-24 w-24' width={100} height={100} />
                    <p className='text-xs w-full text-start px-2 mt-2'>{data.name}</p>
                    <p className='text-xs w-full text-start px-2 mt-1'>{data.price}</p>
                    <p className='text-xs w-full text-start px-2 mt-1'>{data.rating}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Popularcategories