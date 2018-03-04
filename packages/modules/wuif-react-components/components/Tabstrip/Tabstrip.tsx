import * as React from 'react';
import './Tabstrip.css';

export interface Tab {
    text: string;
    content: any; // TODO why not React.StatelessComponent | React.ClassicComponent;  
    active?: boolean;
    props?: any;
}

export interface TabStripProps {
    tabs: Tab[];
}

export class Tabstrip extends React.Component<TabStripProps> {
    state: TabStripProps = {
        tabs: this.props.tabs
    };

    constructor(props: TabStripProps) {
        super(props);

        this.setState({
            tabs: props.tabs
        });
    }

    /**
     * builds a tabstrip component with dynamic content
     */
    render() {
        return (
            <div>
                <ul className="tabstrip">
                    { this.state.tabs.map((tab, idx) => {
                        return <li key={idx} className={tab.active ? 'active' : ''}>
                            <a onClick={() => this.tabClicked(tab, idx)}>
                                {tab.text}
                            </a>
                        </li>;
                    })}
                </ul>
                { this.state.tabs.map((tab, idx) => {
                    if (tab.active) {
                        const TabComponent = tab.content;
                        return <div key={idx}>
                            <TabComponent {...tab.props} />
                        </div>;
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    }

    /**
     * set the tab object to active when clicked and then setState to re-render the component
     */
    tabClicked = (activeTab: Tab, activeTabIdx: number) => {
        this.state.tabs.map((tab, idx) => {
            if (idx === activeTabIdx) {
                tab.active = true;
            } else {
                tab.active = false;
            }
        });

        this.setState((prevState: TabStripProps) => {
            return {
                tabs : prevState.tabs
            };
        });
    }
}
