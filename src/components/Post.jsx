import { Avatar } from "../Avatar";
import style from "./Post.module.css";
import { Comment } from "./comment";
export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src="https://github.com/Neves-Rafael.png" />
          <div className={style.authorInfo}>
            <strong>Rafael Neves</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="25 de Out as 14:00h" dateTime="2023-11-25 14:00:00">
          Publicado há 1h
        </time>
      </header>
      <div className={style.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat.
        </p>
        <p>
          <a href="">👉 Jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a>#rocketseat</a> <a>#nlw</a>
        </p>
      </div>
      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Enviar</button>{" "}
        </footer>
      </form>

      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
