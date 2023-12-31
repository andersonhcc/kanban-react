import styled from 'styled-components';

export const Container = styled.div`
max-width: 100%;
height: 100%;

div{
    min-width: 400px;
    min-height: 600px;
    max-height: 700px;

   @media (max-width: 768px) {
      min-width: 200px;
      min-height: 400px;
  }
}

img {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    margin-bottom: 10px;
    margin-right: 5px;
  }

.box-user{
  display: flex;
  flex-direction: row;
  align-items: center;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

header{
    width: 100%;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

header p{
    font-family: "Poppins";
    color: #182A4E;
    font-size: 17px;
    margin-left: 5px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 13px;
  }
}

.detailsTask p{
    font-family: "Poppins";
    color: #182A4E;
    font-size: 12px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 9px;
      max-width: 50%;
  }

}

.detailsTask{
    padding-top: 20px;
}

@media (max-width: 768px) {
  height: 300px;
  }
`;