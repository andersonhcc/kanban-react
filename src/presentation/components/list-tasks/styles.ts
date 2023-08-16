import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 0;
  flex-basis: 400px;
  flex-shrink: 0;
  background: #D5CCFF;
  border-radius: 16px;
  margin-left: 20px;
  padding: 0 15px;
  min-height: 100%;
  h2{
    font-family: "Poppins";
    color: #2B1887;
    font-size: 14px;
    margin-left: 5px;
    font-weight: 600;
  }
  header{
     display: flex;
     align-items: center;
     height: 42px;
  }
  ul{
    margin-top: 15px;
  }
  div{
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex: 0;
    margin-top: 15px;
    margin-right: 20px;

  }
`;

export const Input = styled.input`
  padding: 5px;
  min-width: 80%;
  font-size: 12px;
  font-family: "Poppins";
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }


  @media (max-width: 768px) {
    width: 95%;
  }
`;