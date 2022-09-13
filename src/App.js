import './stylesheets/App.css';
import React, { useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import ComponentTemplate from './components/ComponentTemplate';
import c from './assets/Skills/c.svg'
import cpp from './assets/Skills/cpp.svg'
import html from './assets/Skills/html.svg'
import css from './assets/Skills/css.svg'
import JavaScript from './assets/Skills/JavaScript.svg'
import flutter from './assets/Skills/flutter01.svg'
import reactJs from './assets/Skills/reactJs.svg'
import github from './assets/Skills/github.svg'
import python from './assets/Skills/python.svg'
import vsCode from './assets/Skills/vsCode.svg'
// import vsCode from'./assets/Skills/vsCode.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from 'react-select'
import { ContactsOutlined } from '@mui/icons-material';

function App() {
  const [theme, setTheme] = useState(':root')
  const [title, setTitle] = useState('About Me');
  const [matter, setMatter] = useState('I am passionate about exploring and learning new things. I firmly believe that speaking more than required affects the efficiency of a person negatively. I like to implement my learnings by making projects and build things from stratch. I have a strong appetite to gain experience. I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards. I am not comfortable with settling, and I am always looking for an opportunity to do better and achieve greatness.');

  function setAboutme() {
    navToggle();
    setTitle('About Me');
    setMatter(() => {
      return (<>
        I am passionate about exploring and learning new things. I firmly believe that speaking more than required affects the efficiency of a person negatively. I like to implement my learnings by making projects and build things from stratch. I have a strong appetite to gain experience. I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards. I am not comfortable with settling, and I am always looking for an opportunity to do better and achieve greatness.
      </>)
    });
  }
  function setSkillZ() {
    navToggle();
    setTitle('SkillZ and Tools');
    setMatter(() => {
      return (<div className='skillsIcons'>
        <img src={html} alt="unable to load image!" title='HTML' />
        <img src={css} alt="unable to load image!" title='CSS' />
        <img src={JavaScript} alt="unable to load image!" title='JavaScript' />
        <img src={flutter} alt="unable to load image!" title='Flutter' />
        <img src={reactJs} alt="unable to load image!" title='ReactJS' />
        <img src={c} alt="unable to load image!" title='C' />
        <img src={cpp} alt="unable to load image!" title='C++' />
        <img src={vsCode} alt="unable to load image!" title='VS Code' />
        <img src={github} alt="unable to load image!" title='GitHub' />
        <img src={python} alt="unable to load image!" title='Python' />
      </div>)
    });
  }

  function setEduAExper() {
    navToggle();
    setTitle('Education And Experience');
    setMatter(() => {
      return (<>
        <ul>
          <li>BE Hons. Mechanical Engineering,BITS PILANI 2021-2025</li>
          <li>Data Structures and Algorithms, 2021-Present</li>
        </ul>
      </>)
    });
  }

  function setExperience() {
    navToggle();
    setTitle('Experience');
    setMatter(() => {
      return (<>
        <ul>
          <li>Frontend Web Developer at Computer Science Association, BITS Pilani, March 2022-Present</li>
          <p>-As a part of the Frontend team my job is to maintain CSA official website and design website for cultural fests and events.</p>
          <li>Competitive Programmer at Microsoft Learn Student Ambassador, BITS Pilani, March 2022-Present</li>
          <li>Developer Intern at Foozie.fit, Banglore, Aug 2022-Present</li>
        </ul>
      </>)
    });
  }

  function setProjects() {
    navToggle();
    setTitle('Projects');
    setMatter(() => {
      return (<>
        <p>Source Code available on <a href="https://github.com/RamPanpalia"> <u>GitHub</u> </a></p>
        <p>Click 👇 for preview</p>
        <ul>
          <li><a href="https://rampanpalia.github.io/FlipkartClone/" target={"_blank"}>Flipkart Clone</a></li>
          <li><a href="https://rampanpalia.github.io/therailpark.org-Clone/" target={"_blank"}>therailpark.org website Clone</a></li>
          <li><a href="https://rampanpalia.github.io/StartBootstrapClone/" target={"_blank"}>StartBootstrab Clone</a></li>
          <li><a href="https://rampanpalia.github.io/PangramPangramClone/" target={"_blank"}>Pangram Pangram Clone</a></li>
          <li><a href="https://htmlpreview.github.io/?https://github.com/RamPanpalia/DVM_Task1/blob/main/Task2/index.html" target={"_blank"}>Vendor Performance Form</a></li>
          <p>-This uses regex pattern validation to verify data and local storage to store the data</p>
          <li><a href="https://rampanpalia.github.io/Resume-Builder/" target={"_blank"}>Resume Builder</a></li>
          <p>-Made using simple JavaScript this website allows us to create Resumes</p>
          <li><a href="https://rampanpalia.github.io/sukart/" target={"_blank"}>SUKart</a></li>
          <p>-SUKart is a e-commerce website made using react and firebase</p>
          <li><a href="https://rampanpalia.github.io/RagedFingers/" target={"_blank"}>Raged Fingers</a></li>
          <p>-Raged Fingers is a typical website built to test you typing speed</p>
        </ul>
      </>)
    });
  }

  function setContact() {
    navToggle();
    setTitle('Contact Me');
    setMatter(() => {
      return (<>
        <p>Have something great to work on together or something interesting to share!</p>
        <p>Fill it here!</p>

        <form id="ContactMe" action="" class="ContactMe">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 2, minWidth: '25ch' },
            }}
            noValidate
            autoComplete="on"
            className='formBox'
          >
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
            <TextField id="standard-basic" label="Name" variant="filled" />
            <TextField id="standard-basic" label="Phone number" variant="filled" />
            <TextField id="standard-basic" label="Email-ID" variant="filled" />
            <TextField id="standard-basic" label="Message" variant="filled" multiline minRows={2} />
            <Button variant="contained" className="msg-button" type="submit">Submit</Button>
          </Box>
        </form>
        <br /><br />
        <p>Or share it here!</p>
        <br />
        <b>Personal E-mail ID:</b> panpaliaram@gmail.com <br />
        <b>College E-mail ID:</b> f20211363@pilani.bits-pilani.ac.in <br />
        <b>Phone number:</b> 9834088596 <br />

      </>)
    });
  }

  const [navOn, setNavOn] = useState(false);

  function navToggle() {
    if (navOn && window.innerWidth<=960) {
      document.querySelector('.navBar').style.display = "none";
      setNavOn(false);
    }
    else{
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
        <div className='navBar'>
          <ul>
            <li className='About' onClick={setAboutme}>About Me</li>
            <li className='SkillZ' onClick={setSkillZ}>SkillZ</li>
            <li className='EduAExper' onClick={setEduAExper}>Education and Certifications</li>
            <li className='Experience' onClick={setExperience}>Experience</li>
            <li className='Projects' onClick={setProjects}>Projects</li>
            <li className='Contact' onClick={setContact}>Contact Me</li>
            <div className='Resume Resume2'>
              <div className='checkout'>checkout</div>
              <a href='https://rampanpalia.github.io/Resume/' target={'_blank'}><div className='resLink'>MyResume</div></a>
            </div>
          </ul>
        </div>
        <div className='flexMain'>
          <div className='flexone'>
            <div className='profile-Image'></div>
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
              <a href='https://rampanpalia.github.io/Resume/' target={'_blank'}><div className='resLink'>MyResume</div></a>
            </div>
            <div className='changeTheme'>
              <select className='themeValue' onChange={(e) => { setTheme(e.target.value) }}>
                <option value={':root'}>Light Gray Blue</option>
                <option value={'theme-01'}>Dark Gray Blue</option>
                <option value={'theme-02'}>Red</option>
                <option value={'orange'}>Orange</option>
                <option value={'black-white'}>Black & White</option>
                <option value={'ocean-blue'}>Ocean-Blue</option>
                <option value={'lite'}>Lose all Colors🙃</option>
              </select>
            </div>
          </div>
          <div className='flextwo'>
            <div className='componentContainer'>
              <ComponentTemplate
                title={title}
                matter={matter}
              />
            </div>
          </div>
        </div>
        <div className="social-media">

          <a href="https://www.facebook.com/ram.panpalia" target={'_blank'}>
            <svg className="facebook" width="38" height="38" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <title>Facebook</title>
              <path d="M15 0C6.71631 0 0 6.75716 0 15.0912C0 22.623 5.48438 28.8667 12.6565 30V19.4544H8.84678V15.0912H12.6562V11.7656C12.6562 7.98155 14.8966 5.89324 18.322 5.89324C19.9632 5.89324 21.6803 6.18829 21.6803 6.18829V9.90214H19.7883C19.7593 9.90214 19.7303 9.90244 19.7019 9.90303C18.1087 9.93457 17.4853 10.8412 17.3657 11.8672C17.3657 11.8684 17.3654 11.8696 17.3654 11.8705C17.3634 11.8885 17.3613 11.9062 17.3596 11.9241C17.3596 11.9247 17.3596 11.925 17.3593 11.9256C17.3578 11.9406 17.3566 11.956 17.3552 11.971C17.3549 11.9742 17.3546 11.9778 17.3543 11.981C17.3531 11.9946 17.3522 12.0081 17.3514 12.0214C17.3511 12.0264 17.3505 12.0314 17.3502 12.0364C17.3496 12.0476 17.349 12.0588 17.3484 12.07C17.3481 12.0774 17.3476 12.0848 17.3473 12.0921C17.3464 12.1092 17.3458 12.1263 17.3452 12.1437C17.3452 12.1452 17.3452 12.1464 17.3449 12.1478C17.3443 12.1638 17.344 12.18 17.3438 12.1959C17.3438 12.1985 17.3438 12.2012 17.3435 12.2038C17.3432 12.2224 17.3432 12.2413 17.3432 12.2599V15.0912H21.503L20.8389 19.4544H17.3435V29.9997C24.5156 28.8687 30 22.625 30 15.0912C30 6.75716 23.2837 0 15 0Z"></path></svg>
          </a>

          <a href="https://www.instagram.com/rampanpalia_08_04/" target={"_blank"}>
            <svg className="instagram" width="38" height="38" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <path d="M14.5006 2.61227C18.3727 2.61227 18.8315 2.62699 20.3597 2.69723C21.7735 2.7618 22.5416 2.99742 23.0525 3.1968C23.7288 3.45961 24.2125 3.77453 24.7201 4.28203C25.2276 4.78953 25.5414 5.27211 25.8042 5.94953C26.0025 6.46043 26.2392 7.22848 26.3038 8.64223C26.374 10.1715 26.3888 10.6303 26.3888 14.5011C26.3888 18.372 26.374 18.8319 26.3038 20.36C26.2392 21.7738 26.0036 22.5418 25.8042 23.0527C25.5414 23.729 25.2265 24.2127 24.7201 24.7202C24.2125 25.2277 23.73 25.5415 23.0525 25.8043C22.5416 26.0026 21.7735 26.2393 20.3597 26.3039C18.8303 26.3741 18.3727 26.3889 14.5006 26.3889C10.6285 26.3889 10.1697 26.3741 8.64143 26.3039C7.22763 26.2393 6.45955 26.0037 5.94863 25.8043C5.27232 25.5415 4.78859 25.2266 4.28107 24.7202C3.77355 24.2127 3.45974 23.7302 3.19692 23.0527C2.99867 22.5418 2.7619 21.7738 2.69733 20.36C2.62709 18.8307 2.61237 18.372 2.61237 14.5011C2.61237 10.6303 2.62709 10.1704 2.69733 8.64223C2.7619 7.22848 2.99754 6.46043 3.19692 5.94953C3.45974 5.27324 3.77468 4.78953 4.28107 4.28203C4.78745 3.77453 5.27118 3.46074 5.94863 3.1968C6.45955 2.99855 7.22763 2.7618 8.64143 2.69723C10.1697 2.62699 10.6285 2.61227 14.5006 2.61227ZM14.5006 0C10.5628 0 10.0688 0.0169922 8.52248 0.0872266C6.9784 0.157461 5.92484 0.403281 5.00156 0.76125C4.0477 1.13168 3.23884 1.62785 2.43338 2.43328C1.62792 3.23871 1.13172 4.04867 0.76128 5.0025C0.403297 5.92461 0.157467 6.97813 0.08723 8.52215C0.0169928 10.0684 0 10.5623 0 14.5C0 18.4377 0.0169928 18.9316 0.08723 20.4779C0.157467 22.0207 0.403297 23.0754 0.76128 23.9975C1.13172 24.9513 1.62792 25.7602 2.43338 26.5656C3.23997 27.3721 4.0477 27.8672 5.00156 28.2376C5.92371 28.5956 6.9784 28.8414 8.52135 28.9116C10.0688 28.983 10.5628 29 14.5006 29C18.4384 29 18.9323 28.983 20.4787 28.9128C22.0216 28.8425 23.0763 28.5967 23.9984 28.2388C24.9523 27.8683 25.7612 27.3721 26.5666 26.5667C27.3732 25.7602 27.8683 24.9525 28.2387 23.9986C28.5967 23.0765 28.8425 22.0219 28.9128 20.479C28.983 18.9327 29 18.4388 29 14.5011C29 10.5635 28.983 10.0696 28.9128 8.52328C28.8425 6.98039 28.5967 5.92574 28.2387 5.00363C27.8683 4.0498 27.3721 3.24098 26.5666 2.43555C25.7612 1.63012 24.9523 1.13168 23.9984 0.76125C23.0763 0.403281 22.0216 0.157461 20.4787 0.0872266C18.9323 0.0169922 18.4384 0 14.5006 0ZM14.5006 7.05402C10.3883 7.05402 7.0543 10.3879 7.0543 14.5C7.0543 18.6121 10.3883 21.946 14.5006 21.946C18.6128 21.946 21.9468 18.6121 21.9468 14.5C21.9468 10.3879 18.6128 7.05402 14.5006 7.05402ZM14.5006 19.3337C11.8316 19.3337 9.66667 17.17 9.66667 14.5C9.66667 11.83 11.8304 9.66629 14.5006 9.66629C17.1707 9.66629 19.3345 11.83 19.3345 14.5C19.3345 17.17 17.1696 19.3337 14.5006 19.3337ZM23.9814 6.75949C23.9814 7.72012 23.202 8.49949 22.2414 8.49949C21.2807 8.49949 20.5013 7.72012 20.5013 6.75949C20.5013 5.79887 21.2807 5.01949 22.2414 5.01949C23.202 5.01949 23.9814 5.79887 23.9814 6.75949Z">
              </path>
            </svg>
          </a>

          <a href="https://twitter.com/RamPanpalia" target={"_blank"}>
            <svg className="twitter" width="38" height="38" viewBox="0 0 37 29" xmlns="http://www.w3.org/2000/svg">
              <title>Twitter</title>
              <path d="M11.6358 29C25.5981 29 33.2349 17.8442 33.2349 8.1699C33.2349 7.85304 33.2275 7.5376 33.2127 7.2236C34.6942 6.19023 35.9832 4.90137 37 3.43267C35.6399 4.01501 34.1762 4.40752 32.6399 4.58451C34.2072 3.67817 35.4105 2.24373 35.9773 0.53524C34.5106 1.3745 32.8856 1.98396 31.157 2.31224C29.7732 0.890639 27.8003 0 25.6173 0C21.4245 0 18.0249 3.27852 18.0249 7.32065C18.0249 7.89586 18.0915 8.45393 18.2218 8.98917C11.914 8.68373 6.31812 5.7706 2.5752 1.34024C1.92252 2.42214 1.5466 3.67959 1.5466 5.01983C1.5466 7.56044 2.88748 9.80131 4.92396 11.113C3.67928 11.0759 2.5086 10.7462 1.48592 10.1967C1.48444 10.2266 1.48444 10.258 1.48444 10.2894C1.48444 13.8349 4.10108 16.7951 7.57464 17.4659C6.93676 17.6329 6.26632 17.7229 5.57368 17.7229C5.08528 17.7229 4.60872 17.6758 4.14696 17.5901C5.1134 20.499 7.91504 22.6157 11.2391 22.6742C8.64024 24.6382 5.36796 25.8085 1.81152 25.8085C1.1988 25.8085 0.59496 25.7743 0 25.7072C3.3596 27.7882 7.3482 29 11.6358 29Z">
              </path>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/ram-panpalia-99b7a716a/" target={"_blank"}>
            <svg className="linked-in" xmlns="http://www.w3.org/2000/svg" width="30" height="30" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><title>Linked-in</title><path d="M228.582 205.715h126.462v64.832h1.83c17.611-31.595 60.675-64.832 124.892-64.832C615.303 205.715 640 288.818 640 396.926v220.219H508.116V421.93c0-46.536-.969-106.442-68.576-106.442-68.67 0-79.194 50.658-79.194 103.052v198.605H228.581v-411.43zM137.152 91.43c0 37.855-30.721 68.576-68.576 68.576-37.855 0-68.587-30.721-68.587-68.576 0-37.855 30.732-68.576 68.587-68.576 37.855 0 68.576 30.721 68.576 68.576zM-.011 205.715h137.163v411.43H-.011v-411.43z" /></svg>
          </a>

          <a href="https://github.com/RamPanpalia" target={"_blank"}>
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