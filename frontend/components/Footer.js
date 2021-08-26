import styled from 'styled-components';
import Link from 'next/link';

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
      <Link
        href="/"
      >
        <a>
        Powered by{' '}
        <strong>
          TopHat
        </strong>
        </a>
      </Link>
    </Footer>
  );
};
