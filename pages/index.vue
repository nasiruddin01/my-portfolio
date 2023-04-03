<template>
  <div class="page">
    <header id="landing" class="header-section">
      <nav class="navbar">
        <div class="nav-container">
          <div class="div-row">
            <div class="logo-div">
              <a class="logo" href="/">
                <img src="/favicon.png" alt="" />
              </a>
            </div>
            <div class="link-bar">
              <ul>
                <li>
                  <a href="#about" @click="scrollToSection('#section1')"
                    >About</a
                  >
                </li>
                <li>
                  <a href="#skills" @click="scrollToSection('#section2')"
                    >Skills</a
                  >
                </li>
                <li>
                  <a href="#work" @click="scrollToSection('#section3')"
                    >Projects</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <!-- SHOWCASE -->
      <section id="showcase" ref="section1">
        <div class="container">
          <img class="top-cloud" src="image/cloud1.png" alt="cloud-image" />
          <img class="bottom-cloud" src="image/cloud1.png" alt="cloud-image" />
          <div class="showcse-content">
            <h1 class="font-page-title">Nasir Uddin</h1>
            <p class="font-page-paragraph">
              Explore my portfolio and see the range of projects I have worked
              on. Contact me if you would like to discuss collaborating on your
              next project.
            </p>
          </div>
        </div>
        <img
          class="mountain m-1"
          src="image/mountain-big-screen.png"
          alt="mountain-image"
        />
        <img
          class="mountain m-2"
          src="image/mountain-tab.png"
          alt="mountain-image"
        />
        <img
          class="mountain m-3"
          src="image/mountain-mobile.png"
          alt="mountain-image"
        />
      </section>
    </header>

    <!-- ABOUT SECTION -->
    <section id="about" ref="section1">
      <div class="container">
        <div class="about-content">
          <img
            class="profile-image"
            src="/static/image/programmer-1.png"
            alt="profile-image"
          />
          <div class="about-me">
            <h1 class="about-header">Hi Everybody.</h1>
            <p class="about-paragraph">
              Hi Iam Nasir Uddin. I am a self-taught fullstack developer. I am
              experienced with HTML, CSS, JavaScript, Vue, Nuxt, Firebase,
              Node.js, Express.js, and git.I am a quick learner and have good
              communication skills. Currently I am working full-time as a
              Full-Stack Developer at Connekt Studio. I am a passionate Software
              Developer with a keen eye for capturing the beauty of life through
              the art of photography.
            </p>
          </div>
        </div>
      </div>
      <img
        class="outer-core"
        src="/image/outer-core.png"
        alt="start-point-outer-core"
      />
    </section>

    <!-- SKILLS SECTION -->
    <section id="skills" ref="section2">
      <div class="container">
        <div class="skills-section">
          <h1 class="skills-header">My Skills</h1>
          <div class="skill">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="skill-container"
            >
              <img :src="skill.logo" alt="" />
              <h3>{{ skill.name }}</h3>
            </div>
          </div>
        </div>
      </div>
      <img
        width="100%"
        class="inner-core"
        src="/image/inner-core.png"
        alt="inner-core"
      />
    </section>

    <!-- Project section -->
    <section id="work" ref="section3" class="text-center py-3">
      <div class="container">
        <h2 class="section-title">My Works</h2>
        <p class="lead">Some of my projects.</p>
        <div class="items">
          <div v-for="project in projects" :key="project.id" class="item">
            <div class="item-image">
              <img :src="project.image" alt="item-image" />
            </div>
            <div class="item-text">
              <div class="item-text-wrap">
                <p class="item-text-category">Web Site</p>
                <h2 class="item-text-title">{{ project.name }}</h2>

                <button class="btn" @click="selectedProject(project.id)">
                  <svg
                    height="16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="heart-rate"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    class="svg-inline--fa fa-heart-rate fa-w-20 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M624 232H480c-9.3 0-17.76 5.37-21.72 13.79l-35.78 76.04-79.28-303.89C340.47 7.36 330.91 0 320 0c-.19 0-.41 0-.62.02-11.12.28-20.62 8.2-22.88 19.12l-75.84 366.52-37.53-136.03c-2.87-10.41-12.35-17.62-23.15-17.62H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h125.72l59.16 214.38A23.974 23.974 0 0 0 224 512c.25 0 .53 0 .78-.02 11.09-.36 20.47-8.27 22.72-19.12l75.19-363.44 70.09 268.64c2.53 9.77 10.94 16.91 21 17.83 10.5 1.14 19.62-4.53 23.94-13.67L495.22 280H624c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"
                      class=""
                    ></path>
                  </svg>
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--FOTTER SECTION-->
    <footer id="main-footer">
      <div class="container">
        <div class="social-link" @click="scrollToTop">
          <a target="_blank" href="https://twitter.com/nasir_uddin01"
            ><svg
              height="25px"
              width="25px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-twitter fa-w-16 fa-2x"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                class=""
              ></path></svg
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/md-nasir-uddin-2225551a7/"
            ><svg
              height="25px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-linkedin fa-w-14 fa-2x"
            >
              <path
                fill="currentColor"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                class=""
              ></path></svg
          ></a>
          <a target="_blank" href="https://github.com/nasiruddin01"
            ><svg
              height="25px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-github-square fa-w-14 fa-2x"
            >
              <path
                fill="currentColor"
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
                class=""
              ></path></svg
          ></a>
          <a
            target="_blank"
            href="https://www.facebook.com/md.nasiruddin.12576/"
            ><svg
              height="25px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-facebook-square fa-w-14 fa-2x"
            >
              <path
                fill="currentColor"
                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                class=""
              ></path></svg
          ></a>
        </div>
        <div class="copyright">
          <p>© 2022 Nasir Uddin, All Right Reserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import CustomModal from '~/components/modal.vue'

