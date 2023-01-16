import React from 'react'
import ComponentTemplate from './ComponentTemplate'

const EducationAndCertification = () => {
  const matter = <ul>
    <li>BE Hons. Mechanical Engineering,BITS PILANI, 2021-2025</li>
    <li>
      Data Structures and Algorithms Course By Coding Ninjas, Dec 2021 - Mar 2022
      <br />
      -Certificate of Completion (we get it on complete 60% course)
      <br />
      -Certificate of Excellence (we get it on complete 90% course)
    </li>
  </ul>
  return (
    <ComponentTemplate
      title={'Education And Experience'}
      matter={matter}
    />
  )
}

export default EducationAndCertification