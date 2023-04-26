import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import ImageBox from "./Imagebox";

class App extends React.Component {
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  render() {
    return (
      <div id="root">
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div>
            <div className="handle">
              <ImageBox />
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  ReactDOM.render(<App />, document.getElementById("root"));
});

export default App;
