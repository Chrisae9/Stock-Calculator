import { navigate, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { Menu } from "semantic-ui-react";

const Header = ({ siteTitle, menuLinks, page }) => (
  <header
    style={{
      background: `linear-gradient(to right bottom, #430089, #82ffa1)`,
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

      <Menu stackable>
        {menuLinks.map(link => (
          <Menu.Item
            active={"/" + page === link.link}
            onClick={() => navigate(link.link)}
          >
            {link.name}
          </Menu.Item>
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
