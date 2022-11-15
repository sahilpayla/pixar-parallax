import { Parallax } from 'react-parallax';
import nine from '../imgs/nine.jpg'


const ImageNine = () => (
    <Parallax className='image'bgImage={nine} bgImageAlt="the cat" strength={700}>
        <div className='content'>
            <span className='imgText'>
            "Dragon Ball Z" follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. "Dragon Ball Z" teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.
            </span>
        </div>
    </Parallax>
);

export default ImageNine;