import styled from "styled-components";

export const LoginForm = styled.div`
  .formSection {
    margin: 0 auto;
  }
  .formSection > p {
    color: #808080;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
  }
  .loginLink,
  .forgotPassLink {
    color: #646fd4;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none;
    margin-left: 1rem;
  }
  .loginLink:hover {
    color: #ecb365;
  }
  .forgotPassLink:hover {
    color: #ecb365;
  }

  @media screen and (min-width: 1024px) {
    .login {
      width: 48%;
      display: flex;
      .formSection {
        width: 100%;
      }
    }
  }
`;
