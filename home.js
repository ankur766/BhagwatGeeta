function translateToHindi() {
    // You can use a translation API or a dictionary to translate the text.
    // For simplicity, we'll just replace the content with a predefined Hindi text.
    document.getElementById("about-content").textContent =

        "भगवद गीता, जिसे अक्सर गीता के रूप में संकेत किया जाता है, एक 700-श्लोक हिन्दू ग्रंथ है जो भारतीय महाभारत का हिस्सा है। इसमें राजकुमार अर्जुन और भगवान कृष्ण के बीच हुई एक वार्तालाप शामिल है, जिन्होंने अपने रथकुशल के रूप में कृष्ण की सेवा की। यह बातचीत कुरुक्षेत्र युद्ध से पहले के युद्धभूमि पर होती है, जहां अर्जुन युद्ध में लड़ने के बारे में संदेह और नैतिक दुविधा से भरा होता है। भगवद गीता गहरे दार्शनिक और नैतिक मुद्दों पर बातचीत करती है और जीवन, कर्तव्य और आध्यात्मिकता के मामूले में मार्गदर्शन प्रदान करती है।";
}
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide
function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) { // reset
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }

    currentImg = n;

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}