import React from 'react'

import styled from 'styled-components';
import warzoneLogov2 from '../images/warzone-logo-white.png'

export const BadgeComponent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
margin-top: 20px;
background: #1A2020;
width: 100%;
height: 1000px;
text-align: center;
div{
background: #1A2020;
}

img {
    padding: 40px;
    width: 100%;
    height: auto;
}

h1 {
    font-size: 160px;
    color: #F1B621;
    font-style: normal;
    font-weight: 900;
}

h3{
    font-size: 32px;
    color: #928C85;
}
`

type StatsProps = {
    username: string;
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
  


export default function BadgeComponentv2 ({data, username}: StatsProps) {
        const blue = {color:' #069FBD'}
        const yellow = {color:' #F1B621'}
        const red = {color:' #AC3914'}
        const gray = {color:' #8D8C8A'}
        const purple = {color: '#882C7F'}
        const grayBlue = {color: '#597277'}
        const orange = {color: '#FD4E17'}
        const totalRanks = data.topFive + data.topTen;
        let totalPoints = (totalRanks/data.gamesPlayed)
        if(totalPoints > 0.80 ) {
          return(
            <>
            <BadgeComponent>
            <img src={warzoneLogov2} alt="" />
            <h3  >  {username.toUpperCase} </h3>
            <h1 style={yellow} >ALMOST</h1>
            <h1 style={yellow} >A</h1>
            <h1 style={yellow} >GOD</h1>
            </BadgeComponent>
            
          </>
          )
      } else if (totalPoints > 0.60 ) {
        return(
          <>
          <BadgeComponent>
          <img src={warzoneLogov2} alt="" />
          <h3>  {username.toUpperCase} </h3>
          <h1 style={blue} >YOU'RE</h1>
          <h1 style={blue} >FREAKING</h1>
          <h1 style={blue} >INSANY</h1>
          </BadgeComponent>
        </>
        )
      }
      else if (totalPoints > 0.40 ) {
        return(
          <>
          <BadgeComponent>
          <img src={warzoneLogov2} alt="" />
          <h3>  {username.toUpperCase} </h3>
          <h1 style={purple} >YOU'RE</h1>
          <h1 style={purple} >ARE</h1>
          <h1 style={purple} >PRO</h1>
          </BadgeComponent>
        </>
        )
      }else if (totalPoints > 0.20 ) {
        return(
          <>
          <BadgeComponent>
          <img src={warzoneLogov2} alt="" />
          <h3>  {username.toUpperCase} </h3>
          <h1 style={grayBlue} >YOU'RE</h1>
          <h1 style={grayBlue} >ABOVE</h1>
          <h1 style={grayBlue} >AVERAGE</h1>
          </BadgeComponent>
        </>
        )
      }else if (totalPoints > 0.10 ) {
        return(
          <>
          <BadgeComponent>
          <img src={warzoneLogov2} alt="" />
          <h3>  {username.toUpperCase} </h3>
          <h1 style={gray} >YOU'RE</h1>
          <h1 style={gray} >GOOD</h1>
          <h1  style={gray} >PLAYER</h1>
          </BadgeComponent>
        </>
        )
      }else if (totalPoints > 0.5 ) {
        return(
          <>
          <BadgeComponent>
          <img src={warzoneLogov2} alt="" />
          <h3>  {username.toUpperCase} </h3>
          <h1 style={orange} >YOU'RE</h1>
          <h1 style={orange} >REGULAR</h1>
          <h1 style={orange} >PLAYER</h1>
          </BadgeComponent>
        </>
        )
      }else if (totalPoints < 0.5 ) {
        return(
          <>
          <BadgeComponent>
          <img src={warzoneLogov2} alt="" />
          <h3>  {username.toUpperCase} </h3>
          <h1 style={red} >YOU'RE</h1>
          <h1 style={red} >BELOW</h1>
          <h1 style={red} >AVERAGE</h1>
          </BadgeComponent>
        </>
        )
      }else{
        return null
      }
}