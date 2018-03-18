import React from 'react';

import { storiesOf } from '@storybook/react';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExerciseFilter from '../components/ExerciseFilter';
import ExerciseList from '../components/ExerciseList';
import { testdata } from '../components/Testdata';
import ExcercisesContainer from '../containers/ExcercisesContainer.js';
import ExercisesStore from '../stores/ExercisesStore';

storiesOf('App', module).add('app', () => <App />);
storiesOf('Header', module).add('header', () => <Header />);
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
storiesOf('ExcercisesContainer', module).add('excercisesContainer', () => (
  <ExcercisesContainer store={ExercisesStore} />
));
