// Problemas.js
import React from 'react';
import Card from '../Cards/CardsContainer'
import Title from './Title'
import ProblemsContainer from './ProblemsContainer';


function Problems() {
    return (
        <ProblemsContainer>
            <div className="row">
                <div className="col-md-12">
                    <div className="problemas">
                        <div className="titulo text-center m-3">
                            <Title>Problemas</Title>
                        </div>
                        <div className="cartoes">
                            <Card
                                titulo="Tempo de vida dos aterros sanitários reduzida"
                                descricao="Quando descartados em aterros sanitários, esses materiais aumentam o volume do lixo e reduzem a vida útil do local."
                            />
                            <Card
                                titulo="Contaminação por metais pesados"
                                descricao="Placas e circuitos eletrônicos contêm metais pesados que afetam a qualidade do solo, água e rios."
                            />
                            <Card
                                titulo="Danos à saúde pública"
                                descricao="O descarte incorreto causa poluição prejudicial à saúde da população próxima aos aterros sanitários e aos que trabalham com a separação dos resíduos."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ProblemsContainer>
    );
}

export default Problems;
