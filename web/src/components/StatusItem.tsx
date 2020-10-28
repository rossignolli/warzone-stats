// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import styled from 'styled-components';

const Item = styled.div`
margin: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;

h3{
  margin-bottom: 3px;
}

div{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-content: center;
  height: 86px;
  padding: 5%;
  width: 86px;
  background: #FFB100;
  border-radius: 10px;
}

`


const ItemContainer = styled.div`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
align-content: center;
width: 100%;
flex-direction: row;
padding: 20px;
width: 100%;
flex-wrap: wrap;

h2, h3{
  color: #FFFF;
}


`

// IMPLMENTAR A SECTION DE OTHERS STATS


type StatsProps = {
  level: number;
  data: {
    contracts: number;
    deaths: number;
    downs: number;
    gamesPlayed: number;
    kdRatio: number;
    kills: number;
    revives: number;
    scorePerMinute: number;
    timePlayed: number;
    tokens: number;
    topFive: number;
    topTen: number;
    topTwentyFive: number;
    wins: number;
  },
}


 export default function StatusItem({ data, level }: StatsProps){
    return (
      <ItemContainer>
        <Item>
        <h3> DEATHS </h3>
        <div className="container-yellow">
        <h2> {data.deaths} </h2>
        </div>
        </Item>
        <Item>
        <h3> DOWNS </h3>
        <div className="container-yellow">
        <h2> {data.downs} </h2>
        </div>
        </Item>
        <Item>
        <h3> KILLS </h3>
        <div className="container-yellow">
        <h2> {data.kills} </h2>
        </div>
        </Item>
        <Item>
        <h3> TOP FIVE </h3>
        <div className="container-yellow">
        <h2> {data.topFive} </h2>
        </div>
        </Item>
        <Item>
        <h3> WINS </h3>
        <div className="container-yellow">
        <h2> {data.wins} </h2>
        </div>
        </Item>
        <Item>
        <h3> Games Played </h3>
        <div className="container-yellow">
        <h2> {data.gamesPlayed} </h2>
        </div>
        </Item>

      </ItemContainer>
      
    )
    
}