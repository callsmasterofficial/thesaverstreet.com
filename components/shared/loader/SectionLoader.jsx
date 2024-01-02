import { ImSpinner9 } from "react-icons/im";

export default function SectionLoader({ size }) {
  return (
    <div className="section-loader-wrapper">
      <ImSpinner9
        icon="spinner"
        size={size || 50}
        color={"rgb(13 111 161)"}
        className="spinner mx-2"
      />
    </div>
  );
}
