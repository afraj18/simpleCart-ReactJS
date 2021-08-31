
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';


class HomePage extends Component {



    render() {
        return (
            <React.Fragment>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Link-2" Disabled>
                            Option 2 Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </React.Fragment>
        );
    }
}

export default HomePage;