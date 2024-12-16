import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [catalog, setCatalog] = useState([])
  const [page, setPage] = useState(1)

  let nameClass = ''

  async function fetchCatalog() {
    const response = await axios.get('http://localhost:8081/api/v1/product')
    setCatalog(response.data)
  }

  useEffect(() => {
    fetchCatalog()
  }, [])

  const ProductsPages = () =>{
    let Pages = []
    for(let i = 1; i <= (catalog.length / 24) + 1; i++){
      Pages.push(i)
    }
    return (
      <>
        {Pages.map(pageNum => {
          return (
            <button onClick={() => setPage(page => pageNum)} key={pageNum}>
              {pageNum}
            </button>
          )
        })}
      </>
    )
  }

  const ProductsContainer = () =>{
    return (
    <>
      {catalog.slice((page * 24) - 24, page * 24).map(product => {
        switch (product.id % 4){
          case 2: nameClass = 'single-product-container product-list_first'; break;
          case 3: nameClass = 'single-product-container product-list_second'; break;
          case 0: nameClass = 'single-product-container product-list_third'; break;
          case 1: nameClass = 'single-product-container product-list_fourth'; break;
        }
        return (
        <article key={product.id} className={nameClass}>
          <div>
            <img src={product.shortDescription} className="product-image"/>
            <ul className="product-description">
              <li className="product-description-name">{product.displayName} </li>
              <li className="product-description-price">{product.price} ₽</li>
              <li className="product-description-brand">{product.brand.displayName}</li>
            </ul>
          </div>
        </article>
        )
      }
      )}
    </>
  )}

  return (
    <>
      <ProductsPages/>
      <ProductsContainer/>
    </>
  );
}

export default App;
