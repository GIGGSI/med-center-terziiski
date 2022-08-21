import { IoChevronUpCircleSharp } from 'react-icons/io5'
import './Chevron.css'

const Chevron = () => {

    const isIos = window.navigator.userAgent.indexOf('Mac OS') !== -1;
    return (
        <div className={isIos ? `chevron-wrapper chevron-wrapper-ios` : 'chevron-wrapper'}>
            <IoChevronUpCircleSharp onClick={() => window.scrollTo(0, 0)} />
        </div>
    )
}

export default Chevron