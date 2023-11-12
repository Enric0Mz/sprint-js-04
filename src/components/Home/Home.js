import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <Wrapper>
            <Header>
                <h1>Combatendo a Poluição no Mundo</h1>
            </Header>
            <Main>
                <Section>
                    <h2>Bem-vindo à Nossa Iniciativa</h2>
                    <p>
                        Estamos dedicados a encontrar soluções e tomar medidas para combater a poluição no mundo.
                        Juntos, podemos ter um impacto positivo no meio ambiente e criar um planeta mais limpo e saudável.
                    </p>
                </Section>

                <Section>
                    <h2>Nossa Missão</h2>
                    <p>
                        Nossa missão é aumentar a conscientização sobre os efeitos prejudiciais da poluição e implementar
                        soluções sustentáveis que contribuam para um mundo mais limpo e sustentável.
                    </p>
                </Section>

                <Section>
                    <h2>Participe</h2>
                    <p>
                        Junte-se a nós em nossos esforços para combater a poluição. Seja através de voluntariado, apoio às nossas iniciativas,
                        ou conscientizando, sua contribuição é importante.
                    </p>
                </Section>
            </Main>
            <Footer>
                <p>Contate-nos: cleancycle@gmail.com</p>
            </Footer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  font-family: 'Arial', sans-serif;
  margin: 0 auto;
  max-width: 800px;
`;

const Header = styled.header`
  background-color: #8BBE45; 
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Main = styled.main`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin-bottom: 30px;

  h2 {
    color: #8BBE45; 
  }

  p {
    line-height: 1.5;
  }
`;

const Footer = styled.footer`
  background-color: #8BBE45; 
  color: #fff;
  text-align: center;
  padding: 10px;
`;

export default Home;
