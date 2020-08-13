import React from "react";

import GlobalStyles from "./styles/global";
import Section from "./components/Section";
import SideMenu from "./components/SideMenu";
import MenuForm from "./components/MenuForm";

import data from "./data";

function App() {
  return (
    <>
      <Section
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />
      <Section
        variant="beige"
        title={data[1].title}
        description={data[1].description}
      />
      <Section
        variant="white"
        title={data[2].title}
        description={data[2].description}
      />
      <Section
        variant="black"
        title={data[3].title}
        description={data[3].description}
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>
      <GlobalStyles />
    </>
  );
}

export default App;
