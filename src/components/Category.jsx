import React from 'react'
import styled from 'styled-components'
import Service from './Service'
import Section from './Section'
import Extra from './Extra'

const Category = () => {
  return (
    <Wrapper>
        <div className='section'>
            <Section/>
        </div>
        <div className="service">
            <Service/>
        </div>
        <div className="extra">
            <Extra/>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    .section{
        /* height: 40rem; */
        background-color: #e7dfdf;
    }
    .service{
        background-color: aliceblue;
    }

`

export default Category