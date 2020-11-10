import React, { useRef, useEffect, useState } from 'react';
import './App.css';

// data
import data from './static/data'
import ReactGA from 'react-ga';

// components
import Header from './components/Header/Header'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Projects from './components/Projects/Projects'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'

import { stack as Menu } from 'react-burger-menu'
import Hidden from '@material-ui/core/Hidden';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#025f89'
    }
  }
});


const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function App() {
  const [visibleSection, setVisibleSection] = useState("Home");
  const [mobileNav, setMobileNav] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "Home", ref: headerRef },
    { section: "About", ref: aboutRef },
    { section: "Resume", ref: resumeRef },
    { section: "Projects", ref: projectsRef },
    { section: "Blogs", ref: blogsRef },
    { section: "Contact", ref: contactRef },
  ];

  const closeMenu = () => {
    setMobileNav(false);
  }

  const isMenuOpen = (state) => {
    setMobileNav(state.isOpen);
  };

  useEffect(() => {
    ReactGA.initialize(data.config.GA);
    ReactGA.pageview(window.location.pathname);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 50;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return null;
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }

      if (visibleSection === "About" || visibleSection === "Resume" || visibleSection === "Projects" || visibleSection === "Blogs" || visibleSection === "Contact") {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection, sectionRefs]);

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Hidden smDown>
          <div className={`sticky ${showNav ? "show" : "hide"}`}>
            <button
              type="button"
              className={`header_link`}
              onClick={() => {
                scrollTo(headerRef.current);
              }}
            >
              Home
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "About" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(aboutRef.current);
              }}
            >
              About
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Resume" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(resumeRef.current);
              }}
            >
              Resume
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Projects" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(projectsRef.current);
              }}
            >
              Projects
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Blogs" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(blogsRef.current);
              }}
            >
              Blogs
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(contactRef.current);
              }}
            >
              Contact
            </button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <Menu burgerButtonClassName={`${showNav ? "show" : "hide"}`} right width={150} customCrossIcon={false} isOpen={mobileNav} onStateChange={isMenuOpen}>
            <button
              type="button"
              className={`header_link ${visibleSection === "Home" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(headerRef.current);
                closeMenu();
              }}
            >
              Home
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "About" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(aboutRef.current);
                closeMenu();
              }}
            >
              About
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Resume" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(resumeRef.current);
                closeMenu();
              }}
            >
              Resume
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Projects" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(projectsRef.current);
                closeMenu();
              }}
            >
              Projects
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Blogs" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(blogsRef.current);
                closeMenu();
              }}
            >
              Blogs
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(contactRef.current);
                closeMenu();
              }}
            >
              Contact
            </button>
          </Menu>

        </Hidden>
        <div id="Header" ref={headerRef}>
          <Header data={data.main} />
        </div>
        <div id="About" ref={aboutRef}>
          <About data={data.main} />
        </div>
        <div id="Resume" ref={resumeRef}>
          <Resume data={data.resume} />
        </div>
        <div id="Projects" ref={projectsRef}>
          <Projects data={data.portfolio} />
        </div>
        <div id="Blogs" ref={blogsRef}>
          <Blogs data={data.main} />
        </div>
        <div id="Contact" ref={contactRef}>
          <Contact data={data.main} />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
