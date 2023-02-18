import './stylesheets/App.css';
import './stylesheets/fonts.css';
import React, { useState } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import AboutMe from './components/AboutMe';
import Skillz from './components/Skillz';
import ContactMe from './components/ContactMe';
import Experience from './components/Experience'
import Projects from './components/Projects';
import EducationAndCertification from './components/EducationAndCertification'

function App() {
  const [theme, setTheme] = useState('orange')
  const [ActiveComponent, setActiveComponent] = useState(<AboutMe />)
  const [navOn, setNavOn] = useState(false);

  const setToAboutme = () => {
    navToggle()
    setActiveComponent(<AboutMe />)
  }
  const setToSkillZ = () => {
    navToggle()
    setActiveComponent(<Skillz />)
  }
  const setToEducationAndCertification = () => {
    navToggle()
    setActiveComponent(<EducationAndCertification />)
  }
  const setToProjects = () => {
    navToggle()
    setActiveComponent(<Projects />)
  }
  const setToExperience = () => {
    navToggle()
    setActiveComponent(<Experience />)
  }
  const setToContact = () => {
    navToggle()
    setActiveComponent(<ContactMe />)
  }

  function navToggle() {
    if (navOn && window.innerWidth <= 1250) {
      document.querySelector('.navBar').style.display = "none";
      setNavOn(false);
    }
    else {
      document.querySelector('.navBar').style.display = "flex";
      setNavOn(true);
    }
  }

  return (
    <div className={`App ${theme}`}>
      <div className='top'>
        <div className='navButton' onClick={navToggle}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <div className='navBar navBar-mob'>
          <span className='myName'>Ram Panpalia</span>
          <ul>
            <li className='About' onClick={setToAboutme}><a href={`${navOn && window.innerWidth <= 1250 ? '#componentContainer' : '#'}`} rel="noreferrer">About Me</a></li>
            <li className='SkillZ' onClick={setToSkillZ}><a href={`${navOn && window.innerWidth <= 1250 ? '#componentContainer' : '#'}`} rel="noreferrer">SkillZ</a></li>
            <li className='EduAExper' onClick={setToEducationAndCertification}><a href={`${navOn && window.innerWidth <= 1250 ? '#componentContainer' : '#'}`} rel="noreferrer">Education and Certifications</a></li>
            <li className='Experience' onClick={setToExperience}><a href={`${navOn && window.innerWidth <= 1250 ? '#componentContainer' : '#'}`} rel="noreferrer">Experience</a></li>
            <li className='Projects' onClick={setToProjects}><a href={`${navOn && window.innerWidth <= 1250 ? '#componentContainer' : '#'}`} rel="noreferrer">Projects</a></li>
            <li className='Contact' onClick={setToContact}><a href={`${navOn && window.innerWidth <= 1250 ? '#componentContainer' : '#'}`} rel="noreferrer">Contact Me</a></li>
          </ul>
          <div className='Resume Resume2'>
            <div className='checkout'>checkout</div>
            <a href='https://rampanpalia.github.io/Resume/' target={'_blank'} rel="noreferrer">
              <div className='resLink'>MyResume</div>
            </a>
          </div>
          <div className='changeTheme changeTheme2'>
            <select className='themeValue' onChange={(e) => { setTheme(e.target.value) }}>
              <option value={'orange'}>Orange</option>
              <option value={':root'}>Light Gray Blue</option>
              <option value={'theme-01'}>Dark Gray Blue</option>
              <option value={'theme-02'}>Red</option>
              <option value={'limegreen'}>LimeGreen</option>
              <option value={'black-white'}>Black & White</option>
              <option value={'ocean-blue'}>Ocean-Blue</option>
              <option value={'lite'}>Lose all Colors🙃</option>
            </select>
          </div>
        </div>
        <div className='flexMain'>
          <div className='flexone'>
            <div className='profile-Image blob'>
            </div>
            <div className='textEffectBox'>
              <div className='staticText'>Hello, I am</div>
              <ReactTypingEffect
                className='typingText'
                speed={100}
                eraseDelay={2000}
                eraseSpeed={100}
                typingDelay={100}
                cursor=''
                cursorClassName='typingTextCursor'
                staticText=''
                text={["Ram Panpalia", "a Hustler", "a Developer", "a Freelancer"]}
                displayTextRenderer={(text) => {
                  return (
                    <span className='typingText'>{text}</span>
                  )
                }}
              />
            </div>
            <div className='Resume'>
              <div className='checkout'>checkout</div>
              <a href='https://rampanpalia.github.io/Resume/' target={'_blank'} rel="noreferrer">
                <div className='resLink'>MyResume</div>
              </a>
            </div>
            <div className='changeTheme'>
              <select className='themeValue' onChange={(e) => { setTheme(e.target.value) }}>
                <option value={'orange'}>Orange</option>
                <option value={':root'}>Light Gray Blue</option>
                <option value={'theme-01'}>Dark Gray Blue</option>
                <option value={'theme-02'}>Red</option>
                <option value={'limegreen'}>Green</option>
                <option value={'black-white'}>Black & White</option>
                <option value={'ocean-blue'}>Ocean-Blue</option>
                <option value={'lite'}>Lose all Colors🙃</option>
              </select>
            </div>
          </div>
          <div className='flextwo'>
            <div className='componentContainer' id='componentContainer'>
              {ActiveComponent}
            </div>
          </div>
        </div>
        <div className="social-media">

          {/* <a href="https://www.facebook.com/ram.panpalia" target={'_blank'} rel="noreferrer">
            <svg className="facebook" width="38" height="38" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <title>Facebook</title>
              <path d="M15 0C6.71631 0 0 6.75716 0 15.0912C0 22.623 5.48438 28.8667 12.6565 30V19.4544H8.84678V15.0912H12.6562V11.7656C12.6562 7.98155 14.8966 5.89324 18.322 5.89324C19.9632 5.89324 21.6803 6.18829 21.6803 6.18829V9.90214H19.7883C19.7593 9.90214 19.7303 9.90244 19.7019 9.90303C18.1087 9.93457 17.4853 10.8412 17.3657 11.8672C17.3657 11.8684 17.3654 11.8696 17.3654 11.8705C17.3634 11.8885 17.3613 11.9062 17.3596 11.9241C17.3596 11.9247 17.3596 11.925 17.3593 11.9256C17.3578 11.9406 17.3566 11.956 17.3552 11.971C17.3549 11.9742 17.3546 11.9778 17.3543 11.981C17.3531 11.9946 17.3522 12.0081 17.3514 12.0214C17.3511 12.0264 17.3505 12.0314 17.3502 12.0364C17.3496 12.0476 17.349 12.0588 17.3484 12.07C17.3481 12.0774 17.3476 12.0848 17.3473 12.0921C17.3464 12.1092 17.3458 12.1263 17.3452 12.1437C17.3452 12.1452 17.3452 12.1464 17.3449 12.1478C17.3443 12.1638 17.344 12.18 17.3438 12.1959C17.3438 12.1985 17.3438 12.2012 17.3435 12.2038C17.3432 12.2224 17.3432 12.2413 17.3432 12.2599V15.0912H21.503L20.8389 19.4544H17.3435V29.9997C24.5156 28.8687 30 22.625 30 15.0912C30 6.75716 23.2837 0 15 0Z"></path></svg>
          </a> */}

          {/* <a href="https://www.instagram.com/rampanpalia_08_04/" target={"_blank"} rel="noreferrer">
            <svg className="instagram" width="38" height="38" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <path d="M14.5006 2.61227C18.3727 2.61227 18.8315 2.62699 20.3597 2.69723C21.7735 2.7618 22.5416 2.99742 23.0525 3.1968C23.7288 3.45961 24.2125 3.77453 24.7201 4.28203C25.2276 4.78953 25.5414 5.27211 25.8042 5.94953C26.0025 6.46043 26.2392 7.22848 26.3038 8.64223C26.374 10.1715 26.3888 10.6303 26.3888 14.5011C26.3888 18.372 26.374 18.8319 26.3038 20.36C26.2392 21.7738 26.0036 22.5418 25.8042 23.0527C25.5414 23.729 25.2265 24.2127 24.7201 24.7202C24.2125 25.2277 23.73 25.5415 23.0525 25.8043C22.5416 26.0026 21.7735 26.2393 20.3597 26.3039C18.8303 26.3741 18.3727 26.3889 14.5006 26.3889C10.6285 26.3889 10.1697 26.3741 8.64143 26.3039C7.22763 26.2393 6.45955 26.0037 5.94863 25.8043C5.27232 25.5415 4.78859 25.2266 4.28107 24.7202C3.77355 24.2127 3.45974 23.7302 3.19692 23.0527C2.99867 22.5418 2.7619 21.7738 2.69733 20.36C2.62709 18.8307 2.61237 18.372 2.61237 14.5011C2.61237 10.6303 2.62709 10.1704 2.69733 8.64223C2.7619 7.22848 2.99754 6.46043 3.19692 5.94953C3.45974 5.27324 3.77468 4.78953 4.28107 4.28203C4.78745 3.77453 5.27118 3.46074 5.94863 3.1968C6.45955 2.99855 7.22763 2.7618 8.64143 2.69723C10.1697 2.62699 10.6285 2.61227 14.5006 2.61227ZM14.5006 0C10.5628 0 10.0688 0.0169922 8.52248 0.0872266C6.9784 0.157461 5.92484 0.403281 5.00156 0.76125C4.0477 1.13168 3.23884 1.62785 2.43338 2.43328C1.62792 3.23871 1.13172 4.04867 0.76128 5.0025C0.403297 5.92461 0.157467 6.97813 0.08723 8.52215C0.0169928 10.0684 0 10.5623 0 14.5C0 18.4377 0.0169928 18.9316 0.08723 20.4779C0.157467 22.0207 0.403297 23.0754 0.76128 23.9975C1.13172 24.9513 1.62792 25.7602 2.43338 26.5656C3.23997 27.3721 4.0477 27.8672 5.00156 28.2376C5.92371 28.5956 6.9784 28.8414 8.52135 28.9116C10.0688 28.983 10.5628 29 14.5006 29C18.4384 29 18.9323 28.983 20.4787 28.9128C22.0216 28.8425 23.0763 28.5967 23.9984 28.2388C24.9523 27.8683 25.7612 27.3721 26.5666 26.5667C27.3732 25.7602 27.8683 24.9525 28.2387 23.9986C28.5967 23.0765 28.8425 22.0219 28.9128 20.479C28.983 18.9327 29 18.4388 29 14.5011C29 10.5635 28.983 10.0696 28.9128 8.52328C28.8425 6.98039 28.5967 5.92574 28.2387 5.00363C27.8683 4.0498 27.3721 3.24098 26.5666 2.43555C25.7612 1.63012 24.9523 1.13168 23.9984 0.76125C23.0763 0.403281 22.0216 0.157461 20.4787 0.0872266C18.9323 0.0169922 18.4384 0 14.5006 0ZM14.5006 7.05402C10.3883 7.05402 7.0543 10.3879 7.0543 14.5C7.0543 18.6121 10.3883 21.946 14.5006 21.946C18.6128 21.946 21.9468 18.6121 21.9468 14.5C21.9468 10.3879 18.6128 7.05402 14.5006 7.05402ZM14.5006 19.3337C11.8316 19.3337 9.66667 17.17 9.66667 14.5C9.66667 11.83 11.8304 9.66629 14.5006 9.66629C17.1707 9.66629 19.3345 11.83 19.3345 14.5C19.3345 17.17 17.1696 19.3337 14.5006 19.3337ZM23.9814 6.75949C23.9814 7.72012 23.202 8.49949 22.2414 8.49949C21.2807 8.49949 20.5013 7.72012 20.5013 6.75949C20.5013 5.79887 21.2807 5.01949 22.2414 5.01949C23.202 5.01949 23.9814 5.79887 23.9814 6.75949Z">
              </path>
            </svg>
          </a> */}

          {/* <a href="https://twitter.com/RamPanpalia" target={"_blank"} rel="noreferrer">
            <svg className="twitter" width="38" height="38" viewBox="0 0 37 29" xmlns="http://www.w3.org/2000/svg">
              <title>Twitter</title>
              <path d="M11.6358 29C25.5981 29 33.2349 17.8442 33.2349 8.1699C33.2349 7.85304 33.2275 7.5376 33.2127 7.2236C34.6942 6.19023 35.9832 4.90137 37 3.43267C35.6399 4.01501 34.1762 4.40752 32.6399 4.58451C34.2072 3.67817 35.4105 2.24373 35.9773 0.53524C34.5106 1.3745 32.8856 1.98396 31.157 2.31224C29.7732 0.890639 27.8003 0 25.6173 0C21.4245 0 18.0249 3.27852 18.0249 7.32065C18.0249 7.89586 18.0915 8.45393 18.2218 8.98917C11.914 8.68373 6.31812 5.7706 2.5752 1.34024C1.92252 2.42214 1.5466 3.67959 1.5466 5.01983C1.5466 7.56044 2.88748 9.80131 4.92396 11.113C3.67928 11.0759 2.5086 10.7462 1.48592 10.1967C1.48444 10.2266 1.48444 10.258 1.48444 10.2894C1.48444 13.8349 4.10108 16.7951 7.57464 17.4659C6.93676 17.6329 6.26632 17.7229 5.57368 17.7229C5.08528 17.7229 4.60872 17.6758 4.14696 17.5901C5.1134 20.499 7.91504 22.6157 11.2391 22.6742C8.64024 24.6382 5.36796 25.8085 1.81152 25.8085C1.1988 25.8085 0.59496 25.7743 0 25.7072C3.3596 27.7882 7.3482 29 11.6358 29Z">
              </path>
            </svg>
          </a> */}

          {/* <a href="https://www.linkedin.com/in/ram-panpalia-99b7a716a/" target={"_blank"} rel="noreferrer">
            <svg className="linked-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>CodeChef</title>
              <path d="M11.007 0c-.787.031-1.515.37-2.222.685a12.27 12.27 0 01-1.864.703c-.635.176-1.3.354-1.814.788-.222.18-.356.439-.529.662-.309.486-.448 1.067-.457 1.638.036.61.216 1.2.376 1.786.368 1.262.807 2.503 1.197 3.759.366 1.161.703 2.344 1.294 3.416.197.394.35.808.535 1.206.027.067.052.158.142.149.136-.012.243-.115.368-.164.828-.414 1.74-.642 2.655-.749.708-.074 1.43-.078 2.131.054.72.163 1.417.426 2.092.724.36.172.719.348 1.088.498.048.04.135.058.16-.016.219-.327.469-.635.667-.976.495-1.061.522-2.279 1.038-3.331.358-.721.892-1.337 1.266-2.048.175-.266.431-.467.588-.747.437-.669.78-1.398 1.05-2.15.102-.293.172-.612.09-.919-.06-.299-.202-.57-.318-.848a2.481 2.481 0 00-.278-.66c-.407-.676-1.07-1.149-1.743-1.536-1.045-.59-2.196-.969-3.351-1.28A20.733 20.733 0 0011.426.01a5.005 5.005 0 00-.42-.01zm-.889.606c-.261.223-.363.569-.468.883-.168.568-.263 1.163-.207 1.756.064 1.062.197 2.12.33 3.175.18 1.352.387 2.7.677 4.034.026.165.064.347.05.51-.115-.175-.182-.383-.258-.58-.25-.765-.432-1.549-.604-2.334a26.008 26.008 0 01-.562-4.317c-.025-.843-.004-1.726.37-2.501.118-.226.259-.46.48-.597a.411.411 0 01.218-.049l-.026.02zM6.516 1.77c.128 0 .139.159.168.252.266.798.422 1.628.679 2.428.174.649.238 1.323.308 1.991.097 1.039.108 2.085.246 3.12.026.199.082.393.119.59.01.067-.059.049-.083.014-.148-.161-.183-.391-.246-.592-.16-.645-.242-1.305-.334-1.962-.174-1.316-.287-2.64-.529-3.945-.158-.612-.356-1.215-.46-1.838.006-.051.093-.048.132-.058zM4.589 3.607c.229.056.365.268.512.434.4.535.54 1.204.695 1.843.283 1.265.446 2.553.725 3.82.131.666.293 1.326.507 1.971.014.051.035.133.038.17-.233-.43-.393-.896-.565-1.353-.598-1.698-.823-3.496-1.3-5.228-.133-.478-.308-.95-.596-1.358-.047-.088-.08-.204-.037-.297.006-.004.014-.003.02-.002zm12.646 13.196c-.136.007-.31.11-.276.267.094.218.334.308.526.416.441.216.938.29 1.358.546.092.06.149.197.064.287-.18.266-.47.44-.723.634-.372.266-.777.51-1.057.879-.066.107-.041.267.082.32.109.079.243.018.338-.051.518-.294.995-.654 1.478-1.002.32-.239.644-.477.926-.76.085-.135-.03-.274-.118-.371-.273-.285-.62-.487-.965-.67a4.959 4.959 0 00-1.458-.495 1.251 1.251 0 00-.175 0zM5.96 16.83c-.527.134-.997.42-1.474.673-.425.243-.854.496-1.205.841a.699.699 0 00-.172.488c.065.108.2.14.301.206.852.442 1.735.822 2.63 1.168.132.042.265.113.406.107.158-.02.309-.204.213-.356-.146-.243-.42-.361-.65-.506-.547-.303-1.154-.512-1.636-.918-.046-.091.094-.128.142-.18.549-.395 1.229-.593 1.713-1.077.089-.09.164-.259.048-.358-.086-.073-.206-.087-.316-.088zm8.115.793c-.43.027-.835.431-.774.876.032.259.089.525.228.749.12.18.33.286.546.287.273.031.59-.059.726-.318.137-.237.212-.514.205-.787-.038-.46-.466-.845-.93-.807zm-4.49.01c-.464.028-.807.505-.77.953.011.444.315.902.765.994.352.06.71-.19.803-.53.125-.35.132-.761-.044-1.095-.157-.25-.478-.327-.754-.322zm.112.653c.241.064.294.47.045.558-.141.034-.239-.12-.234-.244-.008-.127.05-.287.189-.314zm4.437.143c.097 0 .226.071.19.187-.013.171-.215.333-.377.226-.132-.07-.172-.296-.02-.368a.418.418 0 01.207-.045zm-3.518 2.977c-.553.051-1.044.335-1.542.559-.304.156-.662.312-1.005.187-.377-.12-.707-.35-1.059-.52-.075-.013-.061.077-.047.122.081.53.129 1.102.454 1.55.338.437.902.618 1.433.667.797.072 1.642-.118 2.271-.629.309-.262.571-.631.585-1.049-.006-.324-.244-.596-.524-.734a1.085 1.085 0 00-.566-.153zm2.58.008c-.396.052-.815.262-.972.65-.129.358.034.748.272 1.02.426.509 1.07.793 1.718.884.577.078 1.186.014 1.714-.24.438-.225.767-.655.85-1.142.064-.291.081-.59.124-.884-.066-.078-.148.038-.218.052-.337.142-.647.367-1.01.435-.363.024-.687-.172-1.015-.293-.43-.178-.851-.403-1.315-.478a1.21 1.21 0 00-.147-.004zm-2.881-5.091c-.07 0-.143.014-.216.03a2.93 2.93 0 00-.454.152c-.15.061-.292.127-.407.18a4.07 4.07 0 01-.218.092.277.277 0 01-.182-.034c-.062-.037-.12-.101-.141-.255l-.27.038c.031.218.14.37.27.45.13.079.268.09.378.067.085-.018.16-.058.276-.111.116-.053.255-.118.397-.176.143-.058.288-.11.41-.138a.52.52 0 01.252-.009c.14.06.19.13.215.179.025.05.03.067.03.067l.263-.06s.002-.024-.05-.128a.678.678 0 00-.35-.307.482.482 0 00-.204-.037zm2.744 3.937a.136.136 0 00-.102.05s-.122.148-.286.295c-.165.148-.38.28-.493.283-.112.003-.314-.118-.47-.26-.155-.14-.267-.284-.267-.284a.136.136 0 10-.214.167s.124.16.299.319c.175.16.397.337.66.33.259-.008.484-.19.666-.352.182-.163.315-.325.315-.325a.136.136 0 00-.108-.223zM11.007.001c-.787.03-1.515.368-2.222.684a12.27 12.27 0 01-1.864.703c-.635.176-1.3.354-1.814.788-.222.18-.356.44-.529.663-.309.485-.448 1.066-.457 1.637.036.61.216 1.2.376 1.786.368 1.263.807 2.503 1.197 3.759.366 1.161.703 2.344 1.294 3.417.197.393.35.807.535 1.205.027.067.052.158.142.15.136-.013.243-.116.368-.165.828-.414 1.74-.641 2.655-.749.708-.074 1.43-.078 2.131.055.72.163 1.417.425 2.092.723.36.172.719.348 1.088.498.048.04.135.058.16-.016.219-.327.469-.635.667-.975.495-1.062.522-2.28 1.038-3.332.358-.721.892-1.336 1.266-2.047.175-.266.431-.468.588-.747.437-.67.78-1.4 1.05-2.151.102-.293.172-.612.09-.919-.06-.298-.202-.57-.318-.848a2.481 2.481 0 00-.278-.659c-.407-.676-1.07-1.15-1.743-1.536-1.045-.591-2.196-.97-3.351-1.281A20.733 20.733 0 0011.426.01a5.005 5.005 0 00-.42-.01zm-.889.606c-.261.222-.363.568-.468.883-.168.567-.263 1.163-.207 1.755.064 1.062.197 2.12.33 3.175.18 1.352.387 2.701.677 4.034.026.165.064.347.05.51-.115-.175-.182-.383-.258-.58-.25-.765-.432-1.549-.604-2.334a26.008 26.008 0 01-.562-4.316c-.025-.844-.004-1.727.37-2.502.118-.225.259-.46.48-.597a.411.411 0 01.218-.049l-.026.02zM6.516 1.77c.128 0 .139.16.168.252.266.798.422 1.628.679 2.429.174.648.238 1.322.308 1.99.097 1.04.108 2.086.246 3.12.026.199.082.394.119.59.01.068-.059.05-.083.014-.148-.16-.183-.39-.246-.592-.16-.645-.242-1.304-.334-1.962-.174-1.315-.287-2.64-.529-3.945-.158-.612-.356-1.215-.46-1.838.006-.051.093-.048.132-.058zM4.589 3.608c.229.055.365.267.512.433.4.535.54 1.204.695 1.843.283 1.265.446 2.554.725 3.82.131.666.293 1.327.507 1.971.014.051.035.133.038.17-.233-.43-.393-.896-.565-1.352-.598-1.7-.823-3.497-1.3-5.23-.133-.477-.308-.95-.596-1.357-.047-.087-.08-.204-.037-.296.006-.004.014-.003.02-.002zm12.646 13.195c-.136.007-.31.11-.276.268.094.217.334.307.526.416.441.215.938.289 1.358.545.092.06.149.197.064.287-.18.267-.47.44-.723.634-.372.266-.777.51-1.057.879-.066.107-.041.267.082.32.109.079.243.019.338-.05.518-.295.995-.655 1.478-1.002.32-.24.644-.478.926-.761.085-.135-.03-.274-.118-.37-.273-.286-.62-.488-.965-.672a4.959 4.959 0 00-1.458-.493 1.251 1.251 0 00-.175-.001zm-11.276.029c-.527.133-.997.42-1.474.672-.425.243-.854.497-1.205.842a.699.699 0 00-.172.487c.065.109.2.14.301.206.852.442 1.735.823 2.63 1.168.132.042.265.113.406.108.158-.02.309-.205.213-.357-.146-.243-.42-.361-.65-.506-.547-.303-1.154-.512-1.636-.918-.046-.09.094-.128.142-.18.549-.394 1.229-.592 1.713-1.077.089-.09.164-.258.048-.357-.086-.074-.206-.088-.316-.088zm8.115.792c-.43.028-.835.432-.774.876.032.26.089.526.228.75.12.179.33.285.546.287.273.03.59-.06.726-.319.137-.236.212-.514.205-.787-.038-.46-.466-.844-.93-.807zm-4.49.01c-.464.028-.807.505-.77.953.011.444.315.902.765.995.352.059.71-.19.803-.53.125-.35.132-.762-.044-1.096-.157-.249-.478-.327-.754-.322zm.112.654c.241.063.294.47.045.557-.141.034-.239-.12-.234-.244-.008-.127.05-.287.189-.313zm4.437.142c.097 0 .226.072.19.187-.013.172-.215.333-.377.227-.132-.071-.172-.297-.02-.369a.418.418 0 01.207-.045zm-3.518 2.977c-.553.052-1.044.336-1.542.56-.304.155-.662.311-1.005.186-.377-.119-.707-.35-1.059-.52-.075-.012-.061.078-.047.122.081.53.129 1.102.454 1.55.338.438.902.619 1.433.667.797.072 1.642-.118 2.271-.629.309-.262.571-.63.585-1.049-.006-.324-.244-.596-.524-.734a1.085 1.085 0 00-.566-.153zm2.58.008c-.396.052-.815.262-.972.65-.129.359.034.748.272 1.021.426.508 1.07.792 1.718.883.577.078 1.186.015 1.714-.24.438-.225.767-.655.85-1.142.064-.29.081-.59.124-.884-.066-.077-.148.039-.218.052-.337.143-.647.367-1.01.436-.363.024-.687-.172-1.015-.294-.43-.178-.851-.402-1.315-.477a1.21 1.21 0 00-.147-.004z" />
            </svg>
          </a> */}

          <a href="https://www.linkedin.com/in/ram-panpalia-99b7a716a/" target={"_blank"} rel="noreferrer">
            <svg className="linked-in" xmlns="http://www.w3.org/2000/svg" width="30" height="30" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
              <title>Linked-in</title>
              <path d="M228.582 205.715h126.462v64.832h1.83c17.611-31.595 60.675-64.832 124.892-64.832C615.303 205.715 640 288.818 640 396.926v220.219H508.116V421.93c0-46.536-.969-106.442-68.576-106.442-68.67 0-79.194 50.658-79.194 103.052v198.605H228.581v-411.43zM137.152 91.43c0 37.855-30.721 68.576-68.576 68.576-37.855 0-68.587-30.721-68.587-68.576 0-37.855 30.732-68.576 68.587-68.576 37.855 0 68.576 30.721 68.576 68.576zM-.011 205.715h137.163v411.43H-.011v-411.43z" />
            </svg>
          </a>

          <a href="https://github.com/RamPanpalia" target={"_blank"} rel="noreferrer">
            <svg className="github" xmlns="http://www.w3.org/2000/svg" width="30" height="30" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
              <title>Github</title>
              <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
            </svg>
          </a>

        </div>
      </div>
    </div>
  );
}

export default App;
/**
 *
git init
git add --all
git commit -m "commit"
git branch -M main
git remote add origin https://github.com/RamPanpalia/<RepositoryName>.git
git push -u origin main
 */