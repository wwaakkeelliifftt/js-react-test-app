import {Product as Product_startFromUpperCase} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";
import {useContext} from "react";
import {IProduct} from "./data/models";
import {ModalContext} from "./context/ModalContext";

function App() {
  const { products, error, loading, addProduct } = useProducts()

  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
   <div className="container mx-auto max-w-2xl pt-5">
     { loading && <Loader/> }
     { error && <ErrorMessage error={error}/>}

     { products.map(product => <Product_startFromUpperCase product={ product } key={ product.id } />) }

     {modal && <Modal  title="Create new product" onClose={() => close()}>
       <CreateProduct onCreate={createHandler}/>
     </Modal> }

     <button
         className="fixed bottom-5 right-5 rounded-full bg-teal-200 text-pink-500 p-3 "
         onClick={() => open()}
     >+ add custom product
     </button>
   </div>
  )
}

export default App;
