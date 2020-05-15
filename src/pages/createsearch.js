import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/Spinner'
import SearchForm from '../components/deals/searchForm';
import { connect } from 'react-redux';

const CreateSearchAuction = (props) => {

    return (
        <Row className="justify-content-center">
            <Col className="text-center" xs={8} md={6} lg={4} xl={4}>
                {props.data.loading === false ? (
                    <div style={{ marginTop: '3%' }}>
                        <h3>Need ads? Create an auction!</h3>
                        <Tabs defaultActiveKey="facebook" id="uncontrolled-tab-example">
                            {/* If seller account active, u can start auction */}
                            {props.data.userdata.facebook === true ? (<Tab eventKey="facebook" title="Facebook">
                                < SearchForm data={props.data} app="Facebook" />
                            </Tab>) : (<Tab eventKey="facebook" title="Facebook" disabled>
                                < SearchForm data={props.data} app="Facebook" />
                            </Tab>)}

                            {props.data.userdata.instagram === true ? (<Tab eventKey="Instagram" title="Instagram">
                                < SearchForm data={props.data} app="Instagram" />
                            </Tab>) : (<Tab eventKey="Instagram" title="Instagram" disabled>
                                < SearchForm data={props.data} app="Instagram" />
                            </Tab>)}
                            {props.data.userdata.tiktok === true ? (<Tab eventKey="TikTok" title="TikTok">
                                < SearchForm data={props.data} app="TikTok" />
                            </Tab>) : (<Tab eventKey="TikTok" title="TikTok" disabled>
                                < SearchForm data={props.data} app="TikTok" />
                            </Tab>)}
                            {props.data.userdata.telegram === true ? (<Tab eventKey="Telegram" title="Telegram">
                                < SearchForm data={props.data} app="Telegram" />
                            </Tab>) : (<Tab eventKey="Telegram" title="Telegram" disabled>
                                < SearchForm />
                            </Tab>)}
                        </Tabs>
                    </div>
                ) : (<Spinner animation="border" />)
                }
            </Col>
        </Row>
    )
}

const mapStateToProps = state => ({
    data: state.user,
    UI: state.UI
})

export default connect(mapStateToProps, null)(CreateSearchAuction)
