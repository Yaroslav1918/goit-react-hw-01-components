import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css'
import randomColor from '../Statistics/randomColor'
const Statistics = ({stat, title}) => {

  return (
        <section className={s.statistics} >
      {title ?
        (<h2 className={s.title}>{title}</h2>) :
        ('')} 
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
  title: PropTypes.string,
  stat: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}
export default Statistics;