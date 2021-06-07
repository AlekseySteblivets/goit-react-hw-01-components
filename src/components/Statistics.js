import React from 'react';
import DataStatistics from './DataStatistics';
import PropTypes from "prop-types";


const StatisticTable = ({title, stats}) => {
    return (
 <section className="statistics">

    <h2 className="title">{!!title ? title : " "}</h2>

  <ul className="stat-list">
    {
    stats.map((data) => (
      <li className="item" key = {data.id}>
        <DataStatistics
        label = {data.label}
        percentage = {data.percentage}
        />
      </li>
    ))
    }
    
  </ul>
</section>
    )

}

// StatisticTable.protoType = {
//   stats: PropTypes.arrayOf(
//   PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     // label: PropTypes.string.isRequired,
//     // percentage: PropTypes.string.isRequired
//   })
//   ).isRequired,
// }

export default StatisticTable;