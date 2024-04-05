import BeatLoader from "react-spinners/BeatLoader";
import styles from "./loading.module.css";
export default function Loading({ isLoading }) {
  return (
    <div className={styles.container}>
      <BeatLoader
        color={"#FFF"}
        loading={isLoading}
        // cssOverride={override}
        size={8}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
