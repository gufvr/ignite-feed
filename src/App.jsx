import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gustavo Favero"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint placeat voluptatibus iusto aliquid vitae. Laudantium ab consequatur nam voluptatem et quos hic temporibus ducimus, libero voluptas aspernatur maiores vero dolore!"
          />
          <Post author="Micaela Gabriel" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
