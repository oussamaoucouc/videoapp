import styled from 'styled-components'
import Button from '../ui/Button'
import Text from '../ui/Text'

export const RightContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
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
`


export const Videodiv = styled.div`
margin: 0;
background-color: #eaeaea;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
flex-shrink-to-fit: flex-shrink;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;


width: 350px;
height: 346px;


/* Light/White */

background: #FFFFFF;
border-radius: 12px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 12px;


`

export const VideosContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`
export const Videobar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left : 55px;
margin-right: 55px;

   
`

export const Crudbutton = styled(Button)`
  
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;

position: static;
width: 150px;
height: 36px;
left: 0px;
top: 0px;

background: #F5F5F5;
border-radius: 8px;
color: #222222;

flex: none;
order: 2;
flex-grow: 1;
margin: 0px 12px;


  
`

export const ButtonVideodiv = styled.div`
  
    width: 100%;
    display:flex;
    flex-direction: row;
    margin-top: 15px;

  
`

export const Title = styled(Text)`
  text-align: center;
`
export const TitleText = styled(Text)`
  color: var(--text-light-color);
  text-align: center;
  
`
export const Link = styled.link`
  color: var(--text-light-color);
  text-align: center;
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
`

export const ErrorMessage = styled.div`
  color: red;
  border: solid 1px;
  border-color: rgb(252 165 165);
  padding: 30px;
`

export const BarTitle = styled.h4`

position: static;
width: 70px;
height: 30px;
left: 0px;
top: 7.5px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 150%;
/* identical to box height, or 30px */


/* Light/Text */

color: #222222;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;


`
export const WrapperDesc = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
`

export const WrapperDescChild = styled.div`
width:100%;
padding:30px;
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
padding-left:50px;
/* identical to box height, or 24px */


/* Light/Text */

color: #222222;

background: #F5F5F5;
border: 1px solid lightgray;

`
export const WrapperDescChildren = styled.div`
display: flex;
flex-direction:row;
flex-wrap: nowrap !important ;
width:100%;
height:100%;


`
export const RowFlex = styled.div`
 display:flex;
 flex-direction:column;
 width:70% ;
 color: #44484E;

background: #F5F5F5;
padding:50px;
height:100%;

`
export const Contenu = styled.div`
width:100%;
border : 1px solid gray;
border-radius: 5px;
padding:10px;
margin-top:20px;
margin-bottom: 20px;

`

export const Contenu2 = styled.div`
width:100%;
border : 1px solid gray;
border-radius: 5px;
padding:10px;
margin-top:20px;
margin-bottom: 20px;
height:150px;

`

export const WrapperDescChild2 = styled.div`
width:100%;
padding:30px;
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
padding-left:50px;
/* identical to box height, or 24px */


/* Light/Text */

color: #222222;

background: #F5F5F5;
align-items:right;
text-align: right;
justify-content:right;
border: 1px solid lightgray;

`
export const ImageTitle = styled.div`
margin-top: 20px;

`

export const RowFlex2 = styled.div`
display:flex;
flex-direction: column;
margin: 40px;
height:70%;
background-color: white;

`
export const RowFlex2Child = styled.div`
 
margin:24px;

`

