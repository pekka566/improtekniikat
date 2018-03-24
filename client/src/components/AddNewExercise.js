import React from 'react';
import history from '../history';

import {
  Grid,
  Row,
  Col,
  ButtonToolbar,
  ButtonGroup,
  Button
} from 'react-bootstrap';

class AddNewExercise extends React.Component {
  constructor(props) {
    super(props);
    this.goHome.bind(this);
  }

  goHome() {
    history.push('/home');
  }
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              Todo!
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button onClick={this.goHome}>Palaa takaisin</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AddNewExercise;
