import {reducer} from "./reducers";
import { createStore } from 'redux';

export let store = createStore(reducer);