import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  ${({background})=>css`background: url("${background}") center / cover no-repeat;`}
  font-family: 'Audiowide', cursive;
  font-size: 72px;
  white-space: nowrap;
  
  @media(max-width: 900px){
    font-size: 48px;

  }

  @media(max-width: 600px){
    font-size: 24px;

  }
`;

export const Mail = styled.div`
  font-size: 48px;
  
  a  {
    color: white;
    text-decoration: none;
    &:hover{
      color: blueviolet;
    }
  }

  @media(max-width: 900px){
    font-size: 26px;

  }

  @media(max-width: 600px){
    font-size: 18px;

  }
`