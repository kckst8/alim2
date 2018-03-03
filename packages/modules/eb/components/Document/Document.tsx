import * as React from 'react';

export interface DocumentProps {
    type?: string;
}

export const Document = (props: DocumentProps) => {
    return <span>I'm a Document</span>;
};
