import readingList from './readingListData.json';

const webtoonData = readingList.filter( elem => elem.medium === "webtoon");

export default webtoonData;