import AddLocationItem from "./AddLocationItem";
import LocationItem from "./LocationItem";
import styles from "./locations.module.css";
export default function Locations() {
  return (
    <div className={styles.container}>
      <p>Locations</p>
      <hr className={styles.line} />
      <div className={styles.grid_container}>
        <LocationItem
          name={"City Town"}
          address={"No 7, Galle Road, Colombo"}
          phone={"+94 717198680"}
          device_count={4}
        />
        <LocationItem
          name={"City Town"}
          address={"No 7, Galle Road, Colombo"}
          phone={"+94 717198680"}
          device_count={4}
        />
        <LocationItem
          name={"City Town"}
          address={"No 7, Galle Road, Colombo"}
          phone={"+94 717198680"}
          device_count={4}
        />
        <LocationItem
          name={"City Town"}
          address={"No 7, Galle Road, Colombo"}
          phone={"+94 717198680"}
          device_count={4}
        />
        <AddLocationItem />
        <AddLocationItem />
      </div>
    </div>
  );
}