export default {
  data() {
    return {
      skills: [
        {
          name: 'Vue.js',
          logo: '/image/skill/vue.svg',
        },
        {
          name: 'JavaScript',
          logo: '/image/skill/javascript.png',
        },
        {
          name: 'Nuxt.js',
          logo: '/image/skill/nuxt.png',
        },
        {
          name: 'Vuetify',
          logo: '/image/skill/vuetify.png',
        },
        {
          name: 'Firebase',
          logo: '/image/skill/firebase.webp',
        },
        {
          name: 'Supabase',
          logo: '/image/skill/supabase.png',
        },
        {
          name: 'NodeJs',
          logo: '/image/skill/node.svg',
        },
        {
          name: 'Mongo',
          logo: '/image/skill/mongo.png',
        },
        {
          name: 'Git',
          logo: '/image/skill/github.svg',
        },
      ],
      projects: [
        {
          id: 'scribble',
          name: 'ScribbleToArt',
          description:
            'Scribble To Art App description: Scribble To Art App uses AI to turn user drawings into stunning art. Developed with Vue.js and secure Google Authentication. It also features an AI API for creating beautiful art pieces. Additional user-friendly features have been added for a seamless experience.',
          features: [
            'Firebase integration for authentication, saving and retrieving user drawings',
            'API integration for efficient communication and data transfer',
            'Stripe integration for direct payments through the app',
            'AI API link with Firebase for creating stunning artwork from user drawings.',
            'Added expand feature to the frontend for better view and user experience',
            'Users can expand different sections of the app such as the canvas or toolbar for more details and options',
            'Provides greater control and flexibility in working with the app',
            'Seamlessly integrated into the frontend for easy access with a single click or tap',
            'Intuitive and user-friendly design for a powerful tool in creating stunning works of art.',
          ],
          image: 'image/projects/scribble.png',
          link: 'https://scribbletoart.com/',
        },
        {
          id: 'appolo',
          name: 'Apollo HMS',
          description:
            'As a software developer, I have had the opportunity to work on various projects that have helped me develop my skills in different areas. One of my most notable projects is Apollo HMS, a hospital management software designed to simplify the operations of healthcare facilities.',
          features: [
            ' Developed user-friendly interface for Apollo HMS using Vuetify framework',
            'Implemented Firebase authentication for securing patient data and restricting access to authorized users only',
            'Integrated HTML to PDF, print, and docs converters for quick generation of reports and documents in various formats',
            'Enhanced efficiency in hospital operations through the use of the above features',
            'Showcased skills in software development, including frontend technologies like Vuetify and authentication systems like Firebase',
            'Demonstrated ability to integrate different technologies to deliver a robust software solution for healthcare facilities',
          ],
          image: 'image/projects/appolo.png',
          link: 'https://apollo-hms-frontend.pages.dev/',
        },
        {
          id: 'mullokoto',
          name: 'Mullokoto',
          description:
            'Mullokoto is a price comparison platform in Bangladesh that allows users to compare prices across multiple ecommerce websites. It offers filtered search results based on product and price range, helping users save money and make informed purchasing decisions.',
          features: [
            'Integrate UI into the frontend',
            'Incorporate Firebase authentication into the frontend and establish a ',
            'connection with the API',
            'Enable sorting by price, from lowest to highest',
            'Enable filtering by seller',
            'Administer the team and allocate tasks among team members',
          ],
          image: '/image/projects/mullokoto.png',
          link: 'https://www.mullokoto.com/',
        },
        {
          id: 'connekt-camp',
          name: 'Connekt Camp',
          description:
            'As a front-end developer for Connekt Camp, I implemented Firebase Authentication and led the front-end development to create a seamless user experience. Working with the team, I optimized the platform for performance and functionality, contributing to a project that empowers learners to succeed in coding',
          features: [
            'Execute the UI design in accordance with the design ratio.',
            'Implement Firebase Authentication feature.',
            'Establish connection with the API upon completion of sign-up process',
            'Incorporate the API into the project.',
            'Link the data backend to the front-end of the application.',
          ],
          image: 'image/projects/connekt-camp.png',
          link: 'https://connekt.camp/',
        },
        {
          id: 'Inkrement',
          name: 'Inkrement',
          description:
            "Inkrement is a feedback tool that integrates with Slack, allowing users to receive valuable input from peers. The platform's integration with Slack enables easy access to insights and perspectives, helping individuals to grow and improve.",
          features: [
            'Integrate UI into the frontend',
            'Incorporate Slack authentication into the frontend and establish a connection with the API',
            'Enable Search by name & praises header.',
            'Enable total calculation that A person giving & receiving feedback.',
            'Integration Api to frontend.',
          ],
          image: 'image/projects/inkrement.png',
          link: 'https://inkrement.io/',
        },
        {
          id: 'food',
          name: 'Food Recipe App',
          description:
            'I used Vue.js to implement the UI design of the Food Recipe App, which boasts a vast collection of recipes. The seamless connection between the front-end and back-end ensures optimal user experience.',
          features: [
            ' Implement Api to frontend',
            'Connect the data from the backend to the frontend.',
            'Incorporate a search function into the app.',
            'Enable users to save selected recipes to their local storage,',
            'Allowing them to create a wishlist of recipes they want to try.',
          ],
          image: 'image/projects/foodiworld.png',
          link: 'https://foodiworld.netlify.app/',
        },
      ],
    }
  },
  computed: {},

  methods: {
    selectedProject(id) {
      this.$router.push('/project/' + id)
    },
    scrollToSection(hash) {
      if (hash !== '') {
        event.preventDefault()
        const section = this.$refs[hash.slice(1)]
        const scrollTop = section.offsetTop
        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth',
        })
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
:root {
  --primary-color: #10723e;
  --secondary-color: #235952;
  --dark-color: #001008;
  --ligth-color: #ddeff5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
li,
a {
  font-family: 'Poppins', sans-serif;
}

p {
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
}

.nav-container {
  max-width: 100vw !important;
  width: 95%;
  margin: 0 auto;
  padding: 0 1rem;
}

#landing {
  background-color: #ddeff5;
}

#landing .navbar {
  width: 100%;
  margin: auto;
  padding: 1.75rem 0;
}

#landing .navbar .div-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#landing .navbar .div-row .logo-div .logo {
  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
}

