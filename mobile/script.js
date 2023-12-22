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
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text list">ERTEBAT FARDA, Tehran</span> <span class="main-text list">Oct 2022 - August 2023</span> <span class="main-text list">Senior Graphic Designer</span> </div> <div class="about-detail-wrapper"> <span class="main-text list">TAAGHCHE, Tehran</span> <span class="main-text list">July 2022 - October 2022</span> <span class="main-text list">Senior Graphic Designer</span> </div> <div class="about-detail-wrapper"> <span class="main-text list">SIBCHE, Tehran</span> <span class="main-text list">June 2020 - July 2022</span> <span class="main-text list">Graphic Designer</span> </div> <div class="about-detail-wrapper"> <span class="main-text list">SHATEL, Tehran</span> <span class="main-text list">October 2016 - March 2019</span> <span class="main-text list">Junior Graphic Designer</span> </div> </div>';
            } else if (this.classList.contains('js-buttons2')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text list">UNIVERSITY OF TEHRAN</span> <span class="main-text list">Master’s Degree</span> <span class="main-text list">Music Theory and Composition</span> <span class="main-text list">October 2015 - July 2018</span> </div> <div class="about-detail-wrapper"> <span class="main-text list">EITTC</span> <span class="main-text list">Bachelor’s Degree</span> <span class="main-text list">Graphic Design</span> <span class="main-text list">February 2011 - February 2015</span> </div> </div>';
            } else if (this.classList.contains('js-buttons3')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text list">Visual Design | 3D Modeling | UI/UX Design | HTML Ad Design | Art Direction | Prototyping | Photo Manipulation | GIF Banner Design | Digital Marketing Proficiency</span> </div> </div>';
            } else if (this.classList.contains('js-buttons4')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text list">Adobe Illustrator | Adobe Photoshop | Adobe InDesign | Adobe Animate | Adobe XD | Adobe Premiere Pro | Maxon Cinema 4D | Figma</span> </div> </div>';
            }
        });
    });
});


