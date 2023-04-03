import React from 'react'
import classes from '../SearchBar/SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div className={classes.container}>
  {/* <form autocomplete="off"> */}
    <div className={classes.finder}>
      <div className={classes.finder__outer}>
        <div className={classes.finder__inner}>
          <div className={classes.finder__icon}></div>
          <input className={classes.finder__input} type="text"/>
        </div>
      </div>
    </div>
  {/* </form> */}
</div>
  )
}
