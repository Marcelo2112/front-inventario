import React from 'react';

export default function Target(props){
    const {title, children} = props;

    return (
        <section>
            <div className="contenido">
                <header>
                    <h3>{title}</h3>
                </header>
                {children}
            </div>
        </section>
    );
}