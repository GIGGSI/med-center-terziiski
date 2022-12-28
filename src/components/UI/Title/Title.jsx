
import './Title.css'

const Title = ({ title }) => {
    let [a, b, c] = title.split(' ')

    return (
        <div className='title-wrapper'>
            <p>{a} <span>{b}</span> {c}</p>
            <div className='underline'/>
        </div>
    )
}

export default Title