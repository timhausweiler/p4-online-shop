import { useEffect, useState } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import { getAllProducts, deleteProduct, updateProduct } from '../services/products'
import { createProduct } from '../services/products'

import ProductDetail from './ProductDetail'
import Products from './Products'
import ProductCreate from './ProductCreate'
import ProductEdit from './ProductEdit'

export default function ProductsContainer(props) {

  const [products, setProducts] = useState([])
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts()
      setProducts(products)
    }
    fetchProducts()
  }, [toggle])

  const handleDelete = async (id) => {
    await deleteProduct(id)
    setToggle(prevToggle => !prevToggle)
    navigate('/products')
  }
  
  const handleCreate = async (formData) => {
    await createProduct(formData)
    setToggle(prevToggle => !prevToggle) 
    navigate("/products")
}

const handleEdit = async (id, formData) => {
  await updateProduct(id, formData)
  setToggle(prevToggle => !prevToggle) 
  navigate(`/products/${id}`)
}
  
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <Products
            products={products}
            currentUser={props.currentUser}
          />
        } />
        <Route path='/:id' element={
          <ProductDetail
            products={products}
            handleDelete={handleDelete}
            currentUser={props.currentUser}
          />
        } />
        <Route path='/create' element={<ProductCreate
          handleCreate={handleCreate}/>} />
        <Route path='/:id/edit' element={<ProductEdit
          products={products}
         handleEdit={handleEdit}
        />} />
      </Routes>
    </div>
  )
}
