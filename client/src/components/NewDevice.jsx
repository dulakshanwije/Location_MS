import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./newdevice.module.css";
import axios from "axios";
export default function NewDevice() {
  const { id } = useParams();
  const [location, setLocation] = useState("");
  const [data, setData] = useState({
    s_no: "",
    type: "",
    is_active: "",
    image: null,
  });

  const type_options = [
    { value: "pos", label: "POS" },
    { value: "kisok", label: "Kisok" },
    { value: "signage", label: "Signage" },
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/get_location/${id}`)
      .then((res) => {
        setLocation(res.data.name);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    await axios
      .post(`http://localhost:3000/api/add_device/${id}`, data)
      .then((res) => {
        alert("Location Added.");
        // navigate("/");
        // setIsLoading(false);
      })
      .catch((e) => {
        // setIsLoading(false);
        console.log(e);
      });
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>Add New Device ({location})</p>
      <hr className={styles.line} />
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formitems_container}>
            <span>
              <label htmlFor="s_no">Serial Number:</label>
              <input
                id="s_no"
                type="text"
                value={data.s_no}
                onChange={(e) => setData({ ...data, s_no: e.target.value })}
              />
            </span>
            <span>
              <label htmlFor="type">Device Type:</label>
              <input
                id="type"
                type="text"
                value={data.type}
                onChange={(e) => setData({ ...data, type: e.target.value })}
              />
            </span>
            <span>
              <label htmlFor="status">Current Status:</label>
              <input
                id="type"
                type="text"
                value={data.is_active}
                onChange={(e) =>
                  setData({ ...data, is_active: e.target.value })
                }
              />
            </span>
            <span>
              <label htmlFor="image">Device Image:</label>
              <input
                type="file"
                name=""
                id="image"
                accept="image/*"
                // value={data.image}
                onChange={(e) => setData({ ...data, image: e.target.files[0] })}
              />
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
