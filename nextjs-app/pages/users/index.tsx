import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const users = [1, 2, 3, 4, 5];

export default function Users() {
  return (
    <div className={styles.container}>
      <h1>Users page</h1>
      <div className={styles.flexColumn}>
        <Link href='/'>Home page</Link>
        <Link href='/about'>About page</Link>
        {users.map((id) => (
          <Link key={id} href={`/users/${id}`}>
            User {id} page
          </Link>
        ))}
      </div>
    </div>
  );
}
