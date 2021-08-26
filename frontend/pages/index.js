import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.css'

export default () => {
  const posts = [1, 2, 3, 4];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">MetaLink!</a>
        </h1>

        <p className={styles.description}>
          Start your meta world
        </p>

        <div className={styles.grid}>
          {
            posts.map(v => (
              <PostCard/>
            ))
          }
        </div>
      </main>
    </div>
  )
};
