import * as React from 'react';
import { MediumLoader } from '@bentley/bwc-react-components/components/Loaders/MediumLoader';

export interface FeatureProps {
    moduleLoader(): Promise<any>;
}

export interface FeatureState {
    Component: any;
}

export class Feature extends React.PureComponent {

    state: FeatureState;
    props: FeatureProps;

    constructor(props: FeatureProps) {
        super(props);

        this.state = {
            Component: null
        };
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
        /* const Component = this.state.Component;

        return (
            <div>
                Component ? <Component/> : <MediumLoader/>
            </div>
        ); */
        // const Component = this.state.Component;

        return (
            <div>
                <MediumLoader/>
            </div>
        );
    }
}