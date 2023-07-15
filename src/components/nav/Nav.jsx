import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {MdHomeRepairService} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
  <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#' ? 'active': ''}><AiOutlineUser /></a>
  <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#' ? 'active': ''}><BsJournalBookmarkFill /></a>
  <a href="#service" onClick={()=> setActiveNav('#service')} className={activeNav === '#' ? 'active': ''}><MdHomeRepairService /></a>
  <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#' ? 'active': ''}><AiFillMessage /></a>
    </nav>

)
}

export default Nav

