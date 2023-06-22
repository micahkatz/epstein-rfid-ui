import React from 'react';
import logo from './logo.svg';
import './HomePage.scss';
import { InputContext } from './context/inputContext';
import VisitorList from './components/VisitorList';

import { ReactComponent as Logo } from './assets/epstein-hillel-logo-color.svg'
import PopupModal from './components/PopupModal';

function HomePage() {
    const homePageRef = React.useRef<HTMLDivElement | null>(null)
    const inputContext = React.useContext(InputContext)
    React.useEffect(() => {

        // focus the homepage div by default
        homePageRef && homePageRef.current && homePageRef.current.focus();
    }, []);
    return (
        <div className="App">
            <div className="HomePage" onKeyDown={inputContext.handleKeyPress} tabIndex={0} ref={homePageRef}>
                <div className='header'>

                    <h1 className='header-title'>
                        Welcome to
                    </h1>
                    <Logo className='school-logo' />
                </div>
                <VisitorList />
                <PopupModal />
                <img src={require('./assets/swirl.png')} alt='swirl' className='swirl' />
            </div>
        </div>
    );
}

export default HomePage;
