import * as React from 'react';

export interface ItemProps {
    type?: string;
}

export const Item = (props: ItemProps) => {
    return <span>I'm an Item</span>;
};
