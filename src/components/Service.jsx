import React from "react";
import styled from "styled-components";
import FormatPrice from "./FormatPrice"

const Service = () => {
  const productData = [
    {
      imageUrl: "./images/litchi.jpg",
      title: "The Target",
      description: "Sector 22C, Chandigarh (Electronics)",
      delivery: "Delivery by Sun, 12 Feb",
      price: "1100000",
      open: "Open now - 11noon-9:30pm",
      star: "* * * * *",
    },
    {
      imageUrl: "./images/apple.png",
      title: "The Wonderard",
      description: "Sector 22C, Chandigarh (Grocery)",
      delivery: "Delivery by May, 15 Feb",
      price: "1200000",
      open: "Open now - 11noon-9:30pm",
    },
    {
      imageUrl: "./images/chili.jpg",
      title: "Fashion Bazar",
      description: "Sector 22C, Chandigarh (Electronics)",
      delivery: "Delivery by Tue, 16 Feb",
      price: "800000",
      open: "Open now - 11noon-9:30pm",
    },

    {
      imageUrl: "./images/litchi.jpg",
      title: "The Target",
      description: "Sector 22C, Chandigarh (Electronics)",
      delivery: "Delivery by Sun, 12 Feb",
      price: "1100000",
      open: "Open now - 11noon-9:30pm",
      star: "* * * * *",
    },
    {
      imageUrl: "./images/apple.png",
      title: "The Wonderard",
      description: "Sector 22C, Chandigarh (Grocery)",
      delivery: "Delivery by May, 15 Feb",
      price: "1200000",
      open: "Open now - 11noon-9:30pm",
    },
    {
      imageUrl: "./images/chili.jpg",
      title: "Fashion Bazar",
      description: "Sector 22C, Chandigarh (Electronics)",
      delivery: "Delivery by Tue, 16 Feb",
      price: "800000",
      open: "Open now - 11noon-9:30pm",
    },   
    {
      imageUrl: "./images/litchi.jpg",
      title: "The Target",
      description: "Sector 22C, Chandigarh (Electronics)",
      delivery: "Delivery by Sun, 12 Feb",
      price: "1100000",
      open: "Open now - 11noon-9:30pm",
      star: "* * * * *",
    },
    {
      imageUrl: "./images/apple.png",
      title: "The Wonderard",
      description: "Sector 22C, Chandigarh (Grocery)",
      delivery: "Delivery by May, 15 Feb",
      price: "1200000",
      open: "Open now - 11noon-9:30pm",
    },
    {
      imageUrl: "./images/chili.jpg",
      title: "Fashion Bazar",
      description: "Sector 22C, Chandigarh (Electronics)",
      delivery: "Delivery by Tue, 16 Feb",
      price: "800000",
      open: "Open now - 11noon-9:30pm",
    },

    {
      imageUrl: "./images/litchi.jpg",
      title: "The Target",
      description: "Sector 22C, Chandigarh (Electronics)",
      delivery: "Delivery by Sun, 12 Feb",
      price: "1100000",
      open: "Open now - 11noon-9:30pm",
      star: "* * * * *",
    },
    {
      imageUrl: "./images/apple.png",
      title: "The Wonderard",
      description: "Sector 22C, Chandigarh (Grocery)",
      delivery: "Delivery by May, 15 Feb",
      price: "1200000",
      open: "Open now - 11noon-9:30pm",
    },
    {
      imageUrl: "./images/chili.jpg",
      title: "Fashion Bazar",
      description: "Sector 22C, Chandigarh (Electronics)",
      delivery: "Delivery by Tue, 16 Feb",
      price: "800000",
      open: "Open now - 11noon-9:30pm",
    },   
  ];

  return (
    <Wrapper>
      <div className="slidebar">
        <div className="deal_day">
          <div className="header">Deal of day</div>
          <div className="sec">
            <div class="card">
              <img
                src="./images/govi.png"
                alt="Product Image"
                className="card-image"
              />
              <h2 className="slide-title">Govi</h2>

              <div className="card-content">
                <p className="card-price">
                  <FormatPrice price={100000} />
                </p>
                <p className="card-price">
                  <del>
                    <FormatPrice price={150000} />
                  </del>
                </p>
              </div>
              <div className="star">* * * * *</div>
              <div className="foot">
                <button className="addtocart">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="deal_day">
          <div className="header">TESTIMONIAL</div>
          <div className="aside">
            <div className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              tempore consequuntur pariatur amet, perferendis vel veniam eveniet
              delectus est perspiciatis maxime temporibus facilis corrupti?
              Lorem ipsum dolor sit amet. .
            </div>
            <div className="profile">
              <img src="./images/batchs.jpg" alt="user" />
              <div className="user">
                HENRICK <br />
                Customer
              </div>
            </div>
            <div className="star">* * * * *</div>
          </div>
        </div>
        <div className="deal_day">
          <div className="header">TESTIMONIAL</div>
          <div className="aside">
            <div className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              tempore consequuntur pariatur amet, perferendis vel veniam eveniet
              delectus est perspiciatis maxime temporibus facilis corrupti?
              Lorem ipsum dolor sit amet. .
            </div>
            <div className="profile">
              <img src="./images/batchs.jpg" alt="user" />
              <div className="user">
                HENRICK <br />
                Customer
              </div>
            </div>
            <div className="star">* * * * *</div>
          </div>
        </div>
      </div>
      <div className="main_service">
        <div className="sec1">
          <div>Featured</div>
          <div>Latest</div>
          <div>BestSeller</div>
        </div>
        <div className="sec2">
          {productData.map((currElem) => {
            return (
              <div class="card" key={currElem.title}>
                <img
                  src={currElem.imageUrl}
                  alt="Product Image"
                  class="card-image"
                />
                <div class="card-content">
                  <h2 class="card-title">{currElem.title}</h2>
                  <p class="card-price">
                    <FormatPrice price={currElem.price} />
                  </p>
                </div>
                <div className="star">{currElem.star}</div>
                <div className="foot">
                  <button className="like">Buy Now</button>
                  <button className="addtocart">Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 95vw;
    margin: 0 auto;
  }
  .slidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 25%;
    background-color: #fef8f8;
    @media (max-width: 600px) {
      /* flex-direction: row; */
      width: 95vw;
      margin: 2rem 2rem;
    }
    .deal_day {
      border: 2px solid green;
      height: 330px;
      @media (max-width: 600px) {
        height: 18rem;
        font-size: 1rem;
      }
    }
    .header {
      padding: 1rem;
      text-align: center;
      background-color: #28b642;
      color: #fff;
    }
    .card-image {
      width: 80%;
      height: 40%;
      margin: 1.2rem auto;
      margin-bottom: 2dvbrem;
      object-fit: cover;
      @media (max-width: 600px) {
        width: 50%;
        height: 4.5rem;
      }
    }
    .slide-title {
      margin: 0 auto 2rem auto;
    }
    .card {
      height: 100%;
      border: none;
    }
    .card-price {
      font-size: 1.2rem;
    }
    .addtocart {
      margin: 0rem auto 1rem auto;
    }
    .star {
      font-size: 1.5rem;
      margin-top: 2rem;
    }
    .aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      .star {
        margin-top: 0.5rem;
        font-size: 1.5rem;
      }
      .para {
        font-size: 14px;
        padding: 0.5rem 1rem;
        text-align: justify;
      }
      .profile {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        img {
          width: 80px;
          height: 7%0px;
          border-radius: 50%;
        }
        .user {
          font-size: 16px;
        }
      }
    }
    .star {
      font-size: 1.5rem;
    }
  }
  .main_service {
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
  .sec1 {
    width: 100%;
    margin: 0 auto;
    border: 2px solid green;
    display: flex;
    justify-content: space-around;
    /* gap:3rem; */
    align-items: center;
    padding: 1rem 0;
    text-transform: capitalize;
    font-size: 1.4rem;
    color: green;
    @media (max-width: 600px) {
      width: 100vw;
      font-size: 1rem;
      padding:5px 0;
    }
  }
  .sec2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    grid-row-gap: 3rem;
    margin-top: 1rem;
    @media (max-width: 600px) {
      width: 90vw;
    }
  }
  .card {
    width: 230px;
    height: 211px;
    border: 1px solid #6e6969;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px; /* Adjust margin as needed */
  }

  .card-image {
    width: 133px;
    height: 100px;
    margin: 15px auto;
    margin-bottom: 2dvbrem;
    object-fit: cover;
  }

  .card-content {
    /* padding: 10px; */
    margin: -2rem 1rem;
    display: flex;
    justify-content: space-between;
  }

  .card-title {
    margin: 0;
    font-size: 18px;
  }

  .card-price {
    margin: 5px 0;
    font-size: 16px;
  }
  .star {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 1.3rem;
    color: orange;
  }

  .foot {
    display: flex;
    /* gap:1rem; */
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  .addtocart {
    padding: 5px 8px;
    background-color: #28b642;
    margin-left: 1rem;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .like {
    padding: 5px 8px;
    background-color: #28b642;
    border: none;

    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .like-button:hover {
    background-color: #0056b3;
  }
`;

export default Service;
