import * as React from 'react';
import {MediumLoader} from '@bentley/bwc-react-components/components/Loaders/MediumLoader';

export interface FeatureComponentProps {
    moduleLoader(): Promise<any>;
}

export interface FeatureComponentState {
    Component: any;
}

export class FeatureComponent extends React.PureComponent {

    state: FeatureComponentState;
    props: FeatureComponentProps;

    constructor(props: FeatureComponentProps) {
        super(props);

        this.setState({
            Component: null
        });
    }

    componentWillMount() {
        if (!this.state.Component) {
            this.props.moduleLoader().then(({Component}) => {
                this.setState({
                    Component
                });
            });
        }
    }

    render() {
        const Component = this.state.Component;

        return (
            <div>
                Component ? <Component/> : <MediumLoader/>
            </div>
        )
    }
}