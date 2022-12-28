import React from "react";
import "@esri/calcite-components/dist/components/calcite-modal";
import "@esri/calcite-components/dist/components/calcite-tile";
import "@esri/calcite-components/dist/components/calcite-tile-select";
import "@esri/calcite-components/dist/components/calcite-tile-select-group";
import "@esri/calcite-components/dist/components/calcite-radio-button";

import "@esri/calcite-components/dist/calcite/calcite.css";

function App() {
  return (
    <calcite-tile-select-group>
      <calcite-tile-select
        heading="Option 1"
        name="cloud-selection"
        input-enabled
        width="full"
        type="radio"
        value="1"
      ></calcite-tile-select>
      <calcite-tile-select
        heading="Option 2"
        name="cloud-selection"
        input-enabled
        width="full"
        type="radio"
        value="2"
      ></calcite-tile-select>
    </calcite-tile-select-group>
  );
}

export default App;
