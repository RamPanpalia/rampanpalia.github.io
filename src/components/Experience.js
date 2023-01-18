import React from 'react'
import ComponentTemplate from './ComponentTemplate'

const Experience = () => {
  const matter =
    <ul>
      <li>Frontend Web Developer at Computer Science Association, BITS Pilani, March 2022-Present</li>
      <p>-As a part of the Frontend team my job is to maintain CSA official website and design website for cultural fests and events.</p>
      <li>Competitive Programmer at Microsoft Learn Student Ambassador, BITS Pilani, March 2022-Present</li>
      <li>Developer Intern at Foozie.fit, Banglore, Aug 2022-Present</li>
    </ul>

  return (
    <ComponentTemplate
      title={'Experience'}
      matter={matter}
    />
  )
}

export default Experience