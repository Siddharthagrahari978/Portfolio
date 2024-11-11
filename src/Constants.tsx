const Constants = {
  urls: {
    email: "siddharthagrahari978@gmail.com",
    resume: "https://siddharthagrahari978.github.io/Resume/",
    linkedin: "https://www.linkedin.com/in/siddharthkumar978/",
    github: "https://github.com/Siddharthagrahari978",
    instagram: "https://www.instagram.com/siddharthkumaragrahari/"
  },
  landingPage: {
    title: 'Full-Stack Developer',
    skills: [
      [
        'NodeJS', 'ReactJS', 'MongoDB', 'ExpressJS', 'PHP', 'MySQL', 'Groovy'
      ],
      [
        'Docker', 'Jenkins', 'Azure', 'AWS'
      ]
    ]
  },
  aboutPage: {
    content: `<h2>Hello 👋🏽</h2>
          <p>
            I'm Siddharth,a 22-year-old
            <strong> Full-Stack Developer / DevOps Engineer </strong> 💻 with a
            strong educational background in Computer Science. I have worked on
            many projects.
          </p>
          <p>
            <strong>I am a Technology enthusiast</strong> and extremely
            passionate about coding. I love working with technology related to
            Development and DevOps. To learn new things every day and keep up
            with the new technologies I devote my time to regularly sharpen my
            skills and thrive to Learn more. In many ways, technologies are my
            first love 💙.
          </p>
          `
  },
  projects: [
    {
      title: 'CryptoTracker',
      description: `It is a NodeJS Web Application providing the data about the top 10
            crypto currencies with all its details with a Dark-Light theme in
            real time. The data being displayed in this is sourced from
            CoinMarketCaps Official API to provide concrete data everytime.`,
      url: 'https://cryptotracker978.netlify.app/',
      git: 'https://github.com/Siddharthagrahari978/CryptoTracker',
      image:'CryptoTracker.png'
    },
    {
      title:'Emailer Via SendGrid',
      description:`It is a NodeJS App which helps you send emails using Sendgrid api,
            and other nodeJS libraries and Framework likes ReactJS, ExpressJS,
            Socket.io, etc.
            <div>
            Features:
            <ol style="margin-left:2rem; font-size:1.4rem">
              <li>
                Emails are sent through a secured relay and not any in-built
                language functions like pHp.
              </li>
              <li>
                Gmail level security and managed by a reputed company, Twilio.
              </li>
              <li>
                Email are sent at 100% rate. Which means your emails will not
                get stuck or filtered as spam.
              </li>
            </ol>
          </div>
            `,
      url:'',
      git:'https://github.com/Siddharthagrahari978/EmailSenderViaSendGrid',
      image:'emailer-sendgrid.png'
    },
    {
      title:'Chat Cord',
      description:`It is a session based chat app, It creates disposable Rooms
            providing a relay connection between clients. As the data is not
            saved anywhere it is very much secure. I built this app with NodeJS
            used really interesting modules and frameworks like expressJS and
            Socket.io.`,
      url:'https://chatcord978.netlify.app/',
      git:'https://github.com/Siddharthagrahari978/ChatCord',
      image:'Chat-cord.png'
    },
    {
      title:'Secret Diary',
      description:`This is a online diary app which stores all the information saved
            by the user.
            I developed this system using HTML, CSS, PHP and mySQL.
            For a demo,use email "demo@diary.com" and password "demo".`,
      url:'',
      git:'https://github.com/Siddharthagrahari978/secretdiary',
      image:'secretdiary.png'
    },
    {
      title:'Calculator with Dark-Light Theme',
      description:`This is a simple calculator which performs the most common
            arithmetic operations. It have cool design and buttons are
            arranged nicely using CSS grid. I used JavaScript to receive
            input, perform computation and display the correct result on
            "screen".`,
      url:'https://calculatorwithdarkmode.netlify.app/',
      git:'https://github.com/Siddharthagrahari978/calculatorwithdarkmode',
      image:'calculator.png'
    },
    {
      title:'Comment Management System',
      description:`This is a system for managing comments with the time stamp
            made by different users.
            I developed this system using HTML, CSS, PHP and JSON.
            For demo, username "demo" and password "demo".`,
      url:'',
      git:'https://github.com/Siddharthagrahari978/commentmanagementsystem',
      image:'commentmanagesystem.png'
    },
    {
      title:'Weather App',
      description:`This is a simple weather app which performs the a common
            operations. It have cool design arranged nicely using CSS grid.
            I used API to receive weather for the respective cty,
            perform computation and display the correct result on
            "screen".`,
      url:'https://wetherapp.tiiny.io/',
      git:'https://github.com/Siddharthagrahari978/weather-app',
      image:'weather.png'
    }
  ],
  experiences:[
    {
      title:'Full Stack Developer/DevOps Engineer at IntelleWings Pvt. Ltd.',
      description:`I worked for 1 year 2 months at this organizaion, and my
              responsibilities envolved working on there one of the main three
              major modules of their product as a Developer, and provide the
              CI/CD solutions regarding Deployment and Server Management on
              Azure/IBM Cloud to insure buisness continuity as a DevOps
              Engineer.`,
      image:'intellewings.png'
    },
    {
      title:'Developer at BMUCO',
      description:`I worked for a month at this organizaion, and helped them work on
              there companies portfolio website as a Web Developer.`,
      image:'bmuco.png'
    },
  ],
  footer: {
    text: `<p>
          <i className="fas fa-code"></i> with 💙 by Siddharth Kumar &copy; 2020
        </p>
        <p>Built with ReactJS, HTML, CSS and JavaScript</p>`
  }
}
export default Constants;