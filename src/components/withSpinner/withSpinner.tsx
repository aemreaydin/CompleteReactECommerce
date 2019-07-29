import React from 'react';

import './withSpinner.scss';

interface SpinnerProps {
    isLoading: boolean;
}

type WrappedComp<T> = React.FC<T>;

const withSpinner = (WrappedComponent: any) => {
    const Spinner: React.FC<SpinnerProps> = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <div className="spinner-overlay">
                <div className="spinner-container"></div>
            </div>
        ) :
        <WrappedComponent {...otherProps} />
    };
    return Spinner;
}

export default withSpinner;