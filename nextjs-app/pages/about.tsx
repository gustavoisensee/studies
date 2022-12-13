import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About page</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href='/'>Home page</Link>
        <Link href='/users'>Users page</Link>
      </div>
    </div>
  );
}
