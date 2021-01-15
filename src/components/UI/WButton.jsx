import React from 'react';
import 'wired-elements';


const WButton = (props) => (
    <wired-button class={props.className}>{props.content}</wired-button>
);

export {WButton}

