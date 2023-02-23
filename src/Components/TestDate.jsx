import React from 'react'
import moment from 'moment'

const TestDate = () => {
    let today = new Date();
    console.log("Today: ",today)
    today = today+""
    console.log(today)
  return (
    <div>
        <h2>DATE: {today} </h2>
    </div>

  )
}

export default TestDate