import { createStore } from 'redux';
import rootRouter from '../reducers';

const store = createStore(rootRouter);

export default store;
