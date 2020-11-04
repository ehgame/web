import React from 'react'
// import {} from 'react-dom'
import styled from 'styled-components';

import NavItems from './NavItems';
import './styles.css'
import Logo from '../../../assets/img/logo_name.png'


const AuthButtonContainer = styled.div`
    display: flex;
    margin: 2rem;
    background-color: #333;
    box-sizing: border-box;
    align-items: center;
`

const AuthButton = styled.div`
    padding: 0 10px;
`
const Text = styled.h4`
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;

`
const DownloadBtn = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    left: 15px;
    user-select: none;
    cursor: pointer;
`

const index = () => {
    return (
        <nav className='navbar navbar-container'>
            <div className="logo-container">
                <a href="/">
                    <img src={Logo} width='220px' height='40px' alt='eagle hunter logo' />
                </a>
            </div>
            <NavItems />
            <AuthButtonContainer>
                <AuthButton>
                    <a href="/login">
                        <Text>login</Text>
                    </a>
                </AuthButton>
                <div style={{
                    border: '1px solid #fff',
                    margin: '1em 0',
                    height: '1rem'
                }} />
                <AuthButton>
                    <a href="/register">
                        <Text>sign up</Text>
                    </a>
                </AuthButton>
            </AuthButtonContainer>
            <DownloadBtn>
                <a href="/download">
                    <Text>Download</Text>
                </a>
            </DownloadBtn>
        </nav>
    )
}

export default index