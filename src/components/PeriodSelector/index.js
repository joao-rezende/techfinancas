import React from 'react';
import { FaCircleChevronUp, FaCircleChevronDown } from "react-icons/fa6"

import './style.css';

const PeriodSelector = ({ selectedMonth, selectedYear }) => {
  const [visibiltyPeriod, setVisibiltyPeriod] = useState("hide");
  const dateNow = new Date();
  const currentMonth = dateNow.getMonth();
  const currentYear = dateNow.getFullYear();

  if (!selectedMonth) selectedMonth = currentMonth;
  if (!selectedYear) selectedYear = currentYear;

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  const years = [];
  for (let year = currentYear; year > currentYear - 100; year--) {
    years.push(year);
  }

  return (
    <div className={'period ' + visibiltyPeriod}>
      <div id="select-month" className='select'>
        <div className='up'>
          <FaCircleChevronUp />
        </div>
        <ul>
          {months.map((month, index) => (<li className={index === currentMonth ? "selected" : ""} key={month}>{month}</li>))}
        </ul>
        <div className='down'>
          <FaCircleChevronDown />
        </div>
      </div>
      <div className='select'>
        <div className='up'>
          <FaCircleChevronUp />
        </div>
        <ul>
          {years.map(year => (<li className={year === currentYear ? "selected" : ""} key={year}>{year}</li>))}
        </ul>
        <div className='down'>
          <FaCircleChevronDown />
        </div>
      </div>
    </div>
  );
}

export default PeriodSelector;