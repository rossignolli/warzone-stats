import React, { useState } from 'react';
import { LandingContainer, InputContainer, HeaderTitle, ContainerOther, ContainerStats  } from '../../styles/pages/landing';

import StatusItem from '../../components/StatusItem';
import api from '../../services/api';

import styled from 'styled-components';
import BadgeComponentv2 from '../../components/BadgeComponent';


const ButtonSubmit = styled.button`
border: none;
padding: 20px;
margin: 5px;

`

const SelectButton = styled.select`
border: none;
padding: 20px;
margin: 5px;
`

//Cromox#1784
// ninext#11804
// vigarani#1941


interface InfoData {
  username: string;
  level: number;
  lifetime: {
    mode: {
      br_all:{
        properties:{
          contracts: number;
          deaths: number;
          downs: number;
          gamesPlayed: number;
          kdRatio: number;
          kills: number;
          revives: number;
          score: number;
          scorePerMinute: number;
          timePlayed: number;
          tokens: number;
          topFive: number;
          topTen: number;
          topTwentyFive: number;
          wins: number;
        }
        
      }
  }
  }
}



const Landing: React.FC = () => {



  async function handleSubmit(){


    const data = {
      gamerTag: tag,
      plataform: plataform
    }

    // Cromox#1784

    await api.post('/', data).then(response => {
      console.log(response.data)
      console.log(response.data.error)

      if(response.data.hasOwnProperty('error')){
        setMesssage('Not found')
        setColor({
          background: '#e24a45',
              color: '#FFF',
        })
      }
      else{
        setInfos(response.data)
        console.log(response)
      }






    
    })

  }


  
  const defaultMessage = 'GET YOUR BADGE'
  const [tag, setTag] = useState('');
  const [plataform , setPlataform] = useState('battle');
  const [infos , setInfos] = useState<InfoData>();
  const [message, setMesssage] = useState(defaultMessage);
  const [color, setColor] = useState({
    background: '#75D073',
        color: '#FFF',
  })

  

  return (
    <>
    <LandingContainer>
      <InputContainer>
      <input type="text" onInput={()=>{
      setMesssage(defaultMessage) 
      setColor({
        background: '#75D073',
            color: '#FFF',
      })
      setInfos(undefined)
      }} id="input-tag"  placeholder="Search for your tag to get the badge!" required onChange={e => setTag(e.target.value)} />
      <SelectButton defaultValue={"battle"} onChange={e => setPlataform(e.target.value)} >
        <option value="battle">Battle</option>
        <option  value="psn">PSN</option>
        <option value="xbl">XBOX</option>
      </SelectButton>
      <ButtonSubmit style={color} 
       onClick={handleSubmit} > {message} </ButtonSubmit>
      </InputContainer>
      {infos ?  (
        <ContainerStats>
        <BadgeComponentv2 username={infos?.username} data={infos.lifetime.mode.br_all.properties} />
              <HeaderTitle>
                <h1>OTHER STATS</h1>
                <h3>Here are the stats we count to give you the badge above.</h3>
              </HeaderTitle>
              <ContainerOther>
              </ContainerOther>
               <StatusItem  level={infos.level} data={infos.lifetime.mode.br_all.properties} /> 
              </ContainerStats>
      ): null}
    </LandingContainer>
    </>
  );
}

export default Landing;