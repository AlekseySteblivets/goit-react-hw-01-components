import React, { Fragment } from 'react';

const DataStatistics = (label, percentage) => {
    return (
    <div>
        <span class="label">.{label}</span>
        <span class="percentage">{percentage}</span>
    </div>

    )

}

export default DataStatistics;
