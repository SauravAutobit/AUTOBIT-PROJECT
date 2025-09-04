import "./SubheaderOptions.css";

const SubHeaderOptions = ({ options, selectedTab, setSelectedTab }) => {
  return (
    <div className="subHeaderOptions-container">
      {options.map((option, index) => {
        return (
          <p
            key={index}
            onClick={() => setSelectedTab(index)}
            className={
              selectedTab === index
                ? "subHeaderOptions-underline"
                : "subHeaderOptions-notUnderline"
            }
          >
            {option}
          </p>
        );
      })}
    </div>
  );
};

export default SubHeaderOptions;
