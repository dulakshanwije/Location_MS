import styles from "./additem.module.css";
export default function AddLocationItem({ title }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.add_icon}>
        <img src="./add.svg" alt="" />
      </div>
    </div>
  );
}
