import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModel = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the required field" });
    } else {
      addTech({
        firstName,
        lastName
      });
      M.toast({ html: "Tech Added" });
    }
    console.log(firstName, lastName);
  };
  return (
    <Fragment>
      <div id="add-tech-modal" className="modal" style={style}>
        <div className="modal-content">
          <h6 className="grey-text">Add Technicians</h6>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">person</i>
              <input
                type="text"
                id="firstName"
                className="autocomplete"
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">person_outline</i>
              <input
                type="text"
                id="lastName"
                className="autocomplete"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect wave-black btn"
            onClick={submit}
          >
            Submit
          </a>
        </div>
      </div>
    </Fragment>
  );
};
const style = {
  width: "75%",
  heigth: "75%"
};
AddTechModel.propTypes = {
  addTech: PropTypes.func.isRequired
};
export default connect(
  null,
  { addTech }
)(AddTechModel);
