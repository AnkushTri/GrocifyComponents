 
import React, { useEffect, useState } from 'react';
import ImageDescription from './ImageDescription';
import styled from 'styled-components';
import MyImage from './MyImage';
import Star from './Star';
import FormatPrice from './FormatPrice';

const Dis = () => {
  const productData=[
    {
        imageUrl:"./images/batchs.jpg",
        title:"The Target",
        description:"Sector 22C, Chandigarh (Electronics)",
        delivery:"Delivery by Sun, 12 Feb",
        price:"1100000",
        open:"Open now - 11noon-9:30pm"
    },
    {
        imageUrl:"./images/batchs.jpg",
        title:"The Wonderard",
        description:"Sector 22C, Chandigarh (Grocery)",
        delivery:"Delivery by May, 15 Feb",
        price:"1200000",
        open:"Open now - 11noon-9:30pm"
    },
    {
        imageUrl:"./images/batchs.jpg",
        title:"Fashion Bazar",
        description:"Sector 22C, Chandigarh (Electronics)",
        delivery:"Delivery by Tue, 16 Feb",
        price:"800000",
        open:"Open now - 11noon-9:30pm"
    },
  ]
  const [data,setData]=useState([{}])
  const API = "https://api.pujakaitem.com/api/products/thapaserialnoa";
  const getImage=async()=>{
    try{
        const res=await fetch(API)
        const data= await res.json();
        setData(data)

    }catch(err){
        console.log("error while calling api",err)
    }
  }
  useEffect(()=>{
    // console.log(image)
    getImage();
  },[])

  const {name,image,stars,reviews,price}=data

  return (
    <Wrapper>
    {/* 1st column of Images */}
    <div className='image'>
            <MyImage imgs={image} />
        <div className="product-data">
              <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
        </div>
            <p className="product-data-price">
              <FormatPrice price={price} />
            </p>
            <div className='button'>
                <div className="btn">
                <button>Buy Now</button>
                </div>
                <div className="btn">
                <button>Add to Cart</button>

                </div>
            </div>
    </div>

    {/* 2nd column of store available */}
    <div className='product'>
    <div className="store">Nearest Stores</div>
    {
      productData.map((product)=>{
        return <ImageDescription
        key={product}
        imageUrl={product.imageUrl}
        title={product.title}
        description={product.description}
        delivery={product.delivery}
        price={product.price}
        open={product.open}
      />
      })
    }

    </div>
    </Wrapper>
  );
};

const Wrapper=styled.div`
    display: flex;
    gap:3rem;
    margin-top:2rem;
    overflow-y: scroll;

@media(max-width:600px){
    flex-direction: column;
    gap:3rem;
    .store{
        width: 90vw;
    }
    .button{
        width: 90vw !important;
    }
}
.store{
    border: 2px solid grey;
    font-size: 1.5rem;
    font-weight:bold;
}
    .image{
        width: 50%;
        .button{
            width:100%;
            margin-top: 0.8rem;
            display: flex;
            justify-content:space-between;
            button{
                background-color: green;
                color: #fff;
                padding: 0.5rem 1rem;
                border-radius: 1rem;
                cursor: pointer;
                border: none;
                &:hover{
                    scale: calc(1.1);
                }
            }
        }
    }
    .product{
    width: 50%;
    }
    .product-data{

    }
    .product-data-price{
        font-size: 1.2rem;
        margin: 0.3rem 0;
    }
`

export default Dis