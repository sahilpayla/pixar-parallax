import { Parallax } from 'react-parallax';
import three from '../imgs/three.jpg'


const ImageThree = () => (
    <Parallax className='image' bgImage={three} bgImageAlt="the cat" strength={600}>
        <div className='content'>
            <span className='imgText' style={{color:"black"}}>
            The basic premise of Samurai Jack comes from Tartakovsky's childhood fascination with samurai culture and the bushido code,as well as a recurring dream where he wandered a post-apocalyptic Earth with a samurai sword and traveled the world fighting mutants with his crush.
            </span>
        </div>
    </Parallax>
);

export default ImageThree;