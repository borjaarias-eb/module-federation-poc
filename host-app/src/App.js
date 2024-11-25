import React from 'react';
import MicroAPP from "./federated/microApp";

export default () => {
  const [name, setName] = React.useState("Playground");

  return (
    <div>
      This is a text inside the app: {name}
      <div>
        <label>
          <span> name your app: </span>
          <input
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <hr />
      Below there's the content of the MicroApp
      <MicroAPP name={name} />
    </div>
  );
}
