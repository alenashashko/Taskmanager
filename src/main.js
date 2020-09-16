import SiteMenuView from './view/site-menu.js';
import FilterView from './view/filter.js';
import {generateTask} from './mock/task.js';
import {generateFilter} from "./mock/filter.js";
import {render} from "./utils/render.js";
import BoardPresenter from './presenter/board.js';

const TASK_COUNT = 22;

const mainElement = document.querySelector(`main`);
const headerElement = mainElement.querySelector(`.main__control`);

const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

const boardPresenter = new BoardPresenter(mainElement);

render(headerElement, new SiteMenuView());
render(mainElement, new FilterView(filters));

boardPresenter.init(tasks);
