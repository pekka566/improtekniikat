import { observable, computed, action, decorate } from 'mobx';

class ExercisesStore {
  @observable count = 0;

  @computed
  get isOdd() {
    return this.count % 2 === 1;
  }

  @action
  increment() {
    this.count++;
  }
  @action
  decrement() {
    if (this.count > 0) this.count--;
  }
}

const exercisesStore = new ExercisesStore();

export default exercisesStore;
