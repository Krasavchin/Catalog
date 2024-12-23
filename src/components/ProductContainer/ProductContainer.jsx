import axios from "axios"
import { useState, useEffect } from "react"
import { Pagination } from "../Pagination/Pagination"


import styles from './ProductsContainer.module.css'

export const ProductsContainer = () => {
    const [catalog, setCatalog] = useState([])
    const [page, setPage] = useState(1)
    const [totalElements, setTotalElements] = useState(0)
    
    
    const handleSetPage = (value) => {
        setPage(Number(value))
    }

    async function fetchCatalog(page) {
        const response = await axios.get(`http://localhost:8081/api/v1/product/pagination?page=${page - 1}&size=16`)
        setCatalog(response.data.content)
        setTotalElements(response.data.totalElements)
    }

    useEffect(() => {
        fetchCatalog(page)
    }, [page])

    const ShowProducts = () => {
        return(
            <div className={styles.products_container}>
                {catalog.map(product => {
                    return (
                        <article key={product.id} className={styles.single_product_container}>
                            <div>
                                <img src={product.shortDescription} className={styles.product_image}></img>
                                <ul className={styles.product_description}>
                                    <li className={styles.product_description_name}>{product.displayName} </li>
                                    <li className={styles.product_description_price}>{product.price} ₽</li>
                                    <li className={styles.product_description_brand}>{product.brand.displayName}</li>
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </div>
        )
    }

    const ProductsShown = () => {
        if (page * 16 < totalElements) {
            return (
                <p className={styles.products_amount}>
                    Показаны {page * 16 - 15} - {page * 16} из {totalElements} товаров
                </p>
            )
        }
        else {
            return (
                <p className={styles.products_amount}>
                    показаны {page * 16 - 15} - {totalElements} из {totalElements} товаров
                </p>
            )
        }
    }


    return (
        <>
            <ShowProducts />
            <ProductsShown/>
            <Pagination 
                totalPages = {Math.ceil(totalElements / 16)}
                onSetActiveValue = {handleSetPage}
            />
            
        </>
    )
}
