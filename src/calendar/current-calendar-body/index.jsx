import { Component } from "react";

import style from "./current-calendar-body.module.scss";
import MounthYear from "./mounth-year";
import Month from "./mounth";
class CurrentCalendarBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  weekDays = (props) => {
    return (
      <section className={style.weekDaysContainer}>
        <div className={style.weekDay}>Mon</div>
        <div className={style.weekDay}>Tue</div>
        <div className={style.weekDay}>Wed</div>
        <div className={style.weekDay}>Thu</div>
        <div className={style.weekDay}>Fri</div>
        <div className={style.weekDay}>Sut</div>
        <div className={style.weekDay}>Sun</div>
      </section>
    );
  };
  render() {
    const { day, handlePrev, handleNext } = this.props;
    const year = day.getFullYear();
    const month = day.getMonth();

    return (
      <div className={style.bodyContainer}>
        <MounthYear day={day} handlePrev={handlePrev} handleNext={handleNext} />
        {this.weekDays()}
        <Month day={day} year={year} month={month} /> 
      </div>
    );
  }
}
export default CurrentCalendarBody;
