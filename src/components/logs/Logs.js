import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLogs } from "../../actions/logActions";
import { PropTypes } from "prop-types";
import LogItem from "./LogItems";
import PreLoader from "../layouts/PreLoader";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) return <PreLoader></PreLoader>;
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <center>
          <p>Logs are empty</p>
        </center>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id}></LogItem>)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
