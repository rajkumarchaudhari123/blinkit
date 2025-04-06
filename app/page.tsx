import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <main>
        {/* Top Banner (Hidden on Mobile) */}
        <div className="hidden sm:block w-full relative aspect-[27/9] sm:aspect-[27/4]">
          <Image
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
            alt="Blinkit Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Category Banners */}
        {/* Category Banners - */}
<div className="hidden sm:flex w-full mt-4 flex-wrap gap-4 px-2">
  {[
    {
      alt: "Pharmacy",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg",
    },
    {
      alt: "Pet Care",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg",
    },
    {
      alt: "Baby Care",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg",
    },
  ].map((img, index) => (
    <div
      key={index}
      className="relative w-full sm:w-[32%] aspect-[16/9]"
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover rounded-md"
        priority
      />
    </div>
  ))}
</div>


        {/* Shop by Category Section */}
        <div className="px-4 mt-8">
          <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-[2px] justify-center">
  {[
    {
      alt: "Pan Corner",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    },
    {
      alt: "Snacks",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
    },
    {
      alt: "Beverages",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
    },
    {
      alt: "Chocolates",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png",
    },
    {
      alt: "Dairy",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
    },
    {
      alt: "Fruits",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
    },
    {
      alt: "Bakery",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png",
    },
    {
      alt: "Ice Cream",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
    },
    {
      alt: "Dry Fruits",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png",
    },
    {
      alt: "Dry Fruits",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
    },
    {
      alt: "Dry Fruits",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png",
    },
    {
      alt: "Dry Fruits",
      src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png",
    },
  ].map((img, index) => (
    <div key={index} className="flex flex-col items-center text-center">
      <div className="relative w-[72px] sm:w-[88px] aspect-[4/5]">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-contain rounded-md"
          priority
        />
      </div>
    </div>
  ))}
</div>

