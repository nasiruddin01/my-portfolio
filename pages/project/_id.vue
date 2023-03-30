<template>
  <div class="bg">
    <div id="landing" class="header-section">
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
                  <a href="#work">Projects</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="container">
      <h2 class="header">Project Details</h2>
      <div class="name">
        <h3>{{ selectedProject.name }}</h3>
        <a class="link" :href="selectedProject.link" target="_blank">See</a>
      </div>
      <div class="visualizer">
        <div class="video-container">
          <div class="dark">
            <div class="img">
              <img :src="selectedProject.image" alt="project_image" />
            </div>
          </div>
        </div>
      </div>
      <div class="description">
        <h4>Description:</h4>
        <p>
          {{ selectedProject.description }}
        </p>
      </div>
      <div class="description">
        <h4>Responsiblities:</h4>
        <ul v-for="feature in selectedProject.features" :key="feature">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="18"
              fill="#e49620"
            >
              <path
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
            &nbsp;
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          image: '../image/projects/scribble.png',
          link: 'https://scribbletoart.com/',
        },
        {
          id: 'appolo',
          name: 'Inkrement',
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
          image: '../image/projects/appolo.png',
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
          image: '../image/projects/mullokoto.png',
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
          image: '../image/projects/connekt-camp.png',
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
          image: '../image/projects/inkrement.png',
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
          image: '../image/projects/foodiworld.png',
          link: 'https://foodiworld.netlify.app/',
        },
      ],
    }
  },
  computed: {
    selectedProject() {
      const id = this.$route.params.id
      return this.projects.find((project) => project.id === id) || {}
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
.bg {
  min-height: 100vh;
  width: 100vw;
  background-color: #001008;
}
.header-section {
  max-width: 100vw !important;
  width: 90%;
  margin: auto;
  padding: 0 1rem;
  .navbar {
    width: 100%;
    margin: auto;
    padding: 1.75rem 0;

    .div-row {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        img {
          height: 30px;
          width: 30px;
          border-radius: 50%;
        }
      }
      .link-bar {
        ul {
          display: flex;
          justify-content: flex-end;
          color: #ddeff5;

          li {
            margin-left: 2.2rem;
            color: #ddeff5;

            // font-family: 'Montserrat Alternates', sans-serif;
          }
          a {
            font-size: 1.2rem;
            transition: all 0.3s ease-in-out;
            color: #ddeff5;
          }
          a:hover {
            color: var(--dark-color);
          }
        }
      }
    }
  }
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  .header {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    padding-top: 1rem;
    color: #001008;
  }
  .name {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    color: #ddeff5;

    .link {
      padding: 5px 10px;
      border-radius: 5px;
      background: #ddeff5;
      color: #001008;
    }
  }
  .visualizer {
    margin-top: 4rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    .video-container {
      width: 1000px;
      position: relative;
      padding: 1rem;
      border-radius: 10px;
      z-index: 2;
      background: linear-gradient(
        135deg,
        #ff0000,
        #e4205d,
        #4a3ece,
        #f100f1,
        #1000ee,
        #b10000
      );
      animation: animatedgradient 5s ease alternate infinite;
      background-size: 300% 300%;
      .dark {
        .img {
          width: 100%;
          img {
            width: 100%;
            margin: 0 auto;
          }
        }
      }
    }
    .video-container::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 10px;
      background: linear-gradient(
        135deg,
        #ff0000,
        #e4205d,
        #4a3ece,
        #f100f1,
        #1000ee,
        #b10000
      );
      animation: animatedgradient 5s ease alternate infinite;
      background-size: 300% 300%;
      filter: blur(20px);
    }
  }
  .description {
    color: #ddeff5;
    padding: 1rem 1rem 3rem 1rem;
    h4 {
      font-size: 20px;
      text-decoration: underline;
    }
    p {
      margin-top: 0.5rem;
      line-height: 1.25rem;
    }
    ul {
      li {
        display: flex;
        align-content: center;
        padding: 5px 0;
        font-family: 'Nunito', sans-serif !important;
      }
    }
  }

  a {
    text-decoration: none;
    color: #001008;
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
}
</style>
