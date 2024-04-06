import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./newdevice.module.css";
import axios from "axios";
import Select from "react-select";
import Loading from "./Loading";

const customStyles = {
  control: (provided) => ({
    ...provided,
    background: "transparent",
    color: "red",
    display: "flex",
    flexWrap: "nowrap",
    width: "100%",
  }),
  menu: (provided) => ({
    ...provided,
    background: "#ebebef",
    width: "100%",
    color: "#0d111d",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#ebebef",
  }),
};

export default function NewDevice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isMounting, setIsMounting] = useState(true);
  const [location, setLocation] = useState("");
  const [data, setData] = useState({
    s_no: "",
    type: "",
    is_active: true,
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
        setIsMounting(false);
      })
      .catch((e) => {
        console.log(e);
        setIsMounting(false);
      });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .post(`http://localhost:3000/api/add_device/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        alert(`New device added to ${location}`);
        navigate(`/location/${id}`);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      });
  }

  function handleSelect(option) {
    setData({ ...data, type: option.value });
  }
  return (
    <div className={styles.container}>
      {isMounting ? (
        <Loading isLoading={isMounting} />
      ) : (
        <>
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
                  <Select
                    className={styles.select_tag}
                    options={type_options}
                    placeholder="Select device type"
                    defaultValue={null}
                    onChange={(option) => {
                      handleSelect(option);
                    }}
                    styles={customStyles}
                  />
                </span>
                <span>
                  <label htmlFor="status">Device Status:</label>
                  <div className={styles.radio_container}>
                    <span className={styles.radio_button}>
                      <input
                        checked={true}
                        type="radio"
                        id="active"
                        name="status"
                        value={true}
                        onChange={(e) =>
                          setData({ ...data, is_active: e.target.value })
                        }
                      />
                      <label htmlFor="active">Active</label>
                    </span>
                    <span className={styles.radio_button}>
                      <input
                        type="radio"
                        id="deactive"
                        name="status"
                        value={false}
                        onChange={(e) =>
                          setData({ ...data, is_active: e.target.value })
                        }
                      />
                      <label htmlFor="deactive">Deactive</label>
                    </span>
                  </div>
                </span>
                <span>
                  <label htmlFor="image">Device Image:</label>
                  <input
                    type="file"
                    name=""
                    id="image"
                    accept="image/*"
                    // value={data.image}
                    onChange={(e) =>
                      setData({ ...data, image: e.target.files[0] })
                    }
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
        </>
      )}
    </div>
  );
}
