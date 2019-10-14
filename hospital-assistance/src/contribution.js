import React, { Component } from "react";
import "./style.css";

export default class Contribution extends Component {
  state = {
    benefitNo: "",
    hospitalNo: "",
    occupation: "",
    amount: "",
    contribution: []
  };
  monitor = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addItem = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contribution: prevState.contribution.concat({
        benefitNo: this.state.benefitNo,
        hospitalNo: this.state.hospitalNo,
        occupation: this.state.occupation,
        amount: this.state.amount
      })
    }));
  };

  delItem = del => {
    let itemToDel = this.state.contribution.filter(item => item !== del);
    this.setState({ contribution: itemToDel });
  };
  static defaultProps = {
    someBeneficiaries: [12334, 44443, 44432, 22222, 33332, 33445, 55522],
    business: [
      "Farming",
      "Trader",
      "Civil Servant",
      "Public Servant",
      "Enterprenuer",
      "Others"
    ]
  };

  render() {
    let Beneficiaries = this.props.someBeneficiaries.map(ben => {
      return (
        <option key={ben} value={ben}>
          {ben}
        </option>
      );
    });
    let business = this.props.business.map(biss => {
      return (
        <option key={biss} value={biss} required>
          {biss}
        </option>
      );
    });
    return (
      <div>
        <div className="wrapper">
          <div className="inner">
            <div className="image-holder">
              <img src="images/bg.jpg" width="503px" height="500px" alt="" />
            </div>
            <form action="" onSubmit={this.addItem}>
              <h3>Contributions</h3>
              <div className="form-wrapper">
                <select
                  id=""
                  className="form-control"
                  name="benefitNo"
                  value={this.state.value}
                  required=""
                  type="number"
                  onChange={this.monitor}
                >
                  <option disabled selected>
                    Beneficiary Number
                  </option>
                  {Beneficiaries}
                </select>
                <i className="zmdi zmdi-caret-down" id="down"></i>
              </div>
              <div className="form-wrapper">
                <input
                  type="Number"
                  placeholder="Hospital Number"
                  className="form-control"
                  name="hospitalNo"
                  value={this.state.value}
                  onChange={this.monitor}
                />
                <i className="zmdi zmdi-hospital"></i>
              </div>
              <div>
                <select
                  id=""
                  className="form-control"
                  name="occupation"
                  value={this.state.value}
                  required
                  onChange={this.monitor}
                >
                  <option disabled selected>
                    Occupations
                  </option>
                  {business}
                </select>
              </div>
              <div className="form-wrapper">
                <input
                  type="Number"
                  placeholder="Amount"
                  className="form-control"
                  name="amount"
                  required
                  value={this.state.value}
                  onChange={this.monitor}
                />
                <i className="zmdi zmdi-money"></i>
              </div>
              <button>
                Contribute
                <i className="zmdi zmdi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
        <table className="table1" align="center">
          <thead>
            <tr>
              <th>Beneficiary Number</th>
              <th>Hospital Number</th>
              <th>Occupation</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          {this.state.contribution.map((i, x) => (
            <tbody>
              <tr key={x}>
                <td>{i.benefitNo}</td>
                <td>{i.hospitalNo}</td>
                <td>{i.occupation}</td>
                <td>{i.amount}</td>
                <td>
                  <button onClick={() => this.delItem(i)}>Remove</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
