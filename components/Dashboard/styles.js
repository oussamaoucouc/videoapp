import styled from 'styled-components'
import Button from '../ui/Button'
import Text from '../ui/Text'

export const RightContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const LeftContainer = styled.div`
    margin-left: 0;
    margin-top: 0;
    padding: 80px 0px 20px 0px;
    flex-basis: 20%;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    position: relative;
  }
`
export const Wrapper = styled.div`
margin: 0;
background-color: #eaeaea;
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
align-items: center;
justify-items: center;
}
`

export const Title = styled(Text)`
  text-align: center;
}
`
export const TitleText = styled(Text)`
  color: var(--text-light-color);
  text-align: center;
}
`
export const Link = styled.link`
  color: var(--text-light-color);
  text-align: center;
}
`

export const AddVideoButton = styled(Button)`
  && {
    width: 20%;
  }
`

export const Icons = styled.div`
  display:flex;
  flex-direction:row;
  width:50%;
}
`

export const ErrorMessage = styled.div`
  color: red;
  border: solid 1px;
  border-color: rgb(252 165 165);
  padding: 30px;
}
`
export const Delete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  position: relative;
  width: 556px;
  height: 223px;
  background: #FFFFFF;
  border-radius: 12px;
  margin:auto;
}
`

export const Delbtn = styled.div`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 14px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 40px;
margin-left: 6px;
color: #FFFFFF;
outline: none;
border: none;
cursor: pointer;


position: static;
width: 184px;
height: 45px;
left: 141px;
top: 0px;

/* Accent/EB5757 */

background: #EB5757;
border-radius: 8px;
}
`
export const Nobtn = styled(Button)`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 14px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 40px;
margin-left: 24px;
outline: none;
border: none;
cursor: pointer;

position: static;
width: 129px;
height: 45px;
left: 0px;
top: 0px;
background: #F4F4F4;
border-radius: 8px;
color: black;
}
`
export const Btnd = styled(Button)`
display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    margin-top: 28px;

    position: static;
    width: 400px;
    height: 45px;
    left: 126px;
    top: 118px;
    background-color:white;
}
`