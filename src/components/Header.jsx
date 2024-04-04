import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <p>Location Based Device Management System</p>
        <div className={styles.button_container}>
          <button className={styles.active}>Locations</button>
          <button>Devices</button>
        </div>
      </div>
    </div>
  );
}
