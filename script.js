const splitSection = document.querySelector('.split-section');

if (splitSection) {
  const splitObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        splitSection.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3
  });

  splitObserver.observe(splitSection);
}

const section = document.querySelector('.choice-section');

if (section) {
  const choiceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        section.classList.add('visible');
      }
    });
  }, {
    threshold: 0.25
  });

  choiceObserver.observe(section);
}
