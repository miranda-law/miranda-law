import readingList from './readingListData.json';

const manhuaData = readingList.filter( elem => elem.medium === "manhua");

export default manhuaData;