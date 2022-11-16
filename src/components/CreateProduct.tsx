import React, {ChangeEventHandler, useState} from "react";
import {IProduct} from "../data/models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {

  const productData: IProduct = {
    title: '',
    price: 13.13,
    description: 'kakakya-to shlyapa',
    image: 'https://like-a.ru/wp-content/uploads/2015/04/g4xarj9a.jpg',
    category: 'huilo',
    rating: { count: 66, rate: 0 }
  }

  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (value.trim().length === 0) {
      setError('Please enter valid title')
      return
    }

    productData.title = value
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
    onCreate(response.data)
  }

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
      <form onSubmit={submitHandler}>
        <input
            type="text"
            className="border py-2 px-4 mb-2 w-full"
            placeholder="Enter product title..."
            value={value}
            onChange={(changeHandler as unknown) as ChangeEventHandler<HTMLInputElement>}
        />
        {error && <ErrorMessage error={error} />}
        <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-green-700">Create</button>
      </form>
  )
}