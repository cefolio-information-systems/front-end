import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import GoogleAuth from '../firebaseAuth';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  let auth = async () => {
    let result = await GoogleAuth();
    if (result) {
      localStorage.setItem('user', result.user.uid);
      router.push('/editor');
    }
  };

  return (
    <HeroHolder>
      <div>
        <p style={{ color: '#6C63FF', fontSize: '5rem', fontWeight: 'bold' }}>CeFolio</p>
        <p style={{ fontSize: '1.5rem' }}>
          A <span style={{ color: '#6C63FF', fontSize: '1.5rem' }}>Link</span> is all you need
        </p>
        <br />
        <div className="cta-holder">
          {/* <Link href="/editor">
            <a>
              <CTA>Get Started</CTA>
            </a>
          </Link> */}
          <CTA onClick={auth}>Get Started</CTA>
        </div>
      </div>
      <Image src="/hiring.svg" alt="hiring" width="300px" height="300px" priority />
    </HeroHolder>
  );
};

export default Hero;
