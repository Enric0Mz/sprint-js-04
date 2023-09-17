// QuemSomos.js
import React from 'react';
import Service from './Service';
import Presentation from './Presentation';
import AboutUsContainer from './AboutUseContainer';
import Logo from '../Cards/Logo';


function AboutUs() {
    return (
        <div className="row">
            <div className="col-md-6">
                <AboutUsContainer>
                    <Presentation>
                        <h3>Quem somos nós?</h3>
                        <p>Somos um grupo de alunos da Fiap e cursamos Engenharia de Software.</p>
                    </Presentation>
                </AboutUsContainer>
            </div>

            <div className="col-md-6">
                <AboutUsContainer>
                    <Service>
                        <h3>Etapas do projeto</h3>
                        <Logo><img src="images/seta.svg" alt="" /> Criar um site responsivo e útil.</Logo>
                        <Logo> <img src="images/seta.svg" alt="" /> O dispositivo será responsável por encontrar todos os materiais utilizados pela empresa contratante.</Logo>
                        <Logo> <img src="images/seta.svg" alt="" /> Após identificar todos os materiais, o dispositivo oferecerá soluções para reduzir o impacto causado.</Logo>
                        <Logo><img src="images/seta.svg" alt="" /> Após identificar todos os materiais, o dispositivo oferecerá soluções para reduzir o impacto causado.</Logo>
                        <Logo><img src="images/seta.svg" alt="" /> O diferencial será a abordagem personalizada e a oferta de relatórios periódicos de acompanhamento.</Logo>
                    </Service>
                </AboutUsContainer>
            </div>
        </div>
    );
}

export default AboutUs;
