import React from "react";
import Contributions from "./contributions";

class Contrib extends React.Component {
  render() {
    let projectitems;
    // console.log(this.props);
    if (this.props.projects) {
      projectitems = this.props.projects.map(project => {
        console.log(project);
        return <Contributions project={project} />;
      });
    }

    return (
      <div>
        <table border="1">
          <thead>
            <th>Beneficiary Number</th>
            <th>Hospital Number</th>
            <th>Occupation</th>
            <th>Amount</th>
            <th>Action</th>
          </thead>
          {projectitems}
        </table>
      </div>
    );
  }
}
export default Contrib;
