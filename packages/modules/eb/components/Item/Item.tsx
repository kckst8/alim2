import * as React from 'react';

export interface ItemProps {
}

export class Item extends React.Component<ItemProps> {

    constructor(props: ItemProps) {
        super(props);
    }

    render() {
        return (
            <span>I'm an Item</span>
        );
    }
}

/* import * as React from 'react';

export interface ItemProps {
    type?: string;
}

export const Item = () => {
    return <span>I'm an Item</span>;
};
 */