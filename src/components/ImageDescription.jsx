import React from 'react';
import styled from 'styled-components';
import FormatPrice from './FormatPrice';

const ImageDescription = ({ imageUrl,title, description,delivery,open, price }) => {
  return (
    <>
    <Wrapper>
    <Container>
      <Image src={imageUrl} alt={description} />
      <Description>
      <div className="title">
        {title}
      </div>
      <div className="description">
        {description}
      </div>
      <div className="description">
        {delivery}
      </div>
      <div className="open">
        {open}
      </div>
      </Description>
      <Price>
        <div className="price">  <FormatPrice price={price}/> 
         <del>
             <FormatPrice price={Number(price) + 250000} />
        </del>
        </div>
        
        <div className="distance">
            1.2 k.m
        </div>
        <div className="btn">
            <button>Buy Now</button>
        </div>
      </Price>
    </Container>
    </Wrapper>
    </>
  );
};
export default ImageDescription;
const Wrapper=styled.div`
border: 2px solid grey;
margin:1rem 0;

 @media (max-width:600px) {
    width: 90vw;
 }
`
const Container = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  width: 35%;
  height: 7rem;
  border-radius: 8px;
  margin-bottom: 10px;
  &:hover{
    scale: 1.1;
  }
  @media(max-width:600px){
    width: 30%;
    height: 8rem;
  }
`;
const Description = styled.div`
  font-size: 16px;
  margin:0 15px;
  display: flex;
  flex-direction: column;
  gap:1rem;
  .title{
    font-size: 1.2rem;
    font-weight: 800;
  }
  .description{
    margin:-7px 0;
  }
  .open{
    color:green;
  }
   @media(max-width:600px){
   font-size: 14px;
   margin: 0 10px;
   .open{
    font-size: 12px;
  }
  }
`;
const Price = styled.div`
display: flex;
flex-direction: column;
gap:2rem;
align-items: center;
  .price{
    color: #000306;
    font-size: 18px;
    font-weight: bold;
  }
  del{
    color:black;
    margin-left:7px;
    font-size: 14px;
    font-weight: 300;
  }
  .distance{
    margin-top: -2rem;
    font-weight: 550;
  }

  .btn button{
     padding: 0.5rem 1rem;
     border-radius: 1rem;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
    @media(max-width:600px){
   font-size: 14px;
  }
`;
