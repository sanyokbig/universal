import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Grid, Nav, Navbar, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';


import './bootstrap.css';

const propTypes = {
    children: PropTypes.node
};

class App extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Hello World</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav navbar>
                            <LinkContainer to="/time">
                                <NavItem>Время</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/counters">
                                <NavItem>Счетчики</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;