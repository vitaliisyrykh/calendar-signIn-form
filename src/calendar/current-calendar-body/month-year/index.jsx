import { Component } from 'react';
import { format } from 'date-fns';
import style from '../month-year/mouthYear.module.scss';
import PropTypes from 'prop-types';

class MonthYear extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { day, handlePrev, handleNext } = this.props;

    return (
      <div className={style.container}>
        <button className={style.btn} onClick={handlePrev}>
          Prev
        </button>
        <h1 className={style.month}>{format(day, 'MMMM yyyy')}</h1>
        <button className={style.btn} onClick={handleNext}>
          Next
        </button>
      </div>
    );
  }
}
MonthYear.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};
export default MonthYear;
