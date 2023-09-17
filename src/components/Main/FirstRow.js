import React from 'react';
import styled from 'styled-components';

const FirstRowContainer = styled.div`
  background-color: #f8f9fa; /* Example background color */
  padding: 20px;
`;

const Heading = styled.h1`
  color: #333; /* Example text color */
  font-size: 24px;
`;

const Paragraph = styled.p`
  color: #555; /* Example text color */
`;

function FirstRow() {
    return (
        <FirstRowContainer>
            <div className="row">
                <div className="col-md-6">
                    <div className="bloco_um">
                        <div className="principal_texto d-flex align-items-center text-center row justify-content-center">
                            <Heading>Limpando o mundo!</Heading>
                            <Paragraph>
                                "Com volumes crescentes de produção e descarte, o mundo enfrenta o que um recente fórum internacional descreveu como um crescente 'tsunami de lixo eletrônico', colocando vidas e a saúde em risco”, afirmou Tedros Adhanom Ghebreyesus, diretor-geral da OMS.
                            </Paragraph>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="principal_imagem m-3">
                        <img className="img-fluid rounded" src="images/img3.jpg" alt="Imagem com muitos sacos de lixo" />
                    </div>
                </div>
            </div>
        </FirstRowContainer>
    );
}

export default FirstRow;