import { useEffect, useState } from "react"

import Card from "../layout/Card"
import CardProfile from "../layout/CardProfile"

import './Daily.css'

const Daily = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <section className="dailyCotainer">
      <CardProfile />

      {
        data.map(items => (
          <Card
            key={items.title}
            customClass={items.nameClass}
            title={items.title}
            current={items.timeframes.daily.current}
            previous={items.timeframes.daily.previous}
            text="Day"
          />
        ))
      }

      
    </section>
  )
}

export default Daily