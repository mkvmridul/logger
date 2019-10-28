import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getTechs } from "../../actions/techActions";
import TechItemModal from "./TechItemModal";

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    console.log(techs);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div id="tech-list-modal" className="modal" style={style}>
        <div className="modal-content">
          <h6 className="grey-text">Technicians</h6>
          <ul className="collection with-header">
            {!loading &&
              techs !== null &&
              techs.map(tech => (
                <TechItemModal tech={tech} key={tech.id}></TechItemModal>
              ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
const style = {
  width: "75%",
  heigth: "75%"
};

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});
export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal);
