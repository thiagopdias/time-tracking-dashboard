import { useEffect, useState } from "react"

import Card from "../layout/Card"
import CardProfile from "../layout/CardProfile"

import './Weekly.css'

const Weekly = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <section className="weeklyContainer">
      <CardProfile />

      {
        data.map(items => (
          <Card
            key={items.title}
            customClass={items.nameClass}
            title={items.title}
            current={items.timeframes.weekly.current}
            previous={items.timeframes.weekly.previous}
            text="Week"
          />
        ))
      }
    </section>
  )
}

export default Weekly