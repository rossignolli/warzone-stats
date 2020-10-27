import React, {  useState } from 'react';
import { LandingContainer, BadgeComponent, InputContainer, ButtonShare, HeaderTitle, ContainerOther, ContainerStats  } from '../../styles/pages/landing';

import warzoneLogo from '../../images/warzone-logo-white.png'
import StatusItem from '../../components/StatusItem';
import api from '../../services/api';




interface InfoData {
  username: string;
  lifetime: {
    all: {
      properties: {
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
      }
    }
  }
  mode: {
    war:{
      
    }
  }
}

const Landing: React.FC = () => {



  async function handleSubmit(){


    const data = {
      gamerTag: tag,
      plataform: plataform
    }

    await api.post('/', data).then(response => {
      setInfos(response.data)
    
    })

  }



  const [tag, setTag] = useState('');
  const [plataform , setPlataform] = useState('battle');
  const [infos , setInfos] = useState<InfoData>();

  

  return (
    <>
    <LandingContainer>
      <InputContainer>
      <input type="text" required onChange={e => setTag(e.target.value)} />
      <select defaultValue={"battle"} onChange={e => setPlataform(e.target.value)} >
        <option value="battle">Battle</option>
        <option  value="psn">PSN</option>
        <option value="xbl">XBOX</option>

      </select>
      <button onClick={handleSubmit} >GET YOUR BADGE</button>
      </InputContainer>
      {infos ?  (
              <ContainerStats>
              <BadgeComponent>
              <img src={warzoneLogo} alt="" />
              <h3>  {infos.username} </h3>
              <h1>YOU’RE</h1>
              <h1>PRO</h1>
              </BadgeComponent>
              <ButtonShare>
                <h1>SHARE</h1>
              </ButtonShare>
              <HeaderTitle>
                <h1>OTHER STATS</h1>
                <h3>Here are the stats we count to give you the badge above.</h3>
              </HeaderTitle>
              <ContainerOther>
              </ContainerOther>
              <StatusItem data={infos.lifetime.all.properties} /> 
              </ContainerStats>
      ): null}
      
    </LandingContainer>
    </>
  );
}

export default Landing;