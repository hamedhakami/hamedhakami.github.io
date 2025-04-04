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
                featureDetail.innerHTML = '<div class="about-detail fade-in">   <p class="main-text"  style="letter-spacing: .0.5rem; margin-top: 0;">I’m a graphic designer with over seven years of experience in creating eye-catching and effective designs. My skills in photo manipulation and 3D modeling help bring ideas to life across various projects. I’ve worked with well-known companies like blu Bank, Sibche, Taaghche, IranCard (Ayandeh Bank), and Shatel, gaining valuable experience in branding, UI, and marketing visuals. <br><br>A background in Music Theory and Composition from the University of Tehran and Visual Communication from EITTC has shaped my artistic approach, allowing me to blend visuals and sound in unique ways.<br><br>My core competencies include creativity, collaboration, communication, and problem-solving. Always eager to learn, I stay up to date with the latest design trends and tools to push my work further.</p></div>';
            } else if (this.classList.contains('js-buttons2')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"><div class="about-detail-wrapper"> <span class="main-text list">BLU BANK, Tehran</span> <span class="main-text list">August 2024 - Present</span> <span class="main-text list">Senior Graphic Designer</span> </div><div class="about-detail-wrapper"> <span class="main-text list">AYRIA GROUP, Tehran</span> <span class="main-text list">August 2023 - April 2024</span> <span class="main-text list">Art Director</span> </div><div class="about-detail-wrapper"> <span class="main-text list">ERTEBAT FARDA, Tehran</span> <span class="main-text list">October 2022 - August 2023</span> <span class="main-text list">Senior Graphic Designer</span> </div><div class="about-detail-wrapper"> <span class="main-text list">TAAGHCHE, Tehran</span> <span class="main-text list">July 2022 - October 2022</span> <span class="main-text list">Senior Graphic Designer</span> </div><div class="about-detail-wrapper"> <span class="main-text list">SIBCHE, Tehran</span> <span class="main-text list">June 2020 - July 2022</span> <span class="main-text list">Graphic Designer</span> </div><div class="about-detail-wrapper"> <span class="main-text list">SHATEL, Tehran</span> <span class="main-text list">October 2016 - March 2019</span> <span class="main-text list">Junior Graphic Designer</span> </div></div>';
            } else if (this.classList.contains('js-buttons3')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text list">Visual Design <br> 3D Modeling <br> UI/UX Design <br> HTML Ad Design <br> Art Direction <br> Prototyping <br> Photo Manipulation <br> Digital Marketing Proficiency</span> </div> </div> <br>  <div class="about-detail-wrapper"> <span class="main-text list" style="margin-top: 2vw;">Adobe Illustrator <br> Adobe Photoshop <br> Adobe InDesign <br> Adobe Animate <br> Adobe After Effects <br> Adobe XD <br> Adobe Premiere Pro <br> Maxon Cinema 4D <br> Figma</span> </div>';
            } else if (this.classList.contains('js-buttons4')) {
                featureDetail.innerHTML = '<div class="about-detail fade-in"> <div class="about-detail-wrapper"> <span class="main-text list">UNIVERSITY OF TEHRAN</span> <span class="main-text list">Master’s Degree</span> <span class="main-text list">Music Theory and Composition</span> <span class="main-text list">October 2015 - July 2019</span> </div> <div class="about-detail-wrapper"> <span class="main-text list">EITTC</span> <span class="main-text list">Bachelor’s Degree</span> <span class="main-text list">Visual Communication</span> <span class="main-text list">February 2011 - February 2015</span> </div> </div>';
            }
        });
    });
});


