import s from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useState,useEffect } from "react"
import {useHistory} from "react-router"
import { useQuery } from "../hooks/useQuery"



export function Search() {
    const query= useQuery();
    const search= query.get("search")

    
    const history= useHistory()

    const handleSubmit= (e)=>{
        e.preventDefault()
       
    }
    return (
        <form className={s.searchContainer} onSubmit={handleSubmit}>
            <div className={s.searchBox}>
                <input className={s.searchInput } 
                type="text"
                 value={search} 
                 placeholder="Title"
                 aria-label="Search Movies"
                 onChange={(e)=> {
                     const value= e.target.value
                     history.push("/?search=" + value)
                 }}/>
                
                <FaSearch size={20} color= "black" className={s.searchButton } />
                
            </div>
        </form>
    )
}
