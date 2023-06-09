import React from 'react';

function Header() {
    return (
        <header
            style={{
                backgroundColor: '#006400',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '20px',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 10,
            }}
        >
            <h1 style={{ color: '#fff', fontSize: '24px', margin: '0' }}>N-Canteen Admin System</h1>
        </header>
    );
}

export default Header;
