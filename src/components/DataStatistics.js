import React, { Fragment } from 'react';

const DataStatistics = ({label, percentage}) => {
    return (
    <div>
        <span className="label">.{label}</span>
        <span className="percentage">{percentage}</span>
    </div>

    )

}


export default DataStatistics;
