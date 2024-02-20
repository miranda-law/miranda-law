import readingList from './readingListData.json';

const manhwaData = readingList.filter( elem => elem.medium === "manhwa");

export default manhwaData;