import styles from "./newdevice.module.css";
export default function NewDevice() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Add New Device (Location: City Town)</p>
      <hr className={styles.line} />
      <div>
        <form action="" method="post">
          <div className={styles.formitems_container}>
            <span>
              <label htmlFor="s_no">Serial Number:</label>
              <input id="s_no" type="text" />
            </span>
            <span>
              <label htmlFor="type">Device Type:</label>
              <select name="" id="type">
                <option value="" defaultChecked disabled>
                  Select Device Type
                </option>
                <option value="">POS</option>
                <option value="">Kisok</option>
                <option value="">Signage</option>
              </select>
            </span>
            <span>
              <label htmlFor="type">Current Status:</label>
              <select name="" id="type">
                <option value="" defaultChecked>
                  Active
                </option>
                <option value="">Deactive</option>
              </select>
            </span>
            <span>
              <label htmlFor="image">Device Image:</label>
              <input type="file" name="" id="image" accept="image/*" />
            </span>
            <div className={styles.button_container}>
              <input type="reset" value="Reset" />
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
