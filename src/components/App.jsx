import { Fragment, useState } from 'react';
import '../styles/index.scss';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <Fragment>
      <section className='hero'></section>
      <main>
        <section>
          <h1>Testing React with manual installation on Webpack</h1>
          <button
            onClick={() => {
              setDark((prevState) => !prevState);
            }}
          >
            Activate {!dark ? 'dark' : 'light'} mode
          </button>
          <div className={`container ${dark && 'container--dark'}`}></div>
        </section>
      </main>
    </Fragment>
  );
}

export default App;
