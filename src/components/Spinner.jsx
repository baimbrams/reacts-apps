/* eslint-disable react/prop-types */
import { ClockLoader } from "react-spinners";

const styles = {
  display: "block",
  margin: "auto 100px",
};

const Spinner = ({ loading }) => {
  return (
    <ClockLoader
      color="#36d7b7"
      loading={loading}
      cssOverride={styles}
      size={150}
    />
  );
};

export default Spinner;
