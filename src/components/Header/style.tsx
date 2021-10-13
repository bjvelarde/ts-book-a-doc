import styled from 'styled-components';

const Container = styled.header`
  a {
    text-decoration: none;
  }
`;

const LogoContainer = styled.div`
  background-color: #fff;
  padding: 25px;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  width: 100%;
  background-color: oldlace;
  box-shadow: 0px 2px 10px rgba(200, 200, 200, 0.7);

  @media only screen and (min-width: 768px) {
    justify-content: left;
  }
`;

const Icon = styled.div`
  padding: 5px 10px;

  > svg {
    font-size: 24px;
    color: darkcyan;
  }
`;

const Title = styled.div`
  color: lightseagreen;
  font-size: 24px;
  text-align: center;
  font-family: cursive;
  display: inline-block;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

const SC = {
  Container,
  LogoContainer,
  Icon,
  Title
};

export default SC;