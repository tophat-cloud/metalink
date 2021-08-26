import styles from '../styles/Home.module.css'

export default ({ data }) => {
  const { id, title, content } = data;
  return (
    <a
      key={id}
      href={`/posts/${id}`}
      className={styles.card}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </a>
  );
};
