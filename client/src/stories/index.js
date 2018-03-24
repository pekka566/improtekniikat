import React from 'react';

import { storiesOf } from '@storybook/react';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExerciseFilter from '../components/ExerciseFilter';
import ExerciseList from '../components/ExerciseList';
import Callback from '../components/Callback/Callback';
import AddNewExercise from '../components/AddNewExercise';
import { testdata } from '../components/Testdata';
import ExcercisesContainer from '../containers/ExcercisesContainer.js';
import ExercisesStore from '../stores/ExercisesStore';

class AuthMockLogged {
  isAuthenticated() {
    return true;
  }
  username() {
    return 'Testi Henkilö';
  }
}

class AuthMockNotLogged {
  isAuthenticated() {
    return false;
  }
  username() {
    return undefined;
  }
}

const authLogged = new AuthMockLogged();
const authNotLogged = new AuthMockNotLogged();

storiesOf('App', module).add('app, not logged', () => (
  <App auth={authNotLogged} />
));
storiesOf('App', module).add('app, logged', () => <App auth={authLogged} />);

storiesOf('Header', module).add('header, not logged', () => (
  <Header auth={authNotLogged} />
));
storiesOf('Header', module).add('header, logged', () => (
  <Header auth={authLogged} />
));

storiesOf('ExerciseFilter', module).add('exerciseFilter', () => (
  <ExerciseFilter
    selectCategory={() => console.log('select category!')}
    clearSelectedCategory={() => console.log('clear selected category!')}
    categories={['Test1', 'Test2']}
  />
));
storiesOf('ExerciseList', module).add('exerciseList', () => (
  <ExerciseList exercises={testdata} />
));
storiesOf('Footer', module).add('footer', () => <Footer />);
storiesOf('Callback', module).add('callback', () => <Callback />);
storiesOf('AddNewExercise', module).add('addNewExercise', () => (
  <AddNewExercise />
));
storiesOf('ExcercisesContainer', module).add('excercisesContainer', () => (
  <ExcercisesContainer store={ExercisesStore} />
));
