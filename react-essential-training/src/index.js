import React, { Component } from "react";
import { render } from "react-dom";

let footballData = {
  total: 50,
  home: 25,
  guest: 15,
  goal: 100,
};

const getPercent = (decimals) => {
  return decimals * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

const FootballDayCounter = ({ total, home, guest, goal }) => {
  return (
    <section>
      <div>
        <p>Total: {total}</p>
      </div>
      <div>
        <p>Home: {home}</p>
      </div>
      <div>
        <p>Guest: {guest}</p>
      </div>
      <div>
        <p>Goal progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

render(
  <FootballDayCounter
    total={footballData.total}
    home={footballData.home}
    guest={footballData.guest}
    goal={footballData.goal}
  />,
  document.getElementById("root")
);
