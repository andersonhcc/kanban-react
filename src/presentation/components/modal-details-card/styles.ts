import styled from 'styled-components';

export const Container = styled.div`
max-width: 100%;
height: 100%;

div{
    min-width: 400px;
    min-height: 600px;
    max-height: 700px;
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
}

.detailsTask p{
    font-family: "Poppins";
    color: #182A4E;
    font-size: 12px;
    margin-left: 5px;
    margin-bottom: 10px;

}

.detailsTask{
    padding-top: 20px;
}

`;