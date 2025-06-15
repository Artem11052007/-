window.onload = () => {
    const uploadFile = document.getElementById("tattoo-file");
    const uploadBtn = document.getElementById("tattoo-btn");
    const uploadText = document.getElementById("tattoo-text");

    uploadBtn.addEventListener("click", function () {
        uploadFile.click();
    });

    uploadFile.addEventListener("change", function () {
        if (uploadFile.value) {
            uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
        } else {
            uploadText.innerText = "Файл не вибрано";
        }
    });
};
import './style.css';

const stars = document.querySelectorAll('.star');
let result = 0;

stars.forEach((item, index) => {
	item.addEventListener('click', () => {
		console.log('Натисни на зірку: ', index + 1);
		result = index + 1;
		UpdateDiv();
	});
});

const UpdateDiv = () => {
	console.log('hii line 16');
	stars.forEach((item, index) => {
		if (index < result) item.classList.add('active')
		else item.classList.remove('active');
	});
	document.querySelector("#result").textContent = '${result}/5'
};