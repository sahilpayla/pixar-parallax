import React from 'react';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import ImageFour from './components/ImageFour';
import ImageFive from './components/ImageFive';
import ImageSix from './components/ImageSix';
import ImageSeven from './components/ImageSeven';
import ImageNine from './components/ImageNine';
import TextBox from './components/TextBox';
import TextBox2 from './components/TextBox2';
import TextBox3 from './components/TextBox3';
import TextBox4 from './components/TextBox4';
import TextBox5 from './components/TextBox5';
import TextBox6 from './components/TextBox6';
import TextBox7 from './components/TextBox7';


function App() {
  return (
    <div className="App">
      <h1>
        <ImageOne/>
        <TextBox />
        <ImageTwo/>
        <TextBox2 />
        <ImageThree />
        <TextBox3 />
        <ImageFour />
        <TextBox4 />
        <ImageFive/>
        <TextBox5 />
        <ImageSix />
        <TextBox6 />
        <ImageSeven />
        <TextBox7 />
        <ImageNine />
      </h1>
    </div>
  );
}

export default App;
