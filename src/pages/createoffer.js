import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/Spinner'
import OfferForm from '../components/deals/offerForm';
import { connect } from 'react-redux';

const CreateOfferPage = (props) => {
    return (
        <Row className="justify-content-center">
            <Col className="text-center" xs={8} md={6} lg={4} xl={4}>
                {props.UI.loading === false ? (
                    <div style={{ marginTop: '5%' }}>
                        <h3>Sell your ads! Create an auction!</h3>
                        <Tabs defaultActiveKey="facebook" id="uncontrolled-tab-example">
                            {/* If seller account active, u can start auction */}
                            {props.data.userdata.facebook === true ? (<Tab eventKey="facebook" title="Facebook">
                                < OfferForm data={props.data} app="Facebook" />
                            </Tab>) : (<Tab eventKey="facebook" title="Facebook" disabled>
                                < OfferForm data={props.data} app="Facebook" />
                            </Tab>)}

                            {props.data.userdata.instagram === true ? (<Tab eventKey="Instagram" title="Instagram">
                                < OfferForm data={props.data} app="Instagram" />
                            </Tab>) : (<Tab eventKey="Instagram" title="Instagram" disabled>
                                < OfferForm data={props.data} app="Instagram" />
                            </Tab>)}
                            {props.data.userdata.tiktok === true ? (<Tab eventKey="TikTok" title="TikTok">
                                < OfferForm data={props.data} app="TikTok" />
                            </Tab>) : (<Tab eventKey="TikTok" title="TikTok" disabled>
                                < OfferForm data={props.data} app="TikTok" />
                            </Tab>)}
                            {props.data.userdata.telegram === true ? (<Tab eventKey="Telegram" title="Telegram">
                                < OfferForm data={props.data} app="Telegram" />
                            </Tab>) : (<Tab eventKey="Telegram" title="Telegram" disabled>
                                < OfferForm data={props.data} app="Telegram" />
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

export default connect(mapStateToProps, null)(CreateOfferPage)

