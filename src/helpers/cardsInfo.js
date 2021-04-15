import social from '../assets/socialNetwork.png';
import accenture from '../assets/takecareaccenture.png';
import solSalud from '../assets/solSalud.png';
import diagrama from '../assets/DiagramaFlujo.PNG';
import lovers from '../assets/dataLovers.png';

const cardsInfo = [
  {
    image: accenture, 
    title: 'Talent Fest - Accenture Take Care',
    text: 'PWA que permite realizar seguimiento a los colaboradores que se encuentren trabajando en remoto, conforme a la sintomatología que pudiesen presentar en relación al nivel de riesgo de infección del COVID-19. Para demo registrarse con cualquier correo accenture o laboratoria. (@accenture.com)',
    video: 'https://www.youtube.com/watch?v=7iHyJyayl20&ab_channel=Laboratoria',
    titlevideo: 'Demo Night #TalentFestBOG​ powered by Lenovo',    
    tecnologies: 'React.js - Firebase - Css - Sass',
    linkdemo: 'https://takecareaccenture.web.app/signin',
    linkrepo: ''
  },
  {
    image: solSalud, 
    title: 'SolSalud',
    text: 'SolSalud es una aplicacion pensada para ser un puente entre médicos y/o psicólogos voluntarios y mujeres que necesiten esta ayuda profesional y no tengan los medios o recursos para tal fin. Para "Hackeando la desigualdad Laboratoria 2020"',
    video: 'https://www.youtube.com/watch?v=eyG0pT33nyk&t=5184s&ab_channel=Laboratoria',
    titlevideo: 'Hackeando La Desigualdad 2020',    
    tecnologies: 'HTML - Css - Scss - JavaScript - Firebase - Webpack',
    linkdemo: 'https://oriananohemi.github.io/solSalud/#/',
    linkrepo: 'https://github.com/Sthephany04/SolSalud'
  },
  {
    image: diagrama, 
    title: 'MD-Links',
    text: 'Paquete de npm con el cual se puede validar y obtener información de los links en un archivo markdown. Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.',
    video: '',
    titlevideo: '',    
    tecnologies: 'JavaScript - Node.js - Npm - Markdown',
    linkdemo: '',
    linkrepo: 'https://github.com/Sthephany04/md-links'
  },
  {
    image: social, 
    title: 'Social Network - PhySport',
    text: 'phySport es un proyecto para amantes del deporte, podrás encontrar eventos de tu interes, conocer otros deportistas, interactuar con otros usuarios y más. En la red social phySport podrás registrate para crear eventos, editarlos, borrarlos y asistir. "Find a game, win friends".',
    video: '',
    titlevideo: '',    
    tecnologies: 'HTML - Css - Scss - JavaScript - Firebase - Webpack',
    linkdemo: 'https://sthephany04.github.io/BOG001-social-network/#/login',
    linkrepo: 'https://github.com/Sthephany04/BOG001-social-network'
  },
  {
    image: lovers, 
    title: 'Pokedex-Code',
    text: 'En esta página web podras visualizar los Pokemones, filtrarlos por tipo (veneno, agua, fuego, lucha, roca, entre otros), ordenarlos de forma ascendente y descendente, además de visualizar datos como promedios y gráficas.',
    video: '',
    titlevideo: '',    
    tecnologies: 'HTML - Css - JavaScript - Chart.js - Jest',
    linkdemo: 'https://sthephany04.github.io/BOG001-data-lovers/',
    linkrepo: 'https://github.com/Sthephany04/BOG001-data-lovers'
  }
]

export default cardsInfo;