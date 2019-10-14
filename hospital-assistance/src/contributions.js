import React from "react";

export default class Contributions extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <td>{this.props.project.benefitNo}</td>
            <td>{this.props.project.hospitalNo}</td>
            <td>{this.props.project.occupation}</td>
            <td>{this.props.project.amount}</td>
            <td>
              <button>Remove</button>
            </td>
          </tbody>
        </table>
      </div>
    );
  }
}
