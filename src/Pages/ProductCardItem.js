import React from 'react'
import StarRatings from '../Pages/StarRatings'
import styled from 'styled-components'

const ProductItem = styled.div`
display:flex;
flex-direction: column;
height: 400px;

`
const ProdutImage = styled.div`
width:100%;
height: 100%;
background-size: cover;
background-position: initial;
background-image: url(${props => props.img});
`
const ProdutImageWrapper = styled.div`
width:100%;
height: 200px;

`
const ProdutDescription = styled.div`
width:100%;
height: 50%;
`
const Description = styled.div`
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
`

function ProductCardItem({productdata}) {
    const {description,image,price,rating,title} = productdata;
  return (
    <ProductItem >
        <ProdutImageWrapper>
        <ProdutImage img ={image} />
        </ProdutImageWrapper>

        <ProdutDescription>
            <p>{title}</p>
            {/* <Description>{description}</Description> */}
            <p>Rs. {price}</p>
            <p>
              <StarRatings activeStars ={rating} />
         
            </p>
  
            
        </ProdutDescription>
  
    </ProductItem>
  )
}

export default ProductCardItem
