function importAll(r) {
    let images = {};
    r.keys().map((item) => {
        images[item.replace('./', '')] = r(item); 
        return item; // resolve return error
    });
    return images;
}
  
const allImages = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

// use allImages['imageName.png'] to get image
export default allImages;