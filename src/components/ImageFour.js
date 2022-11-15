import { Parallax } from 'react-parallax';
import four from '../imgs/four.jpg'


const ImageFour = () => (
    <Parallax className='image'bgImage={four} bgImageAlt="the cat" strength={500}>
        <div className='content'>
            <span className='imgText'>
            The Powerpuff Girls Blossom, Bubbles, and Buttercup were created by Professor Utonium in an attempt to create the "perfect little girl" using a mixture of "sugar, spice, and everything nice". However, he accidentally spilled a mysterious substance called "Chemical X" into the mixture, creating three girls and granting all three superpowers including flight, superhuman strength, superhuman speed, superhuman senses, nigh-invulnerability, x-ray vision, red heat vision, energy projection, space survivability, and thermal resistance. In the original pilot, the accidental substance was a can of "Whoopass", which was replaced by "Chemical X" in the aired version.
            </span>
        </div>
    </Parallax>
);

export default ImageFour;