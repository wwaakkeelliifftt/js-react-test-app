import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from "./pages/ProductsPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/navigation";

function App() {
  return (
      <>
        <Navigation/>
        <Routes>
          <Route path="/" element={<ProductsPage/>} />
          <Route path="/wat" element={<AboutPage/>} />
        </Routes>
      </>
  )
}

export default App;
