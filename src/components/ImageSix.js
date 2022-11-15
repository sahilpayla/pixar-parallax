import { Parallax } from 'react-parallax';
import six from '../imgs/six.jpg'


const ImageSix = () => (
    <Parallax className='image' blur={5} bgImage={six} bgImageAlt="the cat" strength={700}>
        <div className='content'>
            <span className='imgText' style={{color:"black"}}>
            Pixar animation Studio commonly known as P I X A R is an American computer animation studio known for its critically and commercially successful computer animated feature films. It is based in Emeryville, California, United States. Since 2006, Pixar has been a subsidiary of Walt Disney Studios, which is another studio owned by The Walt Disney Company.
            </span>
        </div>
    </Parallax>
);

export default ImageSix;