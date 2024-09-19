// import { Link } from "react-router-dom";

// import bannerImage from '../../assets/banner.png
import { MdEmail, MdLock } from 'react-icons/md'

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input
 from '../../components/Input';
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

const Login = () => {
    return (
        <>
            <Header />
            <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form >
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"   />
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" />
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
            </Container>
        </>
    )
}

export default Login;
