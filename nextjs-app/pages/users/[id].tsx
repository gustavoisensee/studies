import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router'


export default function User() {
  const route = useRouter();
  const id = route?.query?.id || '';

  return (
    <div className={styles.container}>
      <h1>User {id} page</h1>
    </div>
  );
}
