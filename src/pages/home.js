import React, { Component } from 'react';
import './styles/home.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


class home extends Component {
    render() {
        return (
            <Row className="Background">
                <Col>
                </Col>
                <Col className="second-header-colum">
                    <Nav.Item>
                        <Nav.Link href="/register"> <Button className="" variant="primary" size="lg">Try now!</Button>{' '}</Nav.Link>
                    </Nav.Item>

                </Col>
                <Col>
                </Col>
            </Row>
        )
    }
}

export default home
