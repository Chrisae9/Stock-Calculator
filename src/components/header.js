import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { Menu } from "semantic-ui-react";

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
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

      <Menu>
        {menuLinks.map(link => (
          <Link to={link.link}>
            <Menu.Item>{link.name}</Menu.Item>
          </Link>
        ))}
      </Menu>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
