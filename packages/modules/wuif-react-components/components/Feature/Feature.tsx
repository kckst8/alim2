import * as React from 'react';
import { MediumLoader } from '@bentley/bwc-react-components/components/Loaders/MediumLoader';

export interface FeatureProps {
    featureProps?: any;
    moduleLoader(): Promise<any>;
}

export interface FeatureState {
    Component?: React.StatelessComponent | React.ClassicComponent;
}

// check for es6 module. If so, return default
function resolveModule(module: any) {
    return module && module.__esModule ? module.default : module;
}

export class Feature extends React.PureComponent {

    state: FeatureState;
    props: FeatureProps;

    constructor(props: FeatureProps) {
        super(props);

        // init component. Should render the loader initially
        this.state = {
            Component: undefined
        };
    }

    componentWillMount() {
        if (!this.state.Component) {
            // module has not been loaded. Load module and re-set state to re-render with the proper component
            this.props.moduleLoader().then((Component) => {
                this.setState({
                    Component
                });
            });
        }
    }

    render() {
        // if the component has been loaded, render it. Otherwise render a loader
        var FeatureComponent = resolveModule(this.state.Component);
        if (FeatureComponent) {
            return (
                <div>
                    <FeatureComponent {...this.props.featureProps}/>
                </div>
            );
        } else {
            return (
                <div>
                    <MediumLoader/>
                </div>
            ); 
        } 
    }
}