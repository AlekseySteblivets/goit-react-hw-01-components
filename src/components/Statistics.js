import React from 'react';
import DataStatistics from './DataStatistics';
import PropTypes from "prop-types";


const StatisticTable = (stats, title) => {
    return (
<section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
    {stats.map((data) => (
   <li class="item" key = {data.id}>
     <DataStatistics
     label = {data.label}
     percentage = {data.percentage}
     />
  </li>
    ))}
    
  </ul>
</section>
    )

}

// StatisticTable.protoType = {
//   stats: PropTypes.arrayOf(
  // PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.string.isRequired
//   })).isRequired,
// }

export default StatisticTable;