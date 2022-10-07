import { useEffect, useState } from "react"

import Card from "../layout/Card"
import CardProfile from "../layout/CardProfile"

import './Monthly.css'

const Monthly = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <section className="monthlyContainer">
      <CardProfile />

      {
        data.map(items => (
          <Card 
            key={items.title}
            customClass={items.nameClass}
            title={items.title}
            current={items.timeframes.monthly.current}
            previous={items.timeframes.monthly.previous}
            text="Month"
          />
        ))
      }
    </section>
  )
}

export default Monthly