import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Join the journey of innovation and creativity with GPT-3 from OpenAI. Experience the thrill of building something extraordinary as you harness the power of cutting-edge artificial intelligence. With GPT-3, the possibilities are limitless, and the potential for greatness is boundless. Step into the future of technology and embark on a transformative adventure where every idea is a step closer to reality. Together, let's create something truly amazing.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button className='btn btn__primary'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header
