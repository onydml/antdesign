import React from 'react'

import AppFooter from '../comman/footer'
import AppContact from '../home/Contact'
import AppEducation from '../home/Education'
import AppExperience from '../home/Experience'
import AppHero from '../home/hero'
import AppHobby from '../home/Hobby'
import AppLanguage from '../home/Language'
import AppSkills from '../home/Skills'


const AppHome = () => {
    return (
        <div className="main">
            <AppHero/>
            <AppExperience/>
            <AppEducation/>
            <AppSkills/>
            <AppHobby/>
            <AppLanguage/>
            <AppContact/>
            <AppFooter/>
        </div>
    )
}

export default AppHome
