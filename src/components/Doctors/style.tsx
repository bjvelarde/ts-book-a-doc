import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const Title = styled.h1`
  color: lightseagreen;
  font-size: 48px;
  text-align: center;
  font-family: cursive;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

const TheContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
  flex-direction: column;


  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin: 20px 0;
  }
`;

const SC = {
  Title,
  Container: TheContainer,
  Cards
};

export default SC;