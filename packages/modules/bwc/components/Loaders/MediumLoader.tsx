import * as React from 'react';
import './Loader.scss';

interface LoaderProps {

}

export const MediumLoader = (props: LoaderProps) => {
    return (
        <div className="loader">
            <div className="medium-loader">
                <i/>
                <i/>
                <i/>
                <i/>
                <i/>
                <i/>
            </div>
        </div>
    );
};

export default MediumLoader;