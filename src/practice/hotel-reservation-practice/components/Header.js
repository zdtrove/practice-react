import React from 'react';

export default function Header({children, headerClass}) {
    return (
        <header className={headerClass}>
            {children}
        </header>
    )
}

Header.defaultProps = {
    headerClass: "defaultHeader"
}