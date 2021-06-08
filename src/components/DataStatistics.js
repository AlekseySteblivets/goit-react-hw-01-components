import React, { Fragment } from 'react';

const DataStatistics = ({label, percentage}) => {
    return (
    <Fragment>
        <span className="label">.{label}</span>
        <span className="percentage">{percentage}</span>
    </Fragment>

    )

}


export default DataStatistics;
