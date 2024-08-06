import Product from "../components/Product"
import { useState, useEffect } from "react";
import Spinner from '../components/Spinner'

const Home = () => {
  const url = "https://fakestoreapi.com/products"
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setCards(data);
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {
        loading ? (<Spinner />) : (
          (
            cards.length > 0 ? (
              <div className="flex flex-col gap-3">
                <div className="w-8/12 mx-auto bg-slate-800 rounded-md py-1 mt-[80px] ">
                  <p className="text-white text-xl text-center">Products</p>
                </div>
                <div className=" w-8/12 mx-auto grid grid-cols-4 gap-5 ">
                  {
                    cards.map((item) => {
                      return (
                        <Product item={item} key={item.id}></Product>
                      )
                    })
                  }





                </div>
              </div>
            ) : (
              <div>No Data Found</div>
            )



          )
        )
      }
    </div>

  )
}

export default Home