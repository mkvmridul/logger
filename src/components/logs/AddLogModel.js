import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModel = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState("");

  const submit = () => {
    if (message === "" || technician === "") {
      M.toast({ html: "Please enter the required field" });
    } else {
      const newLog = {
        message: message,
        attention: attention,
        date: new Date(),
        tech: technician
      };
      addLog(newLog);
      console.log(newLog);
      M.toast({ html: `New Log added by ${technician}` });
    }
  };
  return (
    <Fragment>
      <div id="add-log-modal" className="modal" style={style}>
        <div className="modal-content">
          <h6 className="grey-text">Add Logs</h6>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">textsms</i>
              <input
                type="text"
                id="message"
                className="autocomplete"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">menu</i>
              <select
                name="tech"
                value={technician}
                onChange={e => setTechnician(e.target.value)}
              >
                <option value="" disabled>
                  Select Technician
                </option>
                <option value="Ram">Ram</option>
                <option value="Shyam<">Shyam</option>
                <option value="Ghanshyam">Ghanshyam</option>
              </select>
              <label>Select Technician</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <div className="switch col s12">
                <i className="material-icons prefix">blur_on</i>
                <label>
                  Do Require Attention!!!
                  <input
                    type="checkbox"
                    name="attention"
                    checked={attention}
                    value={attention}
                    onChange={e => setAttention(!attention)}
                  />
                  <span className="lever"></span>
                </label>
              </div>
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
AddLogModel.propTypes = {
  addLog: PropTypes.func.isRequired
};
export default connect(
  null,
  { addLog }
)(AddLogModel);
