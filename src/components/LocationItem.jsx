import styles from "./locationitem.module.css";
export default function LocationItem({ name, address, phone, device_count }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{name}</p>
      <span>
        <p>{address}</p>
        <p>{phone}</p>
        <p>No of Devices: {device_count}</p>
      </span>
    </div>
  );
}
