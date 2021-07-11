import BackGroundTwo from '../../../../img/background/jedi.jpg';
import Vader from '../../../../img/elements/darth vader.jpg';
import footer from '../footer';

let HomeSectionTwo = `
<section id="section-two" class="section background--two" style="background-image: url(${BackGroundTwo})">
    <div class="container block-section">
        <div class="block-section--two">    
            <img src="${Vader}" alt="Vader" width="300px" height="auto">
            <div class="text-block--two">
                <p>Darth Vader foi um dos Jedi mais poderosos e, depois que foi para o lado negro, se tornou um dos Siths mais poderosos</p>
            </div>
        </div>
        <div class="footerblock-section">
            ${footer}
        </div>
    </div>
</section>
`

export default HomeSectionTwo;
