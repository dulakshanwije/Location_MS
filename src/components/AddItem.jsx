import styles from "./additem.module.css";
export default function AddLocationItem({ title }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p>+</p>
    </div>
  );
}
