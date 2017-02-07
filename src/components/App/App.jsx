import React from 'react';
import {Grid, Nav, Navbar, NavItem} from 'react-bootstrap'

import HelloWorldPage from 'components/HelloWorldPage';
import './bootstrap.css`';

function App() {
    return (
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <span>Hello World</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav navbar>
                        <NavItem>Время</NavItem>
                        <NavItem>Счетчики</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Grid>
                <HelloWorldPage />
            </Grid>
        </div>
    );
}

export default App;