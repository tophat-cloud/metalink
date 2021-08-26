import styles from '../styles/Home.module.css'

export default () => {
  return (
    <a href="/posts/1" className={styles.card}>
      <h2>Post Name</h2>
      <p>post description</p>
    </a>
  );
};
