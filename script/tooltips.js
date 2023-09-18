const parentTooltips = document.querySelectorAll('.parent-tooltips');

parentTooltips.forEach((e) => {
   const tooltip = e.querySelector('.cb-tooltips');
   e.addEventListener('mouseover', () => {
      tooltip.classList.remove('d-none');
   });
   e.addEventListener('mouseout', () => {
      tooltip.classList.add('d-none');
   });
});