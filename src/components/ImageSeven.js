import { Parallax } from 'react-parallax';
import seven from '../imgs/seven.jpg'


const ImageSeven = () => (
    <Parallax className='image'bgImage={seven} bgImageAlt="the cat" strength={800}>
        <div className='content'>
            <span className='imgText'>
            Cartoon Network's current original programming includes such shows as The Amazing World of Gumball, Craig of the Creek, Teen Titans Go!, and We Baby Bears. The network's original programming is produced at Cartoon Network Studios, while other shows have either been co-produced with or acquired from other studios, including the affiliated Warner Bros. Animation. In the past, Cartoon Network has also produced and aired live-action and animated hybrid programming.
            </span>
        </div>
    </Parallax>
);

export default ImageSeven;