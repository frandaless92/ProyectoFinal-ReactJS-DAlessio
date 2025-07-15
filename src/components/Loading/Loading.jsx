import { CircleLoader } from "react-spinners";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <CircleLoader color="red" />
    </div>
  );
};

export default Loading;
