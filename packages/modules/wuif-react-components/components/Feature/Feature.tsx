import * as React from 'react';
import { MediumLoader } from '@bentley/bwc-react-components/components/Loaders/MediumLoader';

export interface FeatureProps {
    moduleLoader(): Promise<any>;
}

export interface FeatureState {
    Component: any;
}

function resolve(obj: any) {
    return obj && obj.__esModule ? obj.default : obj;
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
            this.props.moduleLoader().then((Component) => {
                this.setState({
                    Component
                });
            });
        }
    }

    render() {
        if (this.state.Component) {
            return React.createElement(resolve(this.state.Component), this.props);
        } else {
            return (
                <div>
                    <MediumLoader/>
                </div>
            ); 
        }
    }
}