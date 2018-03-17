import * as React from 'react';
import { observer } from 'mobx-react';
import { Button } from 'react-bootstrap';

@observer
class ExercisesContainer extends React.Component {
  render() {
    const { store } = this.props;
    console.log(store, store.count, store.increment);
    return (
      <div>
        <div>{store.count} </div>
        <Button onClick={store.increment}> INC</Button>
      </div>
    );
  }
}
export default ExercisesContainer;
