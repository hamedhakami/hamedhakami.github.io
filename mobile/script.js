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
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <p class="main-text"  style="letter-spacing: .0.5rem; margin-top: 0; margin-bottom:0;">As an experienced designer, I expertly apply my creativity and skills in photo manipulation and 3D modeling to create visually stunning and innovative solutions for a variety of projects. My extensive background in visual design spans over seven years, having worked at reputable companies such as Sibche, Taaghche, IranCard (Ayandeh Bank), and Shatel. My educational background in Music Theory and Composition from the University of Tehran and Visual Communication from EITTC University has further honed my artistic vision and ability to seamlessly integrate sound and image. </p> <p class="main-text" style="margin-top:0;" >I am passionate about designing impactful and memorable visuals that effectively communicate and resonate with audiences. My core competencies include creativity, collaboration, communication, and problem-solving, all of which I bring to every project I undertake. I am constantly seeking to expand my knowledge and skills in the field by embracing emerging techniques and trends, and I thrive on taking on diverse and complex assignments that challenge me to excel and grow as a designer.</p></div>';
            } else if (this.classList.contains('js-buttons2')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"><div class="about-detail-wrapper"> <span class="main-text list">AYRIA GROUP, Tehran</span> <span class="main-text list">August 2023 - Present</span> <span class="main-text list">Art Director</span> </div><div class="about-detail-wrapper"> <span class="main-text list">ERTEBAT FARDA, Tehran</span> <span class="main-text list">October 2022 - August 2023</span> <span class="main-text list">Senior Graphic Designer</span> </div><div class="about-detail-wrapper"> <span class="main-text list">TAAGHCHE, Tehran</span> <span class="main-text list">July 2022 - October 2022</span> <span class="main-text list">Senior Graphic Designer</span> </div><div class="about-detail-wrapper"> <span class="main-text list">SIBCHE, Tehran</span> <span class="main-text list">June 2020 - July 2022</span> <span class="main-text list">Graphic Designer</span> </div><div class="about-detail-wrapper"> <span class="main-text list">SHATEL, Tehran</span> <span class="main-text list">October 2016 - March 2019</span> <span class="main-text list">Junior Graphic Designer</span> </div></div>';
            } else if (this.classList.contains('js-buttons3')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text list">Visual Design <br> 3D Modeling <br> UI/UX Design <br> HTML Ad Design <br> Art Direction <br> Prototyping <br> Photo Manipulation <br> Digital Marketing Proficiency</span> </div> </div> <br>  <div class="about-detail-wrapper"> <span class="main-text list" style="margin-top: 2vw;">Adobe Illustrator <br> Adobe Photoshop <br> Adobe InDesign <br> Adobe Animate <br> Adobe After Effects <br> Adobe XD <br> Adobe Premiere Pro <br> Maxon Cinema 4D <br> Figma</span> </div>';
            } else if (this.classList.contains('js-buttons4')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text list">UNIVERSITY OF TEHRAN</span> <span class="main-text list">Master’s Degree</span> <span class="main-text list">Music Theory and Composition</span> <span class="main-text list">October 2015 - July 2019</span> </div> <div class="about-detail-wrapper"> <span class="main-text list">EITTC</span> <span class="main-text list">Bachelor’s Degree</span> <span class="main-text list">Visual Communication</span> <span class="main-text list">February 2011 - February 2015</span> </div> </div>';
            }
        });
    });
});


