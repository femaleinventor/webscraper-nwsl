import React from 'react';

const HTML = (props) => (
    <html lang="en">
        <head>
            <title>inits</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        
        <body>
            <div id="root" dangerouslySetInnerHTML={{ __html: props.html }} />
        </body> 
        
        <script dangerouslySetInnerHTML={{ __html: `window.__SERIALIZED_STATE__ = JSON.stringify(${props.serverState})` }} />
    </html>
);

export default HTML;
