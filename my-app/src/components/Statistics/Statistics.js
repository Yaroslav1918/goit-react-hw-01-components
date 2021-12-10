import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css'
import randomColor from '../Statistics/randomColor'
const Statistics = ({stat, title}) => {

  return (
        <section className={s.statistics} >
      <h2 className={s.title}>{title ? (title) : ('')}</h2>
      <ul className={s.statList}>
      {stat.map(stat => (
      <li className={s.item } key = {stat.id} style={{
      backgroundColor:randomColor()
    }}>
              <p className={s.label}>{stat.label}</p>
              <p className={s.percentage}>{stat.percentage}%</p>
        </li>
    ))}
          </ul>
        </section>
    
  )
  }
    
Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default Statistics;