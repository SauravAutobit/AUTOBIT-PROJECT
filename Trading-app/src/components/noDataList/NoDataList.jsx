import "./NoDataList.css";

const NoDataList = ({ image, text, imageAlt }) => {
  return (
    <div className="noDataList-container">
      <img src={image} alt={imageAlt} />
      <p>{text}</p>
    </div>
  );
};

export default NoDataList;
