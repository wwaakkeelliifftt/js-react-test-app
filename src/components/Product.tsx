import {IProduct} from "../data/models";
import {useState} from "react";

interface ProductProps {
  product: IProduct
}

// export function Product(props: ProductProps) {
export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2 px-3 border hover:text-gray-700', btnBgClassName]
  const fontBg = {
    "LightBlue": "#c4d6e0",
    "LightGray": "#ececec"
  }

    return (
      <div className='border-2 py-2 px-4 flex flex-col rounded items-center mb-2 '>
        <img src={product.image} className="w-1/6" alt={product.title}/>
        <p className="px-3">{ product.title }</p>
        <p className="font-bold">{ product.price }$</ p>
        <button
            className={btnClasses.join(' ')}
            onClick={ () => setDetails(!details) } >
          { details ? 'Hide description' : 'Show description' }
        </button>
        {details && <div className='m-2 border-4 flex' style={{background: fontBg.LightGray}}>
          <p className="font-light">{ product.description }</p>
          <hr className='my-1 ' />
          <p className='text-center' style={{ background: fontBg.LightBlue }}>
            Rate: <span style={{ fontWeight: 'bold' }}>{ product.rating?.rate }</span>
          </p>
        </div>}
      </div>
  )
}