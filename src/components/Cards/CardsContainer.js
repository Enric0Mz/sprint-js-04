import React from 'react';
import styled from 'styled-components';

const CardsContainer = styled.div`
  background-color: #fff; /* Example background color */
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd; /* Example border */
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Example box shadow */
`;

const Title = styled.h3`
  color: #333; /* Example text color */
`;

function Card(props) {
    const { titulo, descricao } = props;

    return (
        <div className="col-md-4">
            <CardsContainer>
                <Title>{titulo}</Title>
                <p>{descricao}</p>
            </CardsContainer>
        </div>
    );
}

export default Card;
