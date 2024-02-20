import readingList from './readingListData.json';

const animeData = readingList.filter( elem => elem.medium === "anime");

export default animeData;