import React, { useEffect } from "react"
import Layout from "../components/Layout"

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/mainStyles.css"

function getCurrentDay() {
  const d = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var day = days[d.getDay()].toUpperCase()
  var month = months[d.getMonth()].toUpperCase()
  var dayOfMonth = d.getDate();
  // Put them together
  return day + ", " + month + " " + dayOfMonth;
}

export default function Home() {
  return (
    <>
      <Layout dateString={getCurrentDay()} pageTitle="Today">
        <h1>Hello World</h1>
      </Layout>
    </>
  )
}
