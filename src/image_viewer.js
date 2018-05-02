import '../styles/image_viewer.css';
import medium from '../assets/medium.jpeg';
import big from '../assets/big.jpg';

export default () => {
    const image = document.createElement('img');
    image.src = medium;
    const bigimage = document.createElement('img');
    bigimage.src = big;
    document.body.appendChild(image);
    document.body.appendChild(bigimage);
};