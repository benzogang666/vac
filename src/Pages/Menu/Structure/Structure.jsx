import Card_Menu from "../../../Components/Card-Menu/Card-Menu";

const Structure = ({ structure, activeNavigational, activeSubNavigation }) => {
  return (
    <>
      {activeSubNavigation &&
        structure[activeNavigational]?.[activeSubNavigation] && (
          <Card_Menu
            round={structure[activeNavigational][activeSubNavigation]}
          />
        )}
    </>
  );
};

export default Structure;