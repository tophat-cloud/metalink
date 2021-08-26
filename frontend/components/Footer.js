import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default () => {
  return (
    <Footer>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <strong>
          TopHat
        </strong>
      </a>
    </Footer>
  );
};
