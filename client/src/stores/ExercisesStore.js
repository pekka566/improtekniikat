import { observable, computed, action, decorate } from 'mobx';

class ExercisesStore {
  @observable count = 0;
  @computed
  get isOdd() {
    return this.count % 2 === 1;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}

export default ExercisesStore;
