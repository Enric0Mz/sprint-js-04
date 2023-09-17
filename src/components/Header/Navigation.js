import styled from "styled-components";


const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      margin: 0 15px;
      a {
        color: white; /* Example text color */
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Navigation;