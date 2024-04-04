import AddLocationItem from "./AddItem";
import DeviceItem from "./DeviceItem";
import styles from "./singlelocation.module.css";
export default function SingleLocation() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Locations / City Town</p>
      <hr className={styles.line} />
      <div className={styles.table_container}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>City Town</td>
              <td>Address: </td>
              <td colSpan={3}>No 7, Galle Road, Colombo</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>+94 71719860</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={styles.title}>Devices</p>
      <hr className={styles.line} />
      <div className={styles.grid_container}>
        <DeviceItem serial_no={"ABC0123321"} isActive={true} type={"kisok"} />
        <DeviceItem serial_no={"ABC0123321"} isActive={false} type={"kisok"} />
        <DeviceItem serial_no={"ABC0123321"} isActive={false} type={"kisok"} />
        <DeviceItem serial_no={"ABC0123321"} isActive={true} type={"kisok"} />
        <AddLocationItem title={"Add New Device"} />
      </div>
    </div>
  );
}
