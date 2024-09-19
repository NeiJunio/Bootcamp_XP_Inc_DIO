import React from "react";
import logo from "../../assets/logo-dio.png"
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight } from './styles';
// import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture } from './styles';
import Button from "../Button";

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                   <img src={logo} alt="Logo da Dio" />
                   <BuscarInputContainer>
                    <Input placeholder="Buscar..."/>
                   </BuscarInputContainer>
                   <Menu>Live Code</Menu>
                   <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title={"Entrar"} />
                    <Button title={"Cadastrar"} />
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header;