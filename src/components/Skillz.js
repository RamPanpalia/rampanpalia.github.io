import React from 'react'
import ComponentTemplate from './ComponentTemplate'
import c from '../assets/Skills/c.svg'
import cpp from '../assets/Skills/cpp.svg'
import html from '../assets/Skills/html.svg'
import css from '../assets/Skills/css.svg'
import JavaScript from '../assets/Skills/JavaScript.svg'
import flutter from '../assets/Skills/flutter01.svg'
import reactJs from '../assets/Skills/reactJs.svg'
import github from '../assets/Skills/github.svg'
import python from '../assets/Skills/python.svg'
import vsCode from '../assets/Skills/vsCode.svg'

const Skillz = () => {
  const skillz = [
    { title: 'HTML', src: html, },
    { title: 'CSS', src: css, },
    { title: 'JavaScript', src: JavaScript, },
    { title: 'Flutter', src: flutter, },
    { title: 'ReactJS', src: reactJs, },
    { title: 'C', src: c, },
    { title: 'C++', src: cpp, },
    { title: 'VS Code', src: vsCode, },
    { title: 'GitHub', src: github, },
    { title: 'Python', src: python, },
  ]
  const matter=<div className='skillsIcons'>
  {skillz.map(ele=>
    <img src={ele.src} alt="unable to load!" title={ele.title} />  
  )}
</div>
  return (
    <ComponentTemplate
      title={'SkillZ'}
      matter={matter}
    />
  )
}

export default Skillz