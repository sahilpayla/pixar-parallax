import { Parallax } from 'react-parallax';
import five from '../imgs/five.jpg'


const ImageFive = () => (
    <Parallax className='image'bgImage={five} bgImageAlt="the cat" strength={500}>
        <div className='content'>
            <span className='imgText'>
            On the day of his wedding with Elastigirl,Mr. Incredible rescues Oliver Sansweet from committing suicide by tackling him through a window of a skyscraper. Discovering supervillain Bomb Voyage robbing the building, Bob confronts him, but is distracted by his devoted fan Buddy Pine pretending to be his sidekick "Incrediboy". After Bob rejects Buddy, Bomb Voyage clips a bomb to Buddy's cloak. Bob pulls the bomb off, but it destroys an el-train track, though Bob manages to stop the train from falling off.
            </span>
        </div>
    </Parallax>
);

export default ImageFive;