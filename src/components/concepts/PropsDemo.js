import { useState } from "react";
import FunctionalComponentDemo from "./FunctionalComponents/FunctionalComponentDemo";

const PropsDemo = () => {
  const [color, setColor] = useState("whie");
  const [backgroundColor, setBackgroundColor] = useState("purple");
  const [borderRadius, setBorderRadius] = useState("5px");
  const [borderStyle, setBorderStyle] = useState("dashed");
  const [display, setDisplay] = useState("inline-block");
  const [width, setWidth] = useState("350px");
  const [textAlign, setTextAlign] = useState("center");

  let styles = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    display: display,
    width: width,
    textAlign: textAlign,
  };

  const toggleColor = () => {
    color === "white" ? setColor("pink") : setColor("white");
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <div style={styles}>
          <FunctionalComponent
            string="will this display?"
            function={toggleColor}
          />
          <FunctionalComponent
            string="props are pretty cool"
            function={toggleColor}
          />
          <FunctionalComponent
            string="You can send date from one component ..."
            function={toggleColor}
          />
          <FunctionalComponent string="... to another" function={toggleColor} />
        </div>
      </div>
    </div>
  );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
  return (
    <div>
      <p>{props.string}</p>
      <button onClick={props.function}>Press Me!</button>
    </div>
  );
};

const TinyComponent = (props) => {
  return (
    <div>
      <p>The current style is : {props.selectedStyle}</p>
    </div>
  );
};
