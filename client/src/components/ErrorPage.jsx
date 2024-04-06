import { Link } from "react-router-dom";
import styles from "./errorpage.module.css";
export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>404</p>
      <p className={styles.sub_title}>Not Found</p>
      <Link to="/" className={styles.link}>
        Home Page
      </Link>
    </div>
  );
}
