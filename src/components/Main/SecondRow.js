import React from 'react';
import styled from 'styled-components';

const SecondRowContainer = styled.div`
  background-color: #f0f0f0; /* Example background color */
  padding: 20px;
`;

const Text = styled.p`
  color: #333; /* Example text color */
`;

function SecondRow() {
    return (
        <SecondRowContainer>
            <div className="row">
                <div className="col-md-12 border border-success m-3">
                    <div className="bloco_texto m-3">
                        <Text>
                            Lidar com o lixo eletrônico é hoje um dos principais desafios que as três esferas do poder público e a iniciativa privada enfrentam quando o assunto é a construção de uma sociedade realmente justa do ponto de vista social e ambientalmente sustentável.
                        </Text>
                    </div>
                </div>
            </div>
        </SecondRowContainer>
    );
}

export default SecondRow;