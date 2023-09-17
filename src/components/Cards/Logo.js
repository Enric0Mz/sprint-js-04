import styled from 'styled-components';


const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 20px; /* Reduce the width */
    height: 20px; /* Reduce the height */
    margin-right: 10px;
  }

  h1 {
    color: white; /* Example text color */
    font-size: 24px;
  }
`;

export default Logo;