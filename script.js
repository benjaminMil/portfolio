document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");

  const observerOptions = {
    root: null, // Uses the viewport as the container
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, observerOptions);

  projects.forEach(function (project) {
    observer.observe(project);
  });
});
