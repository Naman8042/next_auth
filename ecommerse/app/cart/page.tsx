import Image from "next/image";

interface Cart {
  name: String;
  price: number;
  quantity: number;
  imageUrl: string;
}

const cartItems: Cart[] = [
  {
    name: "Green Apple",
    price: 16,
    quantity: 5,
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Potato",
    price: 16,
    quantity: 5,
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Potato",
    price: 16,
    quantity: 5,
    imageUrl:
      "data:image/jpeg;base64,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",
  },
];

const page = () => {
  return (
    <div className="mt-36 w-full px-40">
      <h1 className="text-2xl text-center font-bold">My Shopping Cart</h1>
      <div className="flex gap-5 my-10 ">
        <div className="overflow-x-auto  w-[65%]">
          <div className="overflow-hidden rounded-xl border">
            <table className="min-w-full text-left ">
              <thead className="text-gray-400">
                <tr>
                  <th className="py-2 px-4 border-b text-xs">PRODUCT</th>
                  <th className="py-2 px-4 border-b text-xs">QUANTITY</th>
                  <th className="py-2 px-4 border-b text-xs">PRICE</th>
                  <th className="py-2 px-4 border-b text-xs">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b flex items-center gap-1">
                      <Image
                        src={item.imageUrl}
                        height={50}
                        width={50}
                        alt=""
                      />
                      <h5 className="text-xs">{item.name}</h5>
                    </td>
                    <td className="py-2 px-4 border-b text-xs">
                      {item.quantity}
                    </td>
                    <td className="py-2 px-4 border-b text-xs">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-2 px-4 border-b text-xs">
                      ${(item.quantity * item.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[35%] rounded-xl border p-4 flex flex-col gap-2 h-56">
          <h1 className="font-semibold">Cart Total</h1>
          <div className="flex justify-between border-b pb-2 text-sm">
            <h1 className="text-gray-500">Subtotal</h1>
            <h1 className="font-semibold">Rs 84</h1>
          </div>
          <div className="flex justify-between border-b pb-2 text-sm">
            <h1 className="text-gray-500">Shipping</h1>
            <h1 className="font-semibold">Free</h1>
          </div>
          <div className="flex justify-between  pb-2 text-sm">
            <h1 className="text-gray-500">Total</h1>
            <h1 className="font-semibold">Rs 84</h1>
          </div>
          <button className="w-full text-sm bg-lime-600 py-2.5 rounded-full text-white">
            Proceed to checkout
          </button>
        </div>
      </div>
      <div className="w-[63%] flex justify-between items-center px-3 py-4 rounded-xl border">
        <h1 className="text-xl font-semibold ">Coupon Code</h1>
        <div className="flex w-[70%] justify-between items-center border-l border-t border-b rounded-xl">
            <input type="text" placeholder="Enter code" className=" p-2 rounded-l-xl"/>
            <button className="w-40 bg-black text-white py-2 rounded-full">Apply Coupon</button>
        </div>
      </div>
    </div>
  );
};

export default page;
