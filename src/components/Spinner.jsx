import s from "./Spinner.module.css"
import{FaSpinner}from 'react-icons/fa'
export function Spinner() {
    return (
        <div className={s.spinner}>
           <FaSpinner className={s.spinning} size={60}/>
        </div>
    )
}
