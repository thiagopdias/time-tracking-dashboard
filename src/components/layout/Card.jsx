import './Card.css'

const Card = ({customClass, title, current, previous, text}) => {
    return (
        <div className={`cardContainer ${customClass}`}>
            <div className="infoCard">
                <div className="titleCard">
                    <h1>{title}</h1>
                    <span>
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                    </span>
                </div>

                <div className='timeCard'>
                    <h1>{current}hrs</h1>
                    <p>Last {text} - {previous}hrs</p>
                </div>
            </div>
        </div>
    )
}

export default Card