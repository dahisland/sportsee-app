import React from "react";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";

const Homepage = () => {
  return (
    <div className="page_container">
      <HorizontalNav />
      <VerticalNav />
      <main className="pageHome_main">
        <section className="pageHomeMain_welcome">
          <h1>
            Bonjour <span>Name</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
