import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
height:50px;
display:flex;
align-items:center;
background-color:grey`;

function Header() {
 
   
  return (
    <HeaderWrapper>
       Header
    </HeaderWrapper>
  )
}

export default Header
