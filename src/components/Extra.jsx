import React from 'react'
import styled from 'styled-components'
const Extra = () => {
    const productData = [
      {
        imageUrl: "./images/shop.jpg",
        title: "Fashion Bazar",
        description: "Sector 22C, Chandigarh (Electronics)",
        delivery: "Delivery by Tue, 16 Feb",
        price: "800000",
        open: "Open now - 11noon-9:30pm",
        star: "* * * * *",
        location: "Chandigarh",
        distance: "1.2 km",
      },
      {
        imageUrl: "./images/shop.jpg",
        title: "The Grocery Store",
        description: "Sector 22C, Chandigarh (Electronics)",
        delivery: "Delivery by Sun, 12 Feb",
        price: "1100000",
        open: "Open now - 11noon-9:30pm",
        star: "* * * * *",
        location: "Chandigarh",
        distance: "2 km",
      },
      {
        imageUrl: "./images/shop.jpg",
        title: "The Wonderard",
        description: "Sector 22C, Chandigarh (Grocery)",
        delivery: "Delivery by May, 15 Feb",
        price: "1200000",
        open: "Open now - 11noon-9:30pm",
        star: "* * * * *",
        location: "Chandigarh",
        distance: "1.5 km",
      },
    ];
  return (
    <Wrapper>
      <div className="header">STORES</div>
<Stores>
 {productData.map((currElem,index)=>{
 return (
   <CardWrapper  key={index}>
     <Image src={currElem.imageUrl} alt="Product Image" />
     <Content>
       <Row>
         <Name>{currElem.title}</Name>
         <Distance>{currElem.distance}</Distance>
       </Row>
       <Row>
         <Location>{currElem.location}</Location>
       </Row>
       <Row>
         <Stars>{currElem.star}</Stars>
       </Row>
     </Content>
   </CardWrapper>
 );
        })}
       
      </Stores>
    </Wrapper>
  );
}

const Wrapper = styled.div`
margin:2rem 0;
  .header {
    border: 1px solid green;
    font-size: 25px;
    text-align: center;
   color: #28b642;
   font-weight: 600;
   padding: 1rem 0;
  }
`;
const Stores = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* gap: 1rem; */
  width:95%;
  @media screen and (max-width:600px) {
    flex-direction: column;
    gap:1.5rem;
  }
`;
const CardWrapper = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid #ccc;
  border-radius: 8px;
  /* overflow: hidden; */
 
`;

const Image = styled.img`
width: 100%;
  height: 70%;
  object-fit: cover;
  
`;

const Content = styled.div`
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Distance = styled.div`
  font-size: 16px;
`;
const Location = styled.div`
  font-size: 16px;
`;
const Stars=styled.div`
    color: orange;
    font-size: 1.5rem;
`
    


export default Extra