import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars,reviews}) => {
  {/* Alternate ways to print stars*/}
  const tempStars = Array.from({length:5},(_,index)=>{
    const number = index+0.5;
    return (
      <span key={index}>
        {
          stars >=index+1 ? <BsStarFill/>:stars>=number?<BsStarHalf/>:<BsStar/> 
        }
      </span>
    )
  });
  const alterstar = (stars)=>{
    let result = [];
    for (let i = 0; i < 5; i++) {
      let star= stars-i;
      result.push(<span key={i}>
        {
          star >=1 ? <BsStarFill/>:star>=0.5?<BsStarHalf/>:<BsStar/> 
        }
      </span>);
    } 
    return result;
  }
  
  return <Wrapper>
    <div className='stars'>
      {alterstar(stars)} {/**Alternate would be {tempStars} */}
    </div>
    <p className='p'>({reviews} customer reviews)</p>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
