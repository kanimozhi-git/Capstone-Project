import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import PodcastCard from '../components/PodcastCard';

const DashboardMain = styled.div`
    padding : 20px 30px;
    padding-bottom : 200px;
    height : 100%;
    overflow-x : 
    overflow-y : scroll;
    display: flex;
    flex-direction : column;
    gap : 20px;
    @media (max-width : 768px) {
        padding : 6px 10px;
      }
    
`;
const FilterContainer = styled.div`
display : flex;
flex-direction : column;
background-color : ${({ theme }) => theme.bg };
border-radius : 10px;
padding : 20px 30px;
`;

const Topic = styled.div`
color : ${({ theme }) => theme.text_primary};
font-size : 24px;
font-weight : 500;
display : flex;
justify-content : space-between;
align-items : center;
@media (max-width : 768px) {
    font-size : 18px;
  }

`;

const Span = styled.div`
color : ${({ theme }) => theme.primary};
font-size : 16px;
font-weight : 400;
@media (max-width : 768px) {
    font-size : 14px;
  }
`;
const Podcasts = styled.div`
    display : flex;
    flexwrap : wrap;
    gap : 14px;
    padding : 18px 6px;
    @media (max-width : 550px) {
        justify-content : center;

      }
 `;



const Dashboard = () => {
  return (
    <DashboardMain>
        <FilterContainer>
            <Topic>
                Most Popular
                <Link to={`/showpodcasts/most popular`} 
                style ={{textDecoration : "none"}} >
                <Span> 
                    Show All
                </Span>
                </Link>
            </Topic>
            <Podcasts>
                Hi
            </Podcasts>
        </FilterContainer>



        <FilterContainer>
            <Topic>
                Melody Songs
                <Link to={`/showpodcasts/melody songs`} 
                style = {{textDecoration : "none"}} >
                <Span> 
                    Show All
                </Span>
                </Link>
            </Topic>
            <Podcasts>
                Hi
            </Podcasts>
        </FilterContainer>

    </DashboardMain>
  )
}

export default Dashboard