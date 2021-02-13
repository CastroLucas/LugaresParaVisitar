import React, { Fragment } from "react";
import Header from "./components/Header";
import FormPlaces from "./components/FormPlaces";
import CardPlaces from "./components/CardPlaces";

export default function App() {
  return (
    <Fragment>
          <Header />
          <FormPlaces edit={false} editObj={{
              nomePais: "",
              nomeLocal: "",
              nomeMeta: "",
              flag: "",
              id: -1

          }} />
      <CardPlaces />
    </Fragment>
  );
}
