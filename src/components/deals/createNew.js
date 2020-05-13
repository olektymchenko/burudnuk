import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



const CreateNew = (props) => {

    return (
        <div style={{ marginTop: '3%' }}>
            <h3>Need ads? Create an auction!</h3>
            <Tabs defaultActiveKey="facebook" id="uncontrolled-tab-example">
                <Tab eventKey="facebook" title="Facebook">
                    <p>Facebook</p>
                </Tab>
                <Tab eventKey="Instagram" title="Instagram">
                    <p>Instagram</p>
                </Tab>
                <Tab eventKey="TikTok" title="TikTok">
                    <p>TikTok</p>
                </Tab>
                <Tab eventKey="Telegram" title="Telegram">
                    <p>Telegram</p>
                </Tab>
            </Tabs>
        </div>
    )
}

export default CreateNew