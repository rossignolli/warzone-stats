// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import styled from 'styled-components';

const Item = styled.div`
margin: 10px;

div{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-content: center;
  height: 86px;
  padding: 5%;
  width: 45px;
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
  data: {
    accuracy: number;
    assists: number;
    deaths: number;
    kills: number;
    losses: number;
    suicides: number;
    score: number;
    scorePerMinute: number;
    gamesPlayed: number;
    timePlayedTotal: number;
    winLossRatio: number;
    wins: number;
    wlRatio: number;
  },
}

 export default function StatusItem({ data }: StatsProps){
    return (
      <ItemContainer>

     

        {Object.entries(data).map(([key, value]) => {
    // Pretty straightforward - use key for the key and value for the value.
    // Just to clarify: unlike object destructuring, the parameter names don't matter here.
    return (
      
    <Item key={key} >
    <h3> {key} </h3>
    <div className="container-yellow">
    <h2> {value.toFixed(0)} </h2>
    </div>
    </Item>


    )



})}

        
        <Item>
        <h3>LEVEL</h3>
        <div className="container-yellow">
        <h2>54</h2>
        </div>
        </Item>
        


  
      </ItemContainer>
      
    )
    
}