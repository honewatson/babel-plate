/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class NavigationHeader extends Component {
  constructor (...args) {
    super(...args);
  }

  componentDidMount () {
    document.body.style.paddingTop = '50px';
  }

  render () {
    let { fixedTop = false, brand } = this.props;
    return (
      <Navbar inverse fixedTop={fixedTop}>
        <Navbar.Header>
          <IndexLinkContainer to={ { pathname: '/' } }>
            <a href="#">
              <Navbar.Brand>
                {brand}
              </Navbar.Brand>
            </a>
          </IndexLinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <IndexLinkContainer to={ { pathname: '/' } }>
              <NavItem eventKey={2}>{'Home'}</NavItem>
            </IndexLinkContainer>
            <LinkContainer to={ { pathname: '/about' } }>
              <NavItem eventKey={3}>{'About'}</NavItem>
            </LinkContainer>
            <LinkContainer to={ { pathname: '/contact' } }>
              <NavItem eventKey={4}>{'Contact'}</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavigationHeader.propTypes = {
  fixedTop: PropTypes.bool,
  brand: PropTypes.string.isRequired
};

export default NavigationHeader;
