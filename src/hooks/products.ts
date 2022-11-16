import {useEffect, useState} from "react";
import {IProduct} from "../data/models";
import axios, {AxiosError} from "axios";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: IProduct) {
    setProducts(prevState => [...prevState, product])
  }

  async function fetchProducts() {
    try {
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?_limit=4')
      setProducts(response.data)
      setTimeout(() => setLoading(false), 666)
    } catch (e: unknown) {
      const error = e as AxiosError
      setError(error.message)
      setLoading(false)
    }

  }

  useEffect(() => {
    console.log('effect_invoke')
    fetchProducts()
  }, [])

  return { products, error, loading, addProduct }
}