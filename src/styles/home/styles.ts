import styled from "../../../node_modules/styled-components"

const Container = styled.div`
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: block;
  height: 100vh;
`

const Content = styled.div`
  width: 550px;
  min-height: 200px;
  background-color: #fff;
  z-index: 99;
  position: relative;
  box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.1);

  display: flex;

  flex-direction: column;
  padding: 18px 37px 55px 45px;

`

const Header = styled.header`
  text-align: center;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`

const SubTitle = styled.h2`
  font-weight: 600;
`

const ButtonSection = styled.div`
  margin: 30px 0 auto ;
  text-align: center;

`

export {
  Container,
  Content,
  Header,
  Title,
  SubTitle,
  ButtonSection
}