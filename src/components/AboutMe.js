import React from 'react'
import ComponentTemplate from './ComponentTemplate';

const AboutMe = () => {
    const matter=
    <>
        I am passionate about exploring and learning new things.
        {/* I firmly believe that speaking more than required affects the efficiency of a person negatively.  */}
        I like to implement my learnings by making projects and build things from scratch. I have a strong appetite to gain experience. I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards. I am not comfortable with settling, and I am always looking for an opportunity to do better and achieve greatness.
    </>
    
  return (
    <ComponentTemplate
        title={'AboutMe'}
        matter={matter}
    />
  )
}

export default AboutMe