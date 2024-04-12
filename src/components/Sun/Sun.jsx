import styled from 'styled-components';



const Imgstyle = styled.img`
  
    animation-name: spin;
    animation-duration: 21s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
`

  
 

export const Sun = () => {

    return(
        <>
       
        <Imgstyle src='https://cdn-icons-png.flaticon.com/512/869/869869.png' alt='Sun' width="28" height="28"></Imgstyle>
        
        </>
    )
}
