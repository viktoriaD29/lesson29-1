export const addImage = (imgSrc, callback) => {
  const container = document.querySelector('.page');
  const imgElem = document.createElement('img');
  container.append(imgElem);
  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;
  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };
  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed...'));
};
const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};
const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
//addImage(imgSrc, onImageLoaded);
