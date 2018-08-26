import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name }) => <h1>`Hi ${name}`</h1>;

MyComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default MyComponent;
