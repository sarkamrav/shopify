import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import ProductCardItem from './ProductCardItem';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const ProductItemWrapper = styled.div`
display: grid;
    padding: 20px;
    justify-content: space-between;
    grid-gap: 2%;
    grid-template-columns: repeat(auto-fill,minmax(21%,1fr));
`

function Home() {
const [productData, setProductData] = useState([])
    useEffect(()=>{
        axios('https://fakestoreapi.com/products').then(response=>{
            console.log(response.data)
            setProductData(response.data)
        })
    })
  return (

    <div>
        <h1>Home page</h1>
        <ProductItemWrapper>
        {productData.map(data=>{
            return (
                <ProductCardItem productdata = {data}/>
            )
        })}
        </ProductItemWrapper>
       
    </div>
  )
}

export default Home