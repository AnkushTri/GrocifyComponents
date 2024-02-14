import React,{useState} from 'react'
import styled from 'styled-components'
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";

const Section = () => {
     const [showCategories, setShowCategories] = useState(true);
     const [showSet,setShowSet]=useState(true);
     const procuct=["VEGETABLES", "FRUITS","DAIRY PRODUCTS","NON-VEG"]
     const sort=["IN STOCK","OUT OF STOCK", "COST:HIGH TO LOW",
    "COST: LOW TO HIGH", "RATING: HIGH TO LOW","DISTANCE"
    ]

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  const toggleSort = () => {
    setShowSet(!showSet);
  };
  return (
    <Wrapper>
    <div className="cat">
    <div className="catego">
        <button className="caticon">
            <img src="./images/cate.jpg" alt="cate" />
        </button>
        <div className="cat_name">CATEGORY</div>
        <button className='open' onClick={toggleCategories}><FaCaretDown/></button>
    </div>
    <div className='cat_drop' >
      {showCategories && (
        <div className="cat_type">{
            procuct.map((currPro,index)=>{
                return <button onClick={() =>     setShowCategories(!showCategories)
} key={index} className='cat_btn'>
                    <div className="cat_pro">
                    <div className="icon"><FaRegSquare/></div>
                    {currPro}
                    </div>
                    </button>
            })
            }
        
        </div>
      )}
    </div>
    <div className="catego">
        <button className="caticon">
            <img src="./images/cate.jpg" alt="cate" />
        </button>
        <div className="cat_name">SORT BY</div>
        <button className='open' onClick={toggleSort}><FaCaretDown/></button>
    </div>
        <div className='cat_drop' >
      {showSet && (
        <div className="cat_type">{
            sort.map((currPro,index)=>{
                return <button onClick={() => setShow(!showSet)
} key={index} className='cat_btn'>
                    <div className="cat_pro">
                    <div className="icon"><FaRegSquare/></div>
                    {currPro}
                    </div>
                    </button>
            })
            }
        
        </div>
      )}
    </div>
    </div>
    <div className='image'>
        <div className="bgImage">
           <div className="content">
            <p className='title'>Get Healthy And Fresh Groceries At </p>
            <h1>DOORSTEP........</h1>
            <div className="descri">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti odit hic odio minus quisquam ea maxime illum, obcaecati nisi.</p>
            </div>
           </div>
        </div>
        <div className="guarntee">
           <div className="guar">
            <div className="icon">
            <FaTruckArrowRight/>
            </div>
            MONEY BACK
            </div>
           <div className="guar">
            <div className="icon">
            <FaTruckArrowRight/>
            </div>
            <div>FREE DELIVERY</div>
           </div>
           <div className="guar">
            <div className="icon">
            <FaTruckArrowRight/>
            </div>
            SPECIAL SALE
           </div>
        </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  background-color: #fff;

  .cat {
    margin-top: 0.5rem;
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (max-width: 600px) {
      width: 50%;
      gap: 10px;
      margin: 0;
    }
    .catego {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      padding: 0.5rem 0.5rem;
      font-size: 1.3rem;
      button {
        border: none;
        outline: none;
        background-color: #fff;
      }
      /* background-color: #fbebeb; */
      .caticon {
        img {
          width: 1.2rem;
        }
      }
    }
    .cat_type {
      width: 90%;
      margin: 0 auto;
      display: flex;
      gap: 1.2rem;
      flex-direction: column;
      button {
        border: none;
        outline: none;
        background-color: #fff;
      }
      .cat_btn {
        margin: 0.2rem 0;
        .cat_pro {
          display: flex;
          gap: 1.2rem;
        }
      }
    }
  }
  .image {
    width: 100%;
    height: 100%;
    @media screen and (max-width: 600px) {
      width: 50%;
      h1 {
        font-size: 1rem !important;
      }
      .content {
        margin-top: -7rem;
        height: 10rem;
        padding: 0;
        .title {
          font-size: 1rem !important;
        }
        .descri {
          width: 100%;
        }
      }
    }
    .bgImage {
      background-image: url("./images/fruit.jpg");
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 27rem;
      rotate: calc(180deg);
      .content {
        rotate: calc(180deg);
        color: #fff;
        /* width: 40%; */
        padding: 11rem 3rem;
        .title {
          font-size: 1.5rem;
          font-family: "Gorditas";
        }
        h1 {
          font-size: 2.5rem;
          font-family: "Gorditas";
          margin: -1rem 0 -0.5rem 0;
        }
        .descri {
          width: 40%;
        }
      }
    }
    .guarntee {
      height: 6rem;
      background-color: #4be94b;
      display: flex;
      justify-content: space-around;
      color: #fff;
      @media screen and (max-width: 600px) {
        font-size: 1rem;
        flex-direction: column;
        height: auto;
        gap: 1rem;
        .icon {
          font-size: 1rem;
        }
      }
    }
    .guar {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .icon {
      font-size: 1.5rem;
    }
  }
`;

export default Section