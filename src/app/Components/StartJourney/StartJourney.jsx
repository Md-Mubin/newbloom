import React from 'react'
import './StartJourney.css'

const StartJourney = () => {
    return (
        <>
            <section className='startJourneySection'>
                <div className="container">
                    <ul className='startJourneyHead'>
                        <h1>Ready to start your journey?</h1>
                        <p>Don't wait and sign up now!</p>
                        <li className='buttons'>
                            <button className='bg-[#7F39B1] hover:bg-[#9545ce] duration-300'>Become a parents</button>
                            <button className='bg-[#FFC100] hover:bg-[#eed076] duration-300'>Become a surrogate</button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
  )
}

export default StartJourney