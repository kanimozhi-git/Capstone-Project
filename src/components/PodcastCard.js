import React from 'react';
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import {IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlayIcon = styled.div`
    padding : 10px;
    border-radius : 50%;
    z-index : 100;
    display : flex;
    align-items : center;
    background : #9000ff !important;
    color : white !important;
    backdrop-filter : blur(4px);
    -webkit-backdrop-filter : blur($px);
    positon : absolute !important;
    top : 45%;
    right : 10%;
    display : none;
    transition : all 0.4s ease-in-out;
    box-shadow : 0 0 16px 4px #9000ff50 !important;
`;


const Card = styled.div`
    position : relative;
    text-decoration : none;
    background-color : ${({ theme }) => theme.card };
    max-width : 220px;
    height : 280px;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : center;
    padding : 16px;
    border-radius : 6px;
    box-shadow : 0 0 16px 0 rgba(0, 0, 0, 0.1);
    &:hover {
        cursor : pointer;
        transform : translateY(-8)px;
        transition : all 0.4s ease-in-out;
        box-shadow : 0 0 18px 0 rgba(0, 0, 0, 0.3);
        filter : brightness(1.3);
    } 

    &: hover ${PlayIcon} {
        display : flex;
    }


`;

const Top = styled.div`
display : flex;
justify-content : center;
align-items : center;
height : 150px;
position : relative;

`;

const Favorite = styled(IconButton)`
color : white;
top : 8px;
right : 6px;
padding : 6px !important;
border-radius : 50%;
z-index : 100;
dispaly : flex;
align-items : center;
background : ${({theme}) => theme.text_secondary + 90};
color : white !important;
position : absolute !important;
backdrop-filter: blur(4px);
box-shadow : 0 0 16px 6px #222423 !important;
`;

const CardImage = styled.img`
    object-fit : cover;
    width : 220px;
    height : 140px;
    border-radius : 6px;
    box-shadow : 0 4px 30px rgba(0, 0, 0, 0.3);
    &:hover {
        box-shadow : 0 4px 30px rgba(0, 0, 0, 0.4);
    }

`;

const CardInformation = styled.div`
    display : flex;
    align-items : flex-end;
    font-weight : 450;
    padding : 14px 0px 0px 0px;
    width : 100%;
`;

const MainInfo = styled.div`
    display : flex;
    width : 100%;
    flex-direction : column;
    justify-content : flex-start;
    gap : 4px;

`;

const Title = styled.div`
    overflow : hidden;
    display : -webkit-box;
    max-width : 100%;
    -webkit-line-clamp : 2;
    -webkit-box-orient : vertical;
    text-overflow : ellipsis;
    color : ${({ theme}) => theme.text_primary};
    
`;

const Description = styled.div`
    overflow : hidden;
    display : -webkit-box;
    max-width : 100%;
    -webkit-line-clamp : 2;
    -webkit-box-orient : vertical;
    text-overflow : ellipsis;
    color : ${({ theme}) => theme.text_secondary};
    font-size : 12px;
    

`;
const CreatersInfo = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    gap : 8px;
    margin-top : 6px;
`;

const Creator = styled.div`
    display : flex;
    gap : 4px;
    align-items : center;

`;

const CreatorName= styled.div`
    font-size : 12px;
    overflow : hidden;
    white-space : nowrap;
    text-overflow : ellipsis;
    color : ${({ theme}) => theme.text_secondary};
`;

const Views = styled.div`
    font-size : 10px;
    color : ${({ theme}) => theme.text_secondary};
    width : max-content;
`;




const PodcastCard = () => {
  return (
    <Card>
       <div>
       <Top>
            <Favorite>

            <FavoriteIcon  style ={{width :"16px" , height : "16px" }}/>
            
            </Favorite>
           
            <CardImage src = "./images/imgg1.png"/>
             </Top>
        <CardInformation>
            <MainInfo>
                <Title> The Tim Ferriss Show</Title>
                <Description>
                    {""}
                    Tim Ferriss has been listed as one of Fast Company's “Most Innovative Business People” and one of Fortune’s “40 under 40.”
                    He is an early-stage technology investor/advisor (Uber, Facebook, Shopify, Duolingo, Alibaba, and 50+ others) and the 
                    author of five #1 New York Times and Wall Street Journal bestsellers, including The 4-Hour Workweek and 
                    Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers.
                </Description>
                <CreatersInfo>
                    <Creator>
                        <Avatar style = {{ widtth : "26px", height : "26px" }} > K </Avatar>
                        <CreatorName>Kanimozhi</CreatorName>
                    </Creator>
                    <Views>12k Views</Views>
                </CreatersInfo>
            </MainInfo>
        </CardInformation>

       </div>
       <PlayIcon>
        { "video" ==="video" ? (
            <PlayArrowIcon style = {{ width: "28px", height : "28px"}} />
        ) : (
            <HeadphonesIcon style = {{ width: "28px", height : "28px"}} />

        ) }
       </PlayIcon>

    </Card>
  )
}

export default PodcastCard;