import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.css';
import api from '../utils/api';

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadBoards();
  }, []);

  const loadBoards = async () => {
    const { data } = await api.get('board');
    setPosts(data);
  }

  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">MetaLink!</a>
      </h1>

      <p className={styles.description}>
        Start your meta world
      </p>

      <div className={styles.grid}>
        {
          posts.map(data => (
            <PostCard
              data={data}
            />
          ))
        }
      </div>
    </>
  )
};
