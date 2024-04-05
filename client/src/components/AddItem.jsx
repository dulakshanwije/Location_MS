import styles from "./additem.module.css";
export default function AddItem({ title }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.add_icon}>
        <img src="http://localhost:5173/add.svg" alt="" />
      </div>
    </div>
  );
}
