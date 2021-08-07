import React from "react";
import a from "../../img/c1.png";
import b from "../../img/m1.png";
import c from "../../img/p1.png";

export const options = [
  {
    a,
    b,
    c,
  },
];

class SelectBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "select" };
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    console.log(options);
    return (
      <div className="form-group">
        <label htmlFor="char select"></label>
        <select
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          className="form-control"
        >
          <option value="select">Select an Option</option>
          <option value={options}>ini</option>
          <option value={options}>mini</option>
          <option value={options}>maylii</option>
        </select>
      </div>
    );
  }
}

export default SelectBox;
