import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo.png' alt='site logo' width={128} height={77} />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/users'>Users</Link>
    </nav>
  );
}
