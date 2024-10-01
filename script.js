const image = document.getElementById('image');
const rotateBtn = document.getElementById('rotate-btn');
let rotation = 0;

rotateBtn.addEventListener('click', () => {
	rotation += 90; /* rotate 90 degrees */
	image.style.transform = `rotate(${rotation}deg)`;
});


