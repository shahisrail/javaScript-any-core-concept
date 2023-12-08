const allsectoins = document.querySelectorAll('section');
for(const section of allsectoins){
    // console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom= '10px'
    // section.style.textAlign = 'center'
    section.style.borderRadius = '10px'
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightGray'
}
// const placeContainer = document.getElementById('places-container');
// placeContainer.style.backgroundColor = 'yellow'


const placeContainer = document.getElementById('places-container');
placeContainer.classList.add('text-center')
placeContainer.classList.remove('large-text')