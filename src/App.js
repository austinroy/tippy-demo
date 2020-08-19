import React, { useState } from 'react';
import './App.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 


const StringContent = () => (
  // Renders contents of the tooltip as a string
  <Tippy content="The Chosen One, becomes Darth Vader after falling to the dark side">
    <div>Anakin Skywalker</div>
  </Tippy>
);

const JSXContent = () => (
    // Renders contents of the tooltip as a JSX element
  <Tippy content={<span>Trained Jedi Master Obi Wan Kenobi, discovered Anakin</span>}>
    <div>Qui Gon Jinn</div>
  </Tippy>
);

const HeadlessTippy = () => (
  <Tippy
    render={attrs => (
      <div id="tooltip" role="tooltip" {...attrs}>
        Master to both Anakin and Luke Skywalker
        <div id="arrow" data-popper-arrow></div>
      </div>
    )}
  >
    <div>Obi Wan Kenobi</div>
  </Tippy>
);

const JediList = () => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  
  return (
    <div>
    <h1>Some Famous Jedi</h1>
        <StringContent />
        <br/>
        <JSXContent />
        <br/>
        <HeadlessTippy />
        <br />
        <Tippy 
        content="Not the baby" 
        visible={visible} 
        onClickOutside={hide} 
        duration="500"
        placement='bottom'
        arrow={false}
        delay="[1000, 200]">
          <div onClick={visible ? hide : show}>Yoda</div>
        </Tippy>
        <br />
  </div>
  )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <JediList />
      </header>
    </div>
  );
}

export default App;
