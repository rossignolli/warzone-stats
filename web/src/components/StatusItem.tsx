// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import styled from 'styled-components';

const Item = styled.div`
margin: 10px;

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

div{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-content: center;
  height: 86px;
  padding: 5%;
  background: #FFB100;
  border-radius: 10px;
}
`

// IMPLMENTAR A SECTION DE OTHERS STATS




 export default function StatusItem(){
    return (
      <ItemContainer>

        <Item>
        <h3>LEVEL</h3>
        <div className="container-hello">
        <h2>54</h2>
        </div>
        </Item>

        <Item>
        <h3>LEVEL</h3>
        <div className="container-hello">
        <h2>54</h2>
        </div>
        </Item>

        <Item>
        <h3>LEVEL</h3>
        <div className="container-hello">
        <h2>54</h2>
        </div>
        </Item>

        <Item>
        <h3>LEVEL</h3>
        <div className="container-hello">
        <h2>54</h2>
        </div>
        </Item>

        <Item>
        <h3>LEVEL</h3>
        <div className="container-hello">
        <h2>54</h2>
        </div>
        </Item>

        <Item>
        <h3>LEVELLEVELLEVELLEVELLEVELLEVELLEVEL</h3>
        <div className="container-hello">
        <h2>54</h2>
        </div>
        </Item>

        <Item>
        <h3>LEVEL</h3>
        <div className="container-hello">
        <h2>54</h2>
        </div>
        </Item>

        <Item>
        <h3>LEVEL</h3>
        <div className="container-hello">
        <h2>54</h2>
        </div>
        </Item>

        <Item>
        <h3>LEVEL</h3>
        <div className="container-hello">
        <h2>54</h2>
        </div>
        </Item>
  
      </ItemContainer>
      
    )
    
}