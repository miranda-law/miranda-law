import readingList from './readingListData.json';

const mangaData = readingList.filter( elem => elem.medium === "manga");

export default mangaData;