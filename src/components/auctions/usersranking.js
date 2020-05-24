import React, { Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import userReducer from '../../redux/reducers/userReducer';

const Ranking = (props) => {
    let usersRanking;
    const authenticated = props.authenticated;
    if (props.users !== null && props.users.length > 0) {
        usersRanking = props.users.map((element, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td><Nav.Link href={`/users/${element.id}`} style={{ padding: 0 }}>{element.nickname}</Nav.Link></td>
                <td>{element.followers}</td>
                <td>{element.commentCount}</td>
                <td>{element.likeCount}</td>
                <td>{element.dislikeCount}</td>
                <td>{element.ranking}</td>
            </tr>
        })
    } else {
        return <div className="text-center"><h4>Click 'Check' to start!</h4></div>
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nikcname</th>
                    <th>Followers</th>
                    <th>Comments</th>
                    <th>Likes</th>
                    <th>Dislikes</th>
                    <th>Ranking</th>
                </tr>
            </thead>
            <tbody>
                {usersRanking}
            </tbody>
        </Table>
    )
}

const mapStateToProps = state => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps, null)(Ranking);
