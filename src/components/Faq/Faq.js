// FAQ.js
import React from 'react';
import Card from '../Cards/CardsContainer';
import FaqContainer from './FaqContainer';
import Questions from './Questions';


function Faq() {
    return (
        <FaqContainer>
            <div className="row">
                <div className="col-md-12">
                    <div className="perguntas">
                        <Questions className="text-center">
                            <h3>FAQ</h3>
                        </Questions>

                        <div className="respostas">
                            <Card
                                titulo="Como ajudará a empresa contratante?"
                                descricao="Além da economia, a reciclagem pode trazer outras vantagens econômicas. É possível obter redução do IPI, do PIS e da COFINS destinando resíduos para a reciclagem."
                            />
                            <Card
                                titulo="Como será a separação de resíduos?"
                                descricao="De acordo com suas especificidades, são separados das demais impurezas. Cada material terá a sua destinação correta, mas serão processados em grupos diferentes."
                            />
                            <Card
                                titulo="O que terá nos relatórios periódicos?"
                                descricao="Serão encontrados nos relatórios periódicos a quantidade de materiais reciclados, quanto que foi economizado com a reciclagem e como esse material foi reciclado."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FaqContainer>
    );
}

export default Faq;
