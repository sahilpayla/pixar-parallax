import { Parallax } from 'react-parallax';
import one from '../imgs/one.jpg'


const ImageOne = () => (
    <Parallax className='image' bgImage={one} bgImageAlt="the cat" strength={500}>
        <div className='content'>
            {/* <h2>TOY Story</h2> */}
            <span className='imgText' >
            Taking place in a world where toys come to life when humans are not present, the plot of Toy Story focuses on the relationship between an old-fashioned pull-string cowboy doll named Woody and a modern space cadet action figure, Buzz Lightyear, as Woody develops jealousy towards Buzz when he becomes their owner Andy's favorite toy.
            </span>
        </div>
    </Parallax>
);

export default ImageOne;