#landing .navbar .div-row .link-bar ul {
  display: flex;
  justify-content: flex-end;
}

#landing .navbar .div-row .link-bar ul li {
  margin-left: 2.2rem;
}

#landing .navbar .div-row .link-bar ul a {
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
}

#landing .navbar .div-row .link-bar ul a:hover {
  color: var(--dark-color);
}

/******** SHOWCASE ********/

#showcase {
  height: 81vh;
  display: flex;
  flex-direction: column;
}

#showcase .container {
  position: relative;
}

#showcase .container > .top-cloud,
#showcase .container > .bottom-cloud {
  width: 145px;
  position: absolute;
}

#showcase .container > .top-cloud {
  top: 3.5rem;
  right: -13rem;
}

#showcase .container > .bottom-cloud {
  bottom: 5.5rem;
  left: -13rem;
}

#showcase .showcse-content {
  padding-top: 0.5rem;
  text-align: center;
  margin: 3.5rem 0;
}

#showcase .showcse-content h1 {
  // font-family: 'Sacramento', cursive;
  font-size: 3rem;
  width: 80%;
  margin: auto;
  background: linear-gradient(
    90deg,
    #ff0000 0%,
    #ffc800 22%,
    #ff117c 50%,
    #4e1dff 79%,
    #00ff00 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animatedgradient 3s ease alternate infinite;
}

