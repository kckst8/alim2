import * as React from 'react';

export interface DocumentProps {
    text?: string;
}

export const Document = (props: DocumentProps) => {
    return <span>I'm a {props.text}</span>;
};
