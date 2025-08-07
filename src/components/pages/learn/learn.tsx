import React from 'react'
import LearnHero from './learn-hero'
import LearnTrustedBy from './learn-trusted-by'
import Courses from './courses'
import Mentor from './mentor'
import Testimonial from './testimonials'
import Newsletter from './newsletter'

const Learn = () => {
    return (
        <div>
            <LearnHero />
            <LearnTrustedBy />
            <Courses />
            <Mentor />
            <Testimonial />
            <Newsletter />
        </div>
    )
}

export default Learn