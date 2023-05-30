import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post(props) {
  console.log(props);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/gufvr.png" />
          <div className={styles.authorInfo}>
            <strong>Gustavo Favero</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title="25 de Maio às 21:15" dateTime="2023-05-25 21:15:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
