const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Lalla",
      animal: "cat",
      breed: "Havanna",
    }),
    React.createElement(Pet, {
      name: "Panty",
      animal: "Dog",
      breed: "Hava",
    }),
    React.createElement(Pet, {
      name: "Camry",
      animal: "Ajax",
      breed: "Nana",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
