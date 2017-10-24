import { tabs } from './tabs.json';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchData = () => delay(500).then(() => tabs);
