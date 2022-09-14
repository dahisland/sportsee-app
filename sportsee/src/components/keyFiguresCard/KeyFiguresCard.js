import React from "react";
import PropTypes from "prop-types";

const KeyFiguresCard = ({ image, name, value }) => {
  return (
    <div className="keyFigures_card">
      <picture>
        <img src={"../../img/" + image} alt={"icon " + name}></img>
      </picture>
      <div className="keyFiguresCard_data">
        <p className="keyFiguresCard_value">{value}</p>
        <p className="keyFiguresCard_type">{name}</p>
      </div>
    </div>
  );
};

KeyFiguresCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default KeyFiguresCard;
