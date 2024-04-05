import { Link } from "react-router-dom";
import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <a href="/">
          <p>Location Based Device Management System</p>
        </a>
        {/* <div className={styles.button_container}>
          <button className={styles.active}>Locations</button>
          <button>Devices</button>
        </div> */}
      </div>
    </div>
  );
}
