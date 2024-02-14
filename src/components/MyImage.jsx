import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
    // console.log(mainImage)
    console.log(imgs[0])

    return (
        <Wrapper>
            <div className="grid grid-four-column">
                {imgs.map((curElm, index) => {
                    return (
                        <figure key={index}>
                            <img
                                src={curElm.url}
                                alt={curElm.filename}
                                className="box-image--style"
                                key={index}
                                onClick={() => setMainImage(curElm)}
                            />
                        </figure>
                    );
                })}
            </div>
            {/* 2nd column  */}

            <div className="main-screen">
                <img src={mainImage.url} alt={mainImage.filename} />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  border: 2px solid grey;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      padding: 2px;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      border: 2px solid grey;
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width:80%;
      height: 80%;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width:600px) {
    width: 90vw;
    display: flex;
    /* flex-direction: column; */
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;