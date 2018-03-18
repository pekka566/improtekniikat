import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'react-bootstrap';

//@inject('store')
@observer
class ExercisesContainer extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <div>
          {store.count} {store.isOdd ? 'Jea' : 'No'}
        </div>
        <Button onClick={() => store.increment()}> INC</Button>
        <Button onClick={() => store.decrement()}> DEC</Button>
      </div>
    );
  }
}
export default ExercisesContainer;
