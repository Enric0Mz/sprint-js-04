import React from 'react';
import HeaderContainer from './HeaderContainer';
import Logo from '../Cards/Logo';
import Navigation from './Navigation';
import Items from './Items';

// Import Bootstrap CSS classes
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Logo>
                            <img src="images/recycle-solid.svg" alt="ícone de reciclagem" />
                            <h1>ECO RECYCLING</h1>
                        </Logo>
                    </div>
                    <div className="col-md-6 text-end">
                        <Logo>
                            <img src="images/telefone.svg" alt="ícone de telefone" />
                            <h3>(11) 2303-3225</h3>
                        </Logo>
                    </div>
                </div>
            </div>
            <Navigation>
                <Items />
            </Navigation>
        </HeaderContainer>
    );
}

export default Header;
