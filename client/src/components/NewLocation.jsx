import styles from "./newlocation.module.css";
export default function NewLocation() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Add New Location</p>
      <hr className={styles.line} />
      <div>
        <form action="" method="post">
          <div className={styles.formitems_container}>
            <span>
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" />
            </span>
            <span>
              <label htmlFor="address">Address:</label>
              <input id="address" type="text" />
            </span>
            <span>
              <label htmlFor="telephone">Telephone:</label>
              <input id="telephone" type="text" />
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
