import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const HeroHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    flex-basis: 50%;
  }

  h3 {
    font-weight: normal;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 2rem;
  }

  .cta-holder {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .cta-holder {
      justify-content: center;
    }
  }
`;

const CTA = styled.span`
  padding: 0.8rem 2rem;
  background: #6c63ff;
  color: white;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
`;

const Hero: NextPage = () => {
  return (
    <HeroHolder>
      <div>
        <p style={{ color: '#6C63FF', fontSize: '5rem', fontWeight: 'bold' }}>CeFolio</p>
        <p style={{ fontSize: '1.5rem' }}>
          A <span style={{ color: '#6C63FF', fontSize: '1.5rem' }}>Link</span> is all you need
        </p>
        <br />
        <div className="cta-holder">
          <Link href="/editor">
            <a>
              <CTA>Get Started</CTA>
            </a>
          </Link>
        </div>
      </div>
      <Image src="/hiring.svg" alt="hiring" width="300px" height="300px" priority />
    </HeroHolder>
  );
};

export default Hero;