#showcase .showcse-content p {
  width: 50%;
  margin: auto;

  font-size: 1rem;
  font-family: 'Josefin Sans', sans-serif;
  color: var(--primary-color);
  margin-bottom: 5.5rem;
}

#showcase .m-2,
#showcase .m-3 {
  display: none;
}

#showcase .mountain {
  position: relative;
  top: 15px;
  width: 100%;
}

/******** ABOUT SECTION ********/

#about {
  background-color: #f6d485;
}

#about .about-content {
  text-align: center;
  padding: 2rem 0 5.4rem;
  position: relative;
}

#about .about-content img {
  width: 220px;
  margin: 2.8rem;
}

#about .about-content .about-me {
  width: 72%;
  margin: auto;
  line-height: 2;
}

#about .about-content .about-me h1 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: #7a4d1d;
}

#about .outer-core {
  position: relative;
  top: 15px;
  width: 100%;
}

/******** SKILLS SECTION ********/

#skills {
  background: #d6d6d6;
}

#skills img {
  transform: translateY(10px);
}

#skills .skills-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  max-width: 100vw;
  width: 100%;
  margin: auto;
  overflow: hidden;
}

#skills .skills-section h1,
#skills .skills-section h2 {
  color: var(--secondary-color);
  font-weight: normal;
}

#skills .skills-section h2 {
  font-size: 2rem;
  margin-bottom: 0.3rem;
}

#skills .skills-section > h1 {
  font-size: 3.5rem;
  margin: 2rem 0 3rem;
}

#skills .skills-section .skill {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
}

#skills .skills-section .skill .skill-container img {
  width: 150px;
  height: 150px;
}

#skills .skills-section .skill .skill-container h3 {
  margin-top: 2rem;
  text-align: center;
}

/* Project section */

.text-center {
  text-align: center;
}

.py-1 {
  padding: 1rem 0;
}

.py-2 {
  padding: 2rem 0;
}

.py-3 {
  padding: 3rem 0;
}

.py-4 {
  padding: 4rem 0;
}

.my-1 {
  margin: 1rem 0;
}

.my-2 {
  margin: 2rem 0;
}

.my-3 {
  margin: 3rem 0;
}

.my-4 {
  margin: 4rem 0;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #2e435e;
  text-align: center;
}

.bottom-line {
  height: 3.5px;
  width: 8rem;
  margin: 0.4rem auto 1.5rem;
  background: #2f445f;
}

