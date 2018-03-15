import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';
import ExerciseFilter from './ExerciseFilter';
import ExerciseList from './ExerciseList';
import { testdata } from './Testdata';

const rowMarginStyle = {
  marginTop: '2em'
};

const getCategories = exercises => {
  const categories = [];
  exercises.forEach(exercise => {
    if (categories.indexOf(exercise.Category) === -1) {
      categories.push(exercise.Category);
    }
  });
  return categories;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exercises: testdata, filteredExercises: testdata };
    this.selectCategory = this.selectCategory.bind(this);
    this.clearSelectedCategory = this.clearSelectedCategory.bind(this);
  }

  selectCategory(index, category) {
    this.setState({
      selectedCategory: category,
      filteredExercises: this.state.exercises.filter(
        ex => ex.Category === category
      )
    });
  }

  clearSelectedCategory() {
    this.setState({
      selectedCategory: '',
      filteredExercises: this.state.exercises
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={9} />
            <Col xs={6} md={3}>
              <ExerciseFilter
                categories={getCategories(testdata)}
                selectCategory={this.selectCategory}
                selectedCategory={this.state.selectedCategory}
                clearSelectedCategory={this.clearSelectedCategory}
              />
            </Col>
          </Row>
          <Row className="show-grid" style={rowMarginStyle}>
            <Col xs={12} md={12}>
              <ExerciseList exercises={this.state.filteredExercises} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
