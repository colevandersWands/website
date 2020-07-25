import React from "react"
import PropTypes from "prop-types"

import { StyledNavLink } from "./style"

const NavLink = ({ children, ...props }) => {
  return <StyledNavLink {...props}>{children}</StyledNavLink>
}

NavLink.propTypes = {
  children: PropTypes.oneOf(PropTypes.string, PropTypes.node),
}

NavLink.defaultProps = {}

export default NavLink