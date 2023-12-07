document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.js-buttons1, .js-buttons2, .js-buttons3, .js-buttons4').forEach(function(button) {
        button.addEventListener('click', function () {
            document.querySelectorAll('.js-buttons1, .js-buttons2, .js-buttons3, .js-buttons4').forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            var featureDetail = document.querySelector('.js-feature-detail');
            featureDetail.innerHTML = '';
            if (this.classList.contains('js-buttons1')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text">ERTEBAT FARDA, Tehran</span> <span class="main-text">Oct 2022 - August 2023</span> <span class="main-text">Senior Graphic Designer</span> </div> <div class="about-detail-wrapper"> <span class="main-text">TAAGHCHE, Tehran</span> <span class="main-text">July 2022 - October 2022</span> <span class="main-text">Senior Graphic Designer</span> </div> <div class="about-detail-wrapper"> <span class="main-text">SIBCHE, Tehran</span> <span class="main-text">June 2020 - July 2022</span> <span class="main-text">Graphic Designer</span> </div> <div class="about-detail-wrapper"> <span class="main-text">SHATEL, Tehran</span> <span class="main-text">October 2016 - March 2019</span> <span class="main-text">Junior Graphic Designer</span> </div> </div>';
            } else if (this.classList.contains('js-buttons2')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text">UNIVERSITY OF TEHRAN</span> <span class="main-text">Master’s Degree</span> <span class="main-text">Music Theory and Composition</span> <span class="main-text">October 2015 - July 2018</span> </div> <div class="about-detail-wrapper"> <span class="main-text">EITTC</span> <span class="main-text">Bachelor’s Degree</span> <span class="main-text">Graphic Design</span> <span class="main-text">February 2011 - February 2015</span> </div> </div>';
            } else if (this.classList.contains('js-buttons3')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text">Visual Design | 3D Modeling | UI/UX Design | HTML Ad Design | Art Direction | Prototyping | Photo Manipulation | GIF Banner Design | Digital Marketing Proficiency</span> </div> </div>';
            } else if (this.classList.contains('js-buttons4')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text">Adobe Illustrator | Adobe Photoshop | Adobe InDesign | Adobe Animate | Adobe XD | Adobe Premiere Pro | Maxon Cinema 4D | Figma</span> </div> </div>';
            }
        });
    });
});