a {
  text-decoration: none;
  color: #162233;
}

h2,
h3,
h4 {
  text-transform: uppercase;
}

#work .container h2 {
  margin-bottom: 1rem;
}

#work .container .lead {
  margin-bottom: 1rem;
}

#work .items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.8rem;
}

#work .items .item {
  position: relative;
  overflow: hidden;
  background-color: #000;
  border-image: linear-gradient(
      135deg,
      #ff0000,
      #e4205d,
      #4a3ece,
      #f100f1,
      #1000ee,
      #b10000
    )
    1;

  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
}

#work .items .item .item-text .item-text-wrap .item-text-category {
  margin-top: 1.5rem;
  color: #000000;
}

#work .items .item .item-text .item-text-wrap .item-text-title {
  margin-top: 1.25rem;
  color: #000000;
}

#work .items .item .item-text .item-text-wrap .btn {
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  background-color: #ddeff5;
  -webkit-box-shadow: 1px 1px 20px 0 #f4edee;
  -moz-box-shadow: 1px 1px 20px 0 #f4edee;
  box-shadow: 1px 1px 20px 0 #f4edee;
  text-shadow: 1px 1px 20px #797272;
  border: solid #101620 1px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
}

#work .items .item .item-text .item-text-wrap .btn:hover {
  background: #e66f6e;
  border: solid #15171a 1px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  text-decoration: none;
}

#work .items .item .item-text .item-text-wrap .ml-1 {
  margin-right: 1rem;
}

#work .items .item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: block;
  background: linear-gradient(to bottom, #e66f6e 0%, #ddeff5 100%);
  opacity: 0.9;
  transform: scale(2) translateX(-75%) translateY(-75%) rotate(60deg);
  transition: transform 3s cubic-bezier(0.2, 1, 0.3, 1);
}

#work .items .item:hover:after {
  transform: scale(2) translateX(0) translateY(0) rotate(28deg);
}

#work .items .item:hover .item-image {
  transform: scale(1.2);
}

#work .items .item:hover .item-text {
  opacity: 1;
  transform: scale(1) translateY(0);
  transition: 500ms;
  transition-delay: 0.45s;
}

#work .items .item-image {
  height: 220px !important;
  display: block;
  transform: translateZ(0);
  transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);
}

#work .items .item-image::before {
  content: '';
  display: block;
  padding-top: 75%;
  overflow: hidden;
}

#work .items .item-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100% !important;
  height: auto;
  line-height: 0;
}

#work .items .item-text {
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  z-index: 1;
  transform: translateY(-20%);
  transition: opacity 500ms cubic-bezier(0.2, 1, 0.3, 1),
    transform 500ms cubic-bezier(0.2, 1, 0.3, 1);
}

#work.items .item-text-wrap {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

#work.items .item-text-title {
  font-size: 2rem;
  padding: 0.4rem 1rem;
}

#work.items .item-text-category {
  text-transform: uppercase;
  margin: 0;
  font-size: 1.3rem;
}

/******** FOOTER SECTION ********/

#main-footer {
  background-color: #fff;
  padding: 1.5rem;
  text-align: center;
}

#main-footer .social-link a {
  margin: 1.5rem;
  font-size: 1.3rem;
  color: var(--secondary-color);
  transition: all 0.3s ease-in-out;
}

#main-footer .social-link a:hover {
  color: var(--dark-color);
}

#main-footer .copyright p {
  color: var(--dark-color);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
}

@media (min-height: 1000px) {
  #showcase {
    height: 1000px;
  }
}
// mobile
#showcase {
  height: unset;
  display: unset;
  position: relative;
}

/******** NAVIGATION BAR ********/

/* #landing .navbar .div-row {
    padding: 1rem 3rem;
} */

/******** SHOWCASE ********/

#showcase .container {
  position: unset;
  overflow: hidden;
}

#showcase .container > .top-cloud {
  top: 15%;
  right: 0;
}

#showcase .container > .bottom-cloud {
  bottom: 40%;
  left: 0;
}

#showcase .showcse-content {
  margin: 13.5rem 0;
}

#showcase .m-1 {
  display: none;
}

#showcase .m-2 {
  display: inline;
}

/******** SKILLS SECTION ********/

.inner-core {
  top: 5px;
}

/**************************** MOBILE RESPONSIVE ****************************/

@media (max-width: 720px) {
  /******** NAVIGATION BAR ********/
  #landing .navbar {
    /* display: none; */
    width: 95%;
    margin: 0 auto;
  }
  #landing .navbar .div-row {
    display: grid;
    grid-template-columns: 30px auto;
    grid-gap: 1rem;
    /* display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center; */
  }
  #landing .navbar .div-row .logo-div .logo {
    width: 20px;
    height: 15px;
  }
  #landing .navbar .div-row .link-bar ul {
    align-items: center;
  }
  #landing .navbar .div-row .link-bar ul li {
    margin: 0 1.6rem;
  }
  #landing .navbar .div-row .link-bar ul a {
    font-size: 1.1rem;
  }
  /******** SHOWCASE ********/
  #showcase .showcse-content {
    margin: 10.5rem 0;
  }
  #showcase .showcse-content h1 {
    font-size: 4rem;
  }
  #showcase .showcse-content p {
    font-size: 1.1rem;
  }
  #showcase .container > .top-cloud,
  #showcase .container > .bottom-cloud {
    width: 120px;
  }
  #showcase .container > .top-cloud {
    top: 12%;
    right: -2.5rem;
  }
  #showcase .container > .bottom-cloud {
    bottom: 40%;
    left: -3rem;
  }
  #showcase .m-2 {
    display: none;
  }
  #showcase .m-3 {
    display: inline;
  }
  /******** ABOUT SECTION ********/
  #about .about-content {
    padding: 5rem 0 5.4rem;
  }
  #about .about-content img {
    width: 160px;
    margin: 1.5rem;
  }
  #about .about-content .about-me h1 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  #about .about-content .about-me {
    width: 80%;
  }
  #work .container .items {
    display: grid;
    grid-template-columns: 1fr;
  }
  /******** SKILLS SECTION ********/
  /* #skills .skills-section {
        padding: 5rem 0 3.5rem;
    } */
  #skills .skills-section .skill {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }
  #skills .skills-section .designing,
  #skills .skills-section .programming,
  #skills .skills-section .web-development {
    grid: unset;
    text-align: center;
  }
  #skills .skills-section .designing,
  #skills .skills-section .programming {
    margin-bottom: 2rem;
  }
  #skills .skills-section > h1 {
    font-size: 2.5rem;
    margin: 2rem 0 3.5rem;
  }
  .p-i-1 {
    display: none;
  }
  .p-i-2 {
    display: inline;
  }
  .designer-image,
  .programmer-image,
  .web-development-image {
    width: 160px;
    margin: auto;
    margin-bottom: -2rem;
  }
  #skills .skills-section h2 {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
  }
  /******** FOOTER SECTION ********/
  #main-footer .social-link a {
    display: inline-block;
    margin: 1rem;
    font-size: 1.1rem;
  }
  #main-footer .copyright p {
    color: var(--dark-color);
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 2;
  }
}

@media (max-height: 825px) {
  /******** SHOWCASE ********/
  #showcase .showcse-content {
    margin: 12.4rem 0;
  }
}

@media (max-height: 740px) {
  /******** SHOWCASE ********/
  #showcase .showcse-content {
    margin: 9.6rem 0;
  }
}

@media (max-height: 670px) {
  /******** SHOWCASE ********/
  #showcase .showcse-content {
    margin: 8rem 0;
  }
}

@media (max-height: 641px) {
  /******** SHOWCASE ********/
  #showcase .showcse-content {
    margin: 7.4rem 0;
  }
}

@media (max-height: 570px) {
  /******** SHOWCASE ********/
  #showcase .showcse-content {
    margin: 5.5rem 0;
  }
}
</style>
