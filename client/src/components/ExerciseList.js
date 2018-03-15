import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

const ExerciseList = props => {
  const cards = props.exercises.map(exercise => {
    return (
      <Col sm={6} md={3} key={exercise.id}>
        <h4>{exercise.Name}</h4>
        <div>{exercise.Description}</div>
        <div>
          <strong>Kategoria: {exercise.Category}</strong>
        </div>
      </Col>
    );
  });
  return (
    <Grid>
      <Row className="show-grid">{cards}</Row>
    </Grid>
  );
};

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired
};

export default ExerciseList;
