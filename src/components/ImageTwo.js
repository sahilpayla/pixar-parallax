import { Parallax } from 'react-parallax';
import two from '../imgs/two.jpg'


const ImageTwo = () => (
    <Parallax className='image'bgImage={two} bgImageAlt="the cat" strength={600}>
        <div className='content'>
            <span className='imgText'>
            Welcome to Hotel Transylvania, Dracula’s lavish five-stake resort, where monsters and their families can live it up and no humans are allowed. One special weekend, Dracula (Adam Sandler) has invited all his best friends – Frankenstein and his wife, the Mummy, the Invisible Man, the Werewolf family, and more – to celebrate his beloved daughter Mavis’s (Selena Gomez) 118th birthday. For Dracula catering to all of these legendary monsters is no problem but the party really starts when one ordinary guy stumbles into the hotel and changes everything!
            </span>
        </div>
    </Parallax>
);

export default ImageTwo;