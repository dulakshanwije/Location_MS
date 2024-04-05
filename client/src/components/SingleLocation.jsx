import { useParams, Link } from "react-router-dom";
import DeviceItem from "./DeviceItem";
import styles from "./singlelocation.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AddItem from "./AddItem";
import Loading from "./Loading";
export default function SingleLocation() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [devices, setDevices] = useState([]);
  const [deviceCount, setDeviceCount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/get_location/${id}`)
      .then((res) => {
        setLocation(res.data);
        setDevices(res.data.devices);
        setDeviceCount(res.data.devices.length);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Locations / {location.name}</p>
      <hr className={styles.line} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.table_container}>
            <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{location.name}</td>
                  <td>Address: </td>
                  <td colSpan={3}>{location.address}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{location.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.title}>Devices ({deviceCount})</p>
          <hr className={styles.line} />
          <div className={styles.grid_container}>
            {devices.map((device, key) => (
              <DeviceItem
                serial_no={device.s_no}
                isActive={device.is_active}
                type={device.type}
                key={key}
                image={device.image}
              />
            ))}
            <Link to={`/newdevice/${id}`}>
              <AddItem title={"Add New Device"} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