{/* Dairy, Bread & Eggs */}
<div className="p-4 bg-white rounded-xl shadow-md">
  <h3 className="text-xl font-bold mb-6 text-gray-800">Dairy, Bread & Eggs</h3>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {[
      {
        alt: "Amul Butter 100g",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/921dc7a0-0a78-44d0-80e9-f49f0cba1073.jpg",
        price: "₹110",
      },
      {
        alt: "Mother Dairy Milk",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/921dc7a0-0a78-44d0-80e9-f49f0cba1073.jpg",
        price: "₹55",
      },
      {
        alt: "Mother Dairy Milk",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg?ts=1711189562",
        price: "₹55",
      },
      {
        alt: "Mother Dairy Milk",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
        price: "₹55",
      },
      {
        alt: "Mother Dairy Milk",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/319610a.jpg?ts=1690814158",
        price: "₹55",
      },
      {
        alt: "Mother Dairy Milk",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
        price: "₹55",
      },
      {
        alt: "Mother Dairy Milk",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212",
        price: "₹55",
      },
      {
        alt: "Mother Dairy Milk",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5147b440-045d-4452-92ce-1d9d7c406ebd.jpg?ts=1741079774",
        price: "₹55",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col gap-2 items-center hover:shadow-md transition duration-200"
      >
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <p className="text-sm font-semibold text-gray-800 text-center line-clamp-2">{item.alt}</p>
        <div className="flex items-center justify-between w-full mt-1">
          <span className="text-sm font-bold text-gray-900">{item.price}</span>
          <button className="text-xs px-3 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50 font-medium transition-all">
            Add
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Rolling paper & tobacco */}

<div className="p-4 bg-white rounded-xl shadow-md">
  <h3 className="text-xl font-bold mb-6 text-gray-800">Rolling paper & tobacco</h3>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {[
      {
        alt: "Ultimate Rolling Paper",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478728a.jpg?ts=1690814280",
        price: "₹110",
      },
      {
        alt: "Perfect Rolled Cones",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/661d1bd8-2374-47ad-b231-af4842bd5d50.jpg?ts=1740560975",
        price: "₹95",
      },
      {
        alt: "Bongchie",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252",
        price: "₹100",
      },
      {
        alt: "Brown Rolling Paper Cones",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b91a3d9a-4595-45b5-a123-5cbfcecc3bcc.jpg?ts=1728246095",
        price: "₹55",
      },
      {
        alt: "Stash Pro",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63d35241-fbb8-40bb-8b95-dcb84a9656e7.jpg?ts=1740658589",
        price: "₹87",
      },
      {
        alt: "Perfect Rolling Paper",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496996a.jpg?ts=1690814374",
        price: "₹88",
      },
      {
        alt: "(Pink) - Bongchi",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b811154-db15-456d-a219-13edaa288ab7.jpg?ts=1725020018",
        price: "₹120",
      },
      {
        alt: "Rolling",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2607a98a-0b2d-43dc-b5a5-2322540fa309.jpg?ts=1708597803",
        price: "₹55",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col gap-2 items-center hover:shadow-md transition duration-200"
      >
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <p className="text-sm font-semibold text-gray-800 text-center line-clamp-2">{item.alt}</p>
        <div className="flex items-center justify-between w-full mt-1">
          <span className="text-sm font-bold text-gray-900">{item.price}</span>
          <button className="text-xs px-3 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50 font-medium transition-all">
            Add
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Snacks & Munchies */}
<div className="p-4 bg-white rounded-xl shadow-md">
  <h3 className="text-xl font-bold mb-6 text-gray-800">Snacks & Munchies</h3>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {[
      {
        alt: "Ultimate Rolling Paper",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6cfea237-c302-477c-a05e-0c0be2f1f4f3.jpg?ts=1717975459",
        price: "₹110",
      },
      {
        alt: "Cheetos Flamin' Hot Crunchy Crisps",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6cfea237-c302-477c-a05e-0c0be2f1f4f3.jpg?ts=1717975459",
        price: "₹475",
      },
      {
        alt: "Kettle Studio Roc",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6265c933-0619-4ce1-ae4b-6c9336902295.jpg?ts=1723098571",
        price: "₹100",
      },
      {
        alt: "BrownCones",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b3ee7724-3b6c-475e-aa50-1714fe9199be.jpg?ts=1723100802",
        price: "₹55",
      },
      {
        alt: "Stash Pro",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ca5df83c-027b-40c9-9605-38126d47575d.jpg?ts=1723098574",
        price: "₹87",
      },
      {
        alt: "Doki",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a0f592fe-d783-42e1-b1a4-1efccdc52721.jpg?ts=1723100072",
        price: "₹88",
      },
      {
        alt: "(Pink) - Bongchi",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c23856bf-cdf5-475d-9545-023bff8694d3.jpg?ts=1723100848",
        price: "₹120",
      },
      {
        alt: "Rolling",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ef3c74a4-c809-4799-919d-27f75fba37eb.jpg?ts=1723100801",
        price: "₹55",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col gap-2 items-center hover:shadow-md transition duration-200"
      >
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <p className="text-sm font-semibold text-gray-800 text-center line-clamp-2">{item.alt}</p>
        <div className="flex items-center justify-between w-full mt-1">
          <span className="text-sm font-bold text-gray-900">{item.price}</span>
          <button className="text-xs px-3 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50 font-medium transition-all">
            Add
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Hookah */}
<div className="p-4 bg-white rounded-xl shadow-md">
  <h3 className="text-xl font-bold mb-6 text-gray-800">Hookah</h3>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {[
      {
        alt: "Ultimate Rolling Paper",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/535601a.jpg?ts=1698309253",
        price: "₹110",
      },
      {
        alt: "Cheetos Flamin' Hot Crunchy Crisps",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496995a.jpg?ts=1690814532",
        price: "₹475",
      },
      {
        alt: "Kettle Studio Roc",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480928a.jpg?ts=1687523762",
        price: "₹100",
      },
      {
        alt: "BrownCones",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480928a.jpg?ts=1687523762",
        price: "₹55",
      },
      {
        alt: "Stash Pro",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/535602a.jpg?ts=1698309253",
        price: "₹87",
      },
      {
        alt: "Doki",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480935a.jpg?ts=1687523763",
        price: "₹88",
      },
      {
        alt: "(Pink) - Bongchi",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480929a.jpg?ts=1687951095",
        price: "₹120",
      },
      {
        alt: "Rolling",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/61eb3cc7-6bd1-4ba9-b03c-44e4c8a0f8a3.jpg?ts=1736847234",
        price: "₹55",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col gap-2 items-center hover:shadow-md transition duration-200"
      >
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <p className="text-sm font-semibold text-gray-800 text-center line-clamp-2">{item.alt}</p>
        <div className="flex items-center justify-between w-full mt-1">
          <span className="text-sm font-bold text-gray-900">{item.price}</span>
          <button className="text-xs px-3 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50 font-medium transition-all">
            Add
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Mouth fresheners */}
<div className="p-4 bg-white rounded-xl shadow-md">
  <h3 className="text-xl font-bold mb-6 text-gray-800">Mouth fresheners</h3>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {[
      {
        alt: "Ultimate Rolling Paper",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9dfff4f5-de84-4a3c-9cef-6d8e504cbf89.jpg?ts=1723143406",
        price: "₹110",
      },
      {
        alt: "Cheetos Flamin' Hot Crunchy Crisps",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/498984a.jpg?ts=1686566080",
        price: "₹475",
      },
      {
        alt: "Kettle Studio Roc",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ac3d1c56-641d-4877-9d8e-cf1d8c3dd287.jpg?ts=1737349571",
        price: "₹100",
      },
      {
        alt: "BrownCones",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/206540a.jpg?ts=1687437714",
        price: "₹55",
      },
      {
        alt: "Stash Pro",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f77ef89d-0a4f-4a42-9a57-a2c0108a237d.jpg?ts=1737275566",
        price: "₹87",
      },
      {
        alt: "Doki",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c6d53762-5fc5-409f-ac12-1b844b8b215a.jpg?ts=1708589268",
        price: "₹88",
      },
      {
        alt: "(Pink) - Bongchi",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/395091a.jpg?ts=1686558551",
        price: "₹120",
      },
      {
        alt: "Rolling",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/61eb3cc7-6bd1-4ba9-b03c-44e4c8a0f8a3.jpg?ts=1736847234",
        price: "₹55",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col gap-2 items-center hover:shadow-md transition duration-200"
      >
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <p className="text-sm font-semibold text-gray-800 text-center line-clamp-2">{item.alt}</p>
        <div className="flex items-center justify-between w-full mt-1">
          <span className="text-sm font-bold text-gray-900">{item.price}</span>
          <button className="text-xs px-3 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50 font-medium transition-all">
            Add
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Cold Drinks & Juices */}
<div className="p-4 bg-white rounded-xl shadow-md">
  <h3 className="text-xl font-bold mb-6 text-gray-800">Cold Drinks & Juices</h3>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {[
      {
        alt: "Water Bottle ",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/54272bdd-5da9-4926-9109-9dfbde4dc4d6.jpg?ts=1741079677",
        price: "₹110",
      },
      {
        alt: "Big Water Bottle ",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cfeaa68b-2ce1-4c1e-95c5-450bbb9bb281.jpg?ts=1708591243",
        price: "₹475",
      },
      {
        alt: "Ice cube ",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/482620a.jpg?ts=1690813234",
        price: "₹100",
      },
      {
        alt: "Water",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/10b8b01a-8b71-4448-becb-16d4247ef05c.jpg?ts=1707312326",
        price: "₹55",
      },
      {
        alt: "coke",
        src: "hhttps://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/15288a.jpg?ts=1698840601",
        price: "₹87",
      },
      {
        alt: "Mother Dairy",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f3465fd8-edba-498f-9a33-abe44cf05c94.jpg?ts=1713511877",
        price: "₹88",
      },
      {
        alt: "Lemon Water",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b330c04e-0e5f-4733-a43f-9351772763d8.jpg?ts=1740976613",
        price: "₹120",
      },
      {
        alt: "Rolling",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9a33cf3e-72c0-4116-aae8-2eab9e09bf67.jpg?ts=1707312326",
        price: "₹55",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col gap-2 items-center hover:shadow-md transition duration-200"
      >
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <p className="text-sm font-semibold text-gray-800 text-center line-clamp-2">{item.alt}</p>
        <div className="flex items-center justify-between w-full mt-1">
          <span className="text-sm font-bold text-gray-900">{item.price}</span>
          <button className="text-xs px-3 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50 font-medium transition-all">
            Add
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Candies & Gums */}
<div className="p-4 bg-white rounded-xl shadow-md">
  <h3 className="text-xl font-bold mb-6 text-gray-800">Candies & Gums</h3>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {[
      {
        alt: " Candies",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b8760532-ff5b-4451-aacf-8037ec6da880.jpg?ts=1732624518",
        price: "₹110",
      },
      {
        alt: "Melody ",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/110755a.jpg?ts=1697793137",
        price: "₹475",
      },
      {
        alt: "Orbit  ",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/105159a.jpg?ts=1704911342",
        price: "₹100",
      },
      {
        alt: "Pulse",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/aa4c477e-08d8-479d-be21-76e061e13c0d.jpg?ts=1718169096",
        price: "₹55",
      },
      {
        alt: "coke",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/737c47d4-5c30-4a36-8de3-15b539edcff7.jpg?ts=1726830247",
        price: "₹87",
      },
      {
        alt: "kokei",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/737c47d4-5c30-4a36-8de3-15b539edcff7.jpg?ts=1726830247",
        price: "₹88",
      },
      {
        alt: "Lemon Water",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0cdb751e-a797-4f76-ba3d-00a4c6130c19.jpg?ts=1710154019",
        price: "₹120",
      },
      {
        alt: "Hajmola",
        src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5cf43365-0827-4882-bcb3-19e611e5e1a9.jpg?ts=1735822670",
        price: "₹55",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col gap-2 items-center hover:shadow-md transition duration-200"
      >
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <p className="text-sm font-semibold text-gray-800 text-center line-clamp-2">{item.alt}</p>
        <div className="flex items-center justify-between w-full mt-1">
          <span className="text-sm font-bold text-gray-900">{item.price}</span>
          <button className="text-xs px-3 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50 font-medium transition-all">
            Add
          </button>
        </div>
      </div>
    ))}
  </div>
</div>



        </div>
      </main>
    </div>
  );
}
