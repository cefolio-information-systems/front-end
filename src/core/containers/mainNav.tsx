import Link from 'next/link';

let MainNav = () => {
  return (
    <div style={{ backgroundColor: '#1890FF', padding: '5px' }}>
      <Link href="/">
        <a style={{ color: 'white', fontSize: '1.5em', fontFamily: 'monospace' }}>Home</a>
      </Link>
    </div>
  );
};

export default MainNav;
