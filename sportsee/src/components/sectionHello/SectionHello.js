import React from "react";
import PropTypes from "prop-types";

const SectionHello = ({ name }) => {
  return (
    <section className="pageHomeMain_hello">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

SectionHello.propTypes = {
  name: PropTypes.string,
};

export default SectionHello;
