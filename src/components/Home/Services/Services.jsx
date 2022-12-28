import { Title } from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { setSingleServiceid } from '../../../actions/index'

import { servicesData } from './ServicesData'

import './Services.css'

const Services = ({ id }) => {
    const dispatch = useDispatch()
    const showService = useSelector(state => state.servicesReducer);

    return (
        <div id={id} className="services-wrapper">
            <Title title='Нашите Услуги' />

            <div className='services-content-titles'>
                {servicesData.map((item) => (
                    <div className='single-title' key={item.id}>
                        <h1
                            className={showService === item.id
                                ? 'single-service-title single-service-title-active'
                                : 'single-service-title'}
                            onClick={() => dispatch(setSingleServiceid(item.id))}
                        >
                            {item.title}
                        </h1>
                    </div>
                ))}
            </div>
            <div className='services-content'>
                {servicesData.map((item) => (
                    <div className='' key={item.id + item.title}>
                        {showService === item.id &&
                            item.content.map((i) => <ul key={i.id + i.info}>
                                <li>{i.info}</li>
                            </ul>)

                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services