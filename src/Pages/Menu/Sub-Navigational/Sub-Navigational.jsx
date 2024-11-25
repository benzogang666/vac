import "./Sub-Navigational.css";

const Sub_Navigational = ({ subNavigational, activeNavigational, snap }) => {
  return (
    <>
      <div className="sub-navigational">
        {subNavigational[activeNavigational]
          ? subNavigational[activeNavigational].map((line) => (
              <div
                onClick={() => snap(line.reference)}
                className="sub-navigation"
                key={line.id}
              >
                {line.navigation}
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Sub_Navigational;