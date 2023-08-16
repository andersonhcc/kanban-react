import styled, { css } from 'styled-components';

type PropsContainer = {
  isDragging: any;
  priority: string;
}


type PropsLabel = {
  color: string;
}


export const Container = styled.div<PropsContainer>`
  position: relative;
  max-width: 300px;
  background:#fff;
  border-radius:10px;
  margin-bottom: 10px;
  padding: 30px 20px;
  margin-right: 10px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: pointer;
  
  .text-priority{
    color: ${({priority}) => priority ? priority : "black"};
    font-weight: 600;
  }
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    margin-bottom: 5px;
  }

  header{
    position: absolute;
    top: -10px;
    left: 15px
  }
  
  header p{
    color: black;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
  }

  p{
    color: black;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    margin-left: 5px;
  }
  ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, img, header {
      opacity: 0;
    }
  `}

`;

export const Label = styled.span<PropsLabel>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  display: inline-block;
  background-color: ${({color}) => color};
`;



export const stylesModalWeb = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      maxWidth:"50%",
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      borderRadius: 20,
  },
};

export const stylesModalMobile = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      maxWidth:"90%",
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      borderRadius: 20,
  },
};