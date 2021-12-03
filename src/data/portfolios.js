import css1 from '../img/portImages/rfc.JPG';
import css2 from '../img/portImages/portfolio.JPG';
import react1 from '../img/portImages/react_styled3.JPG';
import react2 from '../img/portImages/react_styled2.JPG';
import react from '../img/portImages/dental.JPG';
import img2 from '../img/portImages/kids.JPG';
import img3 from '../img/portImages/doctor details.JPG';

const portfolios = [
    {
        id: 1,
        category: 'CSS',
        image: css1,
        link1: 'https://github.com/tanvir1000/RFC',
        link2: 'https://tanvir1000.github.io/RFC/',
        title: 'Responsive Resume',
        text: 'Created with only HTML and CSS.'
    },
    {
        id: 2,
        category: 'React JS',
        image: css2,
        link1: 'https://github.com/tanvir1000/final-portfolio-2',
        link2: 'https://tanviraditto.netlify.app/',
        title: 'Responsive Resume',
        // text: 'Created with only HTML and CSS.'
    },
    // {
    //     id: 2,
    //     category: 'Python',
    //     image: img3,
    //     link1: 'https://www.google.com',
    //     link2: 'https://www.google.com',
    //     title: 'How To Animate In Maya',
    //     text: 'Number one Animation Application'
    // },
    {
        id: 3,
        category: 'Javascript',
        image: img3,
        link1: 'https://github.com/ProgrammingHeroWC4/the-superhero-direction-tanvir1000/tree/main/src/components',
        link2: 'https://quizzical-fermi-40d601.netlify.app/',
        title: 'Doctor details ,book your doctor if you want , it also show cost also',
        text: 'Doctors appoinment'
    },
    {
        id: 4,
        category: 'Javascript',
        image: img2,
        link1: 'https://www.google.com',
        link2: 'https://focused-goldberg-564632.netlify.app/',
        title: 'Best course you can get here for your kids',
        text: 'js projects use custom api'
    },
    // {
    //     id: 5,
    //     category: 'Animation',
    //     image: img2,
    //     link1: 'https://www.google.com',
    //     link2: 'https://www.google.com',
    //     title: 'How To Use Blender',
    //     text: 'Free Animation Software'
    // },
    {
        id: 6,
        category: 'React JS',
        image: react1,
        link1: 'https://github.com/programming-hero-web-course-4/niche-website-client-side-tanvir1000',
        link2: 'https://bat-portal.web.app/',
        title: 'Back-end of a full-stack project where Users can bat by completing payment(not now its working) & Admins can add,delete,update their providing services.',
        text: ' Niche website'
    },
    {
        id: 7,
        category: 'React JS',
        image: react,
        link1: 'https://github.com/tanvir1000/education',
        link2: 'https://loving-nightingale-237eab.netlify.app/',
        title: 'Dental Centar',
        text: ' Back-end  project Dental services for customers'
    },
    {
        id: 8,
        category: 'React JS',
        image: react2,
        link1: 'https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-tanvir1000',
        link2: 'https://react-dental-authentication.web.app/',
        title: 'Back-end of a full-stack project Tour services website name Booking.com ',
        text: ' tourism services for customers'
    },
    // {
    //     id: 9,
    //     category: 'CSS',
    //     image: css2,
    //     link1: 'https://www.google.com',
    //     link2: 'https://www.google.com',
    //     title: 'Microsoft Website Clone',
    //     text: 'Created using HTML and CSS'
    // }
]

export default portfolios;