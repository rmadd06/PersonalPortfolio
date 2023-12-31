document.addEventListener('DOMContentLoaded', (event) => {
    const progressElem = document.querySelector('#progress')

    function scrollHandler() {
        const scrollY = Math.round(window.scrollY)
        const maxScrollHeight = document.body.scrollHeight - window.innerHeight

        const progress = (scrollY / maxScrollHeight) * 100

        progressElem.value = progress
    }

    scrollHandler()

    window.addEventListener('scroll', scrollHandler)
 });

 document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scrollButton');

    scrollButton.addEventListener('click', function () {
        const nextSection = document.getElementById('section2');

        // Scroll to the next section
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });
});

  
  
  