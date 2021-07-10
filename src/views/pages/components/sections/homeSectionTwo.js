import BackGroundTwo from '../../../../img/background/jedi.jpg';
import Vader from '../../../../img/elements/darth vader.jpg';
import Footer from '../footer';

let HomeSectionTwo = `
<section class="section -background--two" style="background-image: url(${BackGroundTwo})">
    <div>    
        <img src="${Vader}" alt="Vader" width="300px" height="auto">
        <div >
            <p>Darth Vader foi um dos Jedi mais poderosos e, depois que foi para o lado negro, se tornou um dos Siths mais poderosos</p>
        </div>
    </div>
    ${Footer}
</section>
`

export default HomeSectionTwo;
