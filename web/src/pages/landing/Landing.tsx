import React from 'react';
import { LandingContainer, BadgeComponent, InputContainer, ButtonShare, HeaderTitle, ContainerOther  } from '../../styles/pages/landing';

import warzoneLogo from '../../images/warzone-logo-white.png'
import StatusItem from '../../components/StatusItem';


const Landing: React.FC = () => {
  return (
    <>
    <LandingContainer>
      <InputContainer>
      <input type="text"/>
      <select>
        <option value="grapefruit">Select Plataform</option>
        <option value="lime">PC</option>
        <option selected value="coconut">PSN</option>
        <option value="mango">Battlenet</option>
      </select>
      <button>GET YOUR BADGE</button>
      </InputContainer>
      <BadgeComponent>
      <img src={warzoneLogo} alt="" />
      <h3>Vigarani#19539</h3>
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
      <StatusItem/>
    </LandingContainer>
    </>
  );
}

export default Landing;