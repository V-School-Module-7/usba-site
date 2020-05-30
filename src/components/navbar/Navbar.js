import React, { Fragment } from 'react'
import styled from 'styled-components'


import DesktopMenu from './Desktop/DesktopMenu.js'
import MobileMenu from './Mobile/MobileMenu.js'
import { NavbarContextProvider } from './navbarContext'


const Nav = styled.nav`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 28px 16px;
    width: 100%;
    height: 75px;
    z-index: 999;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    @media (min-width: 1000px) {
       display: none;
      
    }
`


function Navbar(props) {
    return (
        <Fragment>
            <DesktopMenu menuLinks={props.menuLinks} />
            <NavbarContextProvider>
                <MobileMenu menuLinks={props.menuLinks} />
            </NavbarContextProvider >
        </Fragment>
    )
}
export default Navbar