import React from 'react'
import ComponentTemplate from './ComponentTemplate'

const Experience = () => {
  const data = [
    {
      title: 'Frontend Web Developer at Computer Science Association, BITS Pilani, March 2022-Present',
      work: ''
    },
    {
      title: 'Competitive Programmer at Microsoft Learn Student Ambassador, BITS Pilani, March 2022-Present',
      work: ''
    },
    {
      title: 'Frontend lead at Publicity and Sponsership Department,Team Anant, Nov 2022-Present',
      work: ''
    },
    {
      title: 'Developer Intern at Foozie.fit, Banglore, Aug 2022-Jan 2022',
      work: 'Designed and made a form for the website using ReactJS and Material UI. Also I made a tracker application in flutter.'
    },
    {
      title: 'Shalaka Connected devices IoT, Pune, May 2023-July 2023',
      work: 'Developed a MERN stack web application which is deployed at remonet.in'
    },
    {
      title: 'Quicreds, Remote, March 2023-May 2023',
      work: 'Startup is currently in stealth mode.'
    },
    {
      title: 'Seller Setu, Remote, May 2023-Present',
      work: 'I developed the frontend of the website using ReactJS and Material UI. Also I made a web app in reactJs'
    },
    {
      title: 'Phnk Connected Devices, Delhi, July 2023-Present',
      work: ''
    },
  ]
  const matter =
    <ul>
      <li>Frontend Web Developer at Computer Science Association, BITS Pilani, March 2022 - Present</li>
      {/* <p>-As a part of the Frontend team my job is to maintain CSA official website and design website for cultural fests and events.</p> */}
      <li>Competitive Programmer at Microsoft Learn Student Ambassador, BITS Pilani, March 2022 - Present</li>
      <li>Frontend lead at Publicity and Sponsership Department,Team Anant, Nov 2022 - Present</li>
      <li>Developer Intern at Foozie.fit, Banglore, Aug 2022 - Jan 2022</li>
      <li>Shalaka Connected devices IoT, Pune, May 2023 - July 2023</li>
      <li>Quicreds, Remote, March 2023 - May 2023</li>
      <li>Seller Setu, Remote, May 2023 - Present</li>
      <li>Phnk Connected Devices, Delhi, July 2023 - Present</li>
    </ul>

  return (
    <ComponentTemplate
      title={'Experience'}
      matter={matter}
    />
  )
}

export default Experience