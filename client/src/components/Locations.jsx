import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationItem from "./LocationItem";
import styles from "./locations.module.css";
import axios from "axios";
import Loading from "./Loading";
import AddItem from "./AddItem";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/get_locations")
      .then((res) => {
        setLocations(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Locations</p>
      <hr className={styles.line} />
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className={styles.grid_container}>
          {locations.map((location, key) => (
            <Link to={`/location/${location._id}`} key={key}>
              <LocationItem
                name={location.name}
                address={location.address}
                phone={location.phone}
                device_count={4}
              />
            </Link>
          ))}
          <Link to="/newlocation">
            <AddItem title={"Add New Location"} />
          </Link>
        </div>
      )}
    </div>
  );
}
