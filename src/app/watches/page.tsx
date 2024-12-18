import React from 'react'
import '@/app/styles/watches.css'
import Image from 'next/image'

const Watches = () => {
  const watchData = [
    {
        id: "1",
        name: "Classic Strap Watch",
        description: "Classic Strap Watch For Men",
        PKR: "2,199.00",
        image: "/watch-images/product-1.jpg",
      },
      {
        id: "2",
        name: "DZ0044-50X",
        description: "QUARTZ STANDARD MEN",
        PKR: "25,605",
        image: "/watch-images/product-2.jpg",
      },
      {
        id: "3",
        name: "Prestige",
        description: "Grey Dial Prestige",
        PKR: "29,650",
        image: "/watch-images/product-3.jpg",
      },
      {
        id: "4",
        name: "Women's Casio",
        description: "wrist watch in mustard smooth leather",
        PKR: "9,500",
        image: "/watch-images/product-4.jpg",
      },
      {
        id: "5",
        name: "T800",
        description: "T800 Ultra Smart Watch",
        PKR: "2,299",
        image: "/watch-images/product-5.jpg",
      },
      {
        id: "6",
        name: "Samsung Galaxy",
        description: "Samsung Galaxy Watch Ultra 47mm",
        PKR: "134,000",
        image: "/watch-images/product-6.jpg",
      },
      {
        id: "7",
        name: "Z78 Ultra Smart",
        description: "Smart Watch Round HD AMOLED",
        PKR: "4,500.00",
        image: "/watch-images/product-7.jpg",
      },
      {
        id: "8",
        name: "LT-W2 Watch",
        description: "LT-W2 HORIZON",
        PKR: "9,499.00",
        image: "/watch-images/product-8.jpg",
      },
      {
        id: "9",
        name: "UNRAION",
        description: "WATCH FOR MEN",
        PKR: "2,040.00",
        image: "/watch-images/product-9.jpg",
      },
    ]
  return (
    <>
        <div className="watch">
          <h2>Watch Collections</h2>
            <div className="watch-grid">
              {watchData.map((watch) => (
                <div className="watch-card" key={watch.id}>
                  <Image src={watch.image} width={200} height={200} alt={watch.name} />
                  <h3>{watch.name}</h3>
                  <p>{watch.description}</p>
                  <p>PKR: {watch.PKR}</p>
                </div>
              ))}
            </div>
        </div>
    </>
  )
}

export default Watches;