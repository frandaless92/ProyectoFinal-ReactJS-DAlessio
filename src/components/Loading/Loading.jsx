import { CircleLoader, RiseLoader } from "react-spinners";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <RiseLoader color="#e0b984" margin="30px" />
    </div>
  );
};

export default Loading;
