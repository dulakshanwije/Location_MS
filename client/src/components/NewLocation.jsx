import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./newlocation.module.css";
export default function NewLocation() {
  const [data, setData] = useState({ name: "", address: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .post("http://localhost:3000/api/add_location", data)
      .then((res) => {
        alert("Location Added.");
        navigate("/");
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      });
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Add New Location</p>
      <hr className={styles.line} />
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formitems_container}>
            <span>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required={true}
              />
            </span>
            <span>
              <label htmlFor="address">Address:</label>
              <input
                id="address"
                type="text"
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </span>
            <span>
              <label htmlFor="telephone">Telephone:</label>
              <input
                id="telephone"
                type="text"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </span>
            <div className={styles.button_container}>
              <input type="reset" value="Reset" />
              {isLoading ? (
                <input type="submit" value="Saving..." disabled />
              ) : (
                <input type="submit" value="Submit" />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
