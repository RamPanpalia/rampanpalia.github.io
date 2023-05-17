import React from 'react'
import ComponentTemplate from './ComponentTemplate'

const Projects = () => {
  const proj = [
    {
      title: 'My Portfolio Website',
      link: 'https://rampanpalia.github.io/',
      description: 'website you are currently on. Made using ReactJs',
    },
    {
      title: 'Flipkart Clone',
      link: 'https://rampanpalia.github.io/FlipkartClone/',
      description: '',
    },
    {
      title: 'therailpark.org Clone',
      link: 'https://rampanpalia.github.io/therailpark.org-Clone/',
      description: '',
    },
    {
      title: 'StartBootstrap Clone',
      link: 'https://rampanpalia.github.io/StartBootstrapClone/',
      description: '',
    },
    {
      title: 'Pangram Pangram Clone',
      link: 'https://rampanpalia.github.io/PangramPangramClone/',
      description: '',
    },
    {
      title: 'Vendor Performance Form',
      link: 'https://htmlpreview.github.io/?https://github.com/RamPanpalia/DVM_Task1/blob/main/Task2/index.html',
      description: 'This uses regex pattern validation to verify data and local storage to store the data',
    },
    {
      title: 'Resume Builder',
      link: 'https://rampanpalia.github.io/Resume-Builder/',
      description: 'Made using simple JavaScript this website allows us to create Resumes',
    },
    {
      title: 'SUKart',
      link: 'https://rampanpalia.github.io/sukart/',
      description: 'a e-commerce website made using react and firebase',
    },
    {
      title: 'Raged Fingers',
      link: 'https://rampanpalia.github.io/RagedFingers/',
      description: 'a typical website built to test you typing speed',
    },
    {
      title: 'Economics and Finance Association website',
      link: 'https://main--sweet-cranachan-f2df5f.netlify.app/',
      description: 'made in ReactJs',
    },

  ]

  const matter = <>
    <p>Source Code available on <a href="https://github.com/RamPanpalia"> <u>GitHub</u> </a></p>
    <p>Click 👇 for preview</p>
    <ul>
      {proj.map((ele) => {
        return (
          <li>
            <a href={ele.link} target={"_blank"} rel="noreferrer">{ele.title}</a>
            <p>{ele.description !== '' ? '-' : ''}{ele.description}</p>
          </li>
        )
      })}
    </ul>
  </>
  return (
    <ComponentTemplate
      title={'Projects'}
      matter={matter}
    />
  )
}

export default Projects