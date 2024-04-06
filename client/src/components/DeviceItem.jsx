import { useState } from "react";
import styles from "./deviceitem.module.css";
import axios from "axios";
export default function DeviceItem({
  serial_no,
  type,
  isActive,
  image,
  location_id,
  device_id,
}) {
  const [isRemoving, setIsRemoving] = useState(false);
  function handleDelete() {
    if (confirm("Are you sure?")) {
      setIsRemoving(true);
      axios
        .delete(
          `http://localhost:3000/api/delete_device/${location_id}/${device_id}`
        )
        .then((res) => {
          setIsRemoving(false);
          alert("Deleted Successfully! ");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
          setIsRemoving(false);
        });
    }
  }

  function handleChange() {
    if (confirm("Do you want to change the status?")) {
      axios
        .put(
          `http://localhost:3000/api/update_device/${location_id}/${device_id}`
        )
        .then(() => {
          alert("Changed Successfully! ");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  return (
    <div className={styles.container}>
      <span
        className={isActive ? styles.active_mark : styles.deactive_mark}
        onClick={() => handleChange()}
      ></span>
      <span className={styles.bin_icon} onClick={() => handleDelete()}>
        {isRemoving ? (
          <img src="/waiting.svg" alt="" />
        ) : (
          <img src="/bin.svg" alt="" />
        )}
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
