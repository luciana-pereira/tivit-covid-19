import React from "react";

export const Text = () => {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return (
    <>
      <h1>
        <b>COVID-19</b>
      </h1>
      <p>
        Números relacionados a quantidade de casos identificados até o dia: {" "}
        <b>
          {date}/{month}/{year}
        </b>
      </p>
    </>
  );
};

export default Text;
