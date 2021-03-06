import React, { useState, useEffect, useRef, Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import Nav from 'react-bootstrap/Nav'
import { CountryDropdown } from 'react-country-region-selector';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faFrown } from '@fortawesome/free-solid-svg-icons';
import Comments from './comments';
import Likes from './likes';
import Dislikes from './dislikes';
import { connect } from 'react-redux';
import { updateFacebookData } from '../../redux/actions/userActions';



const FacebookProfile = (props) => {
    /* States for dialog */
    const [showComments, setShowComments] = useState(false);
    const handleCloseComments = () => setShowComments(false);
    const handleShowComments = () => setShowComments(true);

    const [showLikes, setShowLikes] = useState(false);
    const handleCloseLikes = () => setShowLikes(false);
    const handleShowLikes = () => setShowLikes(true);

    const [showDislikes, setShowDislikes] = useState(false);
    const handleCloseDislikes = () => setShowDislikes(false);
    const handleShowDisLikes = () => setShowDislikes(true);

    const [showUpdatedata, setUpdatedata] = useState(false);
    const handleCloseUpdatedata = () => setUpdatedata(false);
    const handleShowUpdatedata = () => setUpdatedata(true);

    /* States for updated profile data */

    const [bodyData, setBody] = useState('');
    const handleUpdateBody = (event) => setBody(event.target.value)
    const [accountLinkData, setAccountLink] = useState('');
    const handleAccountLink = (event) => setAccountLink(event.target.value)
    const [dayVisitorsData, setDayVisitors] = useState('');
    const handleDayVisitors = (event) => setDayVisitors(event.target.value)
    const [followersData, setFollowers] = useState('');
    const handleFollowers = (event) => setFollowers(event.target.value)
    const [barterData, setBarter] = useState(false);
    const handleBarter = (event) => setBarter(event.target.value)

    const [countryData, setCountry] = useState('Afganistan');
    const handleUpdateCountry = (value) => setCountry(value);

    const [topicData, setTopic] = useState('Fashion');
    const handleUpdateTopic = (event) => setTopic(event.target.value);

    const submitUserData = () => {
        let barterUser;
        if (barterData === 'true')
            barterUser = true;
        else if (barterData === 'false')
            barterUser = false;
        else if (barterData === false)
            barterUser = false;
        const user = {
            body: bodyData,
            accountLink: `https://${accountLinkData}`,
            dayVisitors: dayVisitorsData,
            followers: followersData,
            barter: barterUser,
            country: countryData,
            topic: topicData
        }
        props.updateFacebookData(user, props.data.userdata.userId);
    }


    const { mainInfo: { commentCount, accountLink, barter, dealsCount, dayVisitors, dislikeCount, likeCount, body, followers, country, topic, ranking } } = props.data.sellerdata;
    const errors = useRef(false);

    useEffect(() => {
        const error = props.errors.errors;
        errors.current = error
    }, [props])
    return (
        <Fragment>
            <Card style={{ marginTop: '3%', marginBottom: '50px', width: '100%' }}>
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-center'>Your {props.seller} account</Card.Title>
                    <Card.Text>
                        {body}
                        <div style={{ fontWeight: 'bold', textAlign: 'right' }}>Ranking - {ranking} points.</div>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Nav.Link target="_blank" href={accountLink}>{accountLink}</Nav.Link></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Location:</div><div><h6>{country}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Main topic:</div><div><h6>{topic}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Followers:</div><div><h6>{followers}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Visitors per day:</div><div><h6>{dayVisitors}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Deals Done:</div><div><h6>{dealsCount}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Comments:</div><div><h6>{commentCount}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Likes:</div><div><h6>{likeCount}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Dislikes:</div><div><h6>{dislikeCount}</h6></div></ListGroupItem>
                    {barter === true ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Barter: <FontAwesomeIcon icon={faExchangeAlt} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Barter: <FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                </ListGroup>
                <Card.Body>
                    <Card.Link onClick={handleShowComments} href="#">Comments</Card.Link>
                    <Card.Link href="#" onClick={handleShowLikes}>Likes</Card.Link>
                    <Card.Link href="#" onClick={handleShowDisLikes}>Dislikes</Card.Link>
                    <Card.Link href="#" onClick={handleShowUpdatedata}>Update</Card.Link>
                </Card.Body>
            </Card>
            {/* Show comments dialog */}
            <Modal show={showComments} onHide={handleCloseComments}>
                <Modal.Header closeButton>
                    <Modal.Title>Comments</Modal.Title>
                </Modal.Header>
                <Comments comments={props.data.sellerdata} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseComments}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
            {/* Show likes dialog */}
            <Modal show={showLikes} onHide={handleCloseLikes}>
                <Modal.Header closeButton>
                    <Modal.Title>Likes</Modal.Title>
                </Modal.Header>
                <Likes likes={props.data.sellerdata} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLikes}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
            {/* Show dislikes dialog */}
            <Modal show={showDislikes} onHide={handleCloseDislikes}>
                <Modal.Header closeButton>
                    <Modal.Title>Dislikes</Modal.Title>
                </Modal.Header>
                <Dislikes dislikes={props.data.sellerdata} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDislikes}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
            {/* Update data dialog */}
            <Modal show={showUpdatedata} onHide={handleCloseUpdatedata}>
                <Modal.Header closeButton>
                    <Modal.Title>Update profile data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <label htmlFor="basic-url">Your page url</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    https://
      </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" value={accountLinkData} onChange={handleAccountLink} />
                            {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.accountLink}</Form.Text>) : ""}
                        </InputGroup>
                        <Form.Group controlId="formUserFollowers">
                            <Form.Label>Followers amount</Form.Label>
                            <Form.Control type="text" name="followers" value={followersData} onChange={handleFollowers} placeholder=" Enter amount of your page followers, e.g. 685" />
                            {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.followers}</Form.Text>) : ""}
                        </Form.Group>
                        <Form.Group controlId="formUserVisitors">
                            <Form.Label>Daily visitors amount</Form.Label>
                            <Form.Control type="text" name="dayVisitors" value={dayVisitorsData} onChange={handleDayVisitors} placeholder="Enter amount of your page daily visitors, e.g. 70" />
                            {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.dayVisitors}</Form.Text>) : ""}
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Profile description</Form.Label>
                            <Form.Control as="textarea" rows="3" name="body" value={bodyData} onChange={handleUpdateBody} placeholder="Describe your profile benefits for another users" />
                            {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.body}</Form.Text>) : ""}
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Barter</Form.Label>
                            <Form.Control as="select" onChange={handleBarter}>
                                <option value={false} name="barter">No</option>
                                <option value={true} name="barter">Yes</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Location</Form.Label>
                            <CountryDropdown
                                value={countryData}
                                onChange={(value) => handleUpdateCountry(value)}
                                style={{ width: "100%" }}
                                className="form-control"
                                defaultOptionLabel="Afganistan"
                            />
                            {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.country}</Form.Text>) : ""}
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                            <Form.Label>Topic</Form.Label>
                            <Form.Control as="select" onChange={handleUpdateTopic}>
                                <option value="Fashion">Fashion</option>
                                <option value="Food">Food</option>
                                <option value="Design">Design</option>
                                <option value="Travel">Travel</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Nature">Nature</option>
                                <option value="Inspirations">Inspiration</option>
                                <option value="Health">Health</option>
                                <option value="Party">Party</option>
                                <option value="Art">Art</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {props.loading.loading === false ? <Button variant="secondary" onClick={handleCloseUpdatedata}>Close</Button> : null}
                    {props.loading.loading === false ? <Button variant="primary" onClick={submitUserData}>Save Changes</Button> : <Spinner animation="border" />}
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    loading: state.UI,
    errors: state.UI
})
export default connect(mapStateToProps, { updateFacebookData })(FacebookProfile);