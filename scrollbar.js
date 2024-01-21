// *****************************************CUSTOM SCROLLBAR CLICK EVENT*****************************************
// Get all the scroll points
const scrollPoints = document.querySelectorAll('.scrollPoints');

// Function to handle scroll point click
function handleScrollPointClick(clickedPoint) {
  // Loop through all the scroll points
  scrollPoints.forEach(scrollPoint => {
    // Set the background color of the clicked scroll point
    if (scrollPoint === clickedPoint) {
      scrollPoint.style.background = 'radial-gradient(70% 70%, #dd6b0d 30%, #171717 60.08%)';
    } else {
      scrollPoint.style.background = '#333';
    }
  });

  // Get the ID of the corresponding section
  const sectionId = clickedPoint.classList[1];

  // Scroll to the top of the section
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Attach click event listeners to each scroll point
scrollPoints.forEach(scrollPoint => {
  scrollPoint.addEventListener('click', () => {
    handleScrollPointClick(scrollPoint);
  });
});



// Get all the scroll points
// const scrollPoints = document.querySelectorAll('.scrollPoints');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Get the ID of the corresponding section
      const sectionId = entry.target.id;
      
      // Find the scroll point corresponding to the section
      const scrollPoint = document.querySelector(`.scrollPoints.${sectionId}`);

      // Set the background color of the corresponding scroll point
      scrollPoints.forEach(point => {
        if (point !== scrollPoint) {
          point.style.background = '#333';
        }
      });
      
      scrollPoint.style.background = 'radial-gradient(70% 70%, #dd6b0d 30%, #171717 60.08%)';
    }
  });
}, {
  rootMargin: '-50% 0% -50% 0%' // Adjust the rootMargin value as needed
});

// Observe each section
scrollPoints.forEach(scrollPoint => {
  const sectionId = scrollPoint.classList[1];
  const section = document.getElementById(sectionId);
  observer.observe(section);
});
