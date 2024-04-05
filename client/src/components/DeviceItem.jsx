import styles from "./deviceitem.module.css";
export default function DeviceItem({ serial_no, type, isActive, image }) {
  return (
    <div className={styles.container}>
      <span
        className={isActive ? styles.active_mark : styles.deactive_mark}
      ></span>
      <span className={styles.bin_icon}>
        <img src="/bin.svg" alt="" />
      </span>
      <div className={styles.image_container}>
        <img src={`http://localhost:3000/uploads/${image}`} alt="" />
      </div>
      <div className={styles.description}>
        <span>
          <p className={styles.s_no}>Serial Number:</p>
          <p className={styles.title}>{serial_no}</p>
        </span>
        <span>
          <p>Type: {type}</p>
          <p>Status: {isActive ? "Active" : "Deactive"}</p>
        </span>
      </div>
    </div>
  );
}
