import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(50 115 220)`,
      marginBottom: `1.45rem`,
      textAlign: `right`,
      background: "#12c2e9",
      background:
        "-webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9)",
      background: "linear-gradient(to right, #f64f59, #c471ed, #12c2e9)",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, fontSize: 1.75 + `rem` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
