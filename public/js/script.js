const joinNowButton = document.getElementById("joinButton");
/* const wrapper = document.querySelector(".slider-wrapper"); */
const dots = document.querySelectorAll(".dot");
let menu = document.querySelector(".nav-links");

function toggle() {
	menu.classList.toggle("open");
}

if (joinNowButton) {
	joinNowButton.addEventListener("click", () => {
		window.location.href = "log_in.html";
	});
}

/* if (wrapper && dots.length > 0) {
	let currentIndex = 0;
	const totalSlides = dots.length;

	const moveSlide = (index) => {
		currentIndex = index;
		wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

		const activeDot = document.querySelector(".dot.active");
		if (activeDot) activeDot.classList.remove("active");
		dots[currentIndex].classList.add("active");
	};

	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			moveSlide(index);
		});
	});

	const startAutoscroll = () => {
		return setInterval(() => {
			currentIndex++;
			if (currentIndex >= totalSlides) {
				currentIndex = 0;
			}
			moveSlide(currentIndex);
		}, 3000);
	};

	let scrollInterval = startAutoscroll();

	wrapper.addEventListener("mouseenter", () => clearInterval(scrollInterval));
	wrapper.addEventListener(
		"mouseleave",
		() => (scrollInterval = startAutoscroll()),
	);
} */

document.addEventListener("DOMContentLoaded", () => {
	const modal = document.getElementById("programModal");
	const modalImg = document.getElementById("modal-img");
	const modalTitle = document.getElementById("modal-title");
	const modalDesc = document.getElementById("modal-desc");
	const closeBtn = document.querySelector(".close-btn");

	document.querySelectorAll(".program").forEach((program) => {
		const img = program.querySelector(".project-image");

		img.onclick = () => {
			modal.style.display = "flex";

			modalImg.src = img.src;
			modalTitle.innerText = program.querySelector("h3").innerText;
			modalDesc.innerText = program.querySelector("p").innerText;

			document.body.style.overflow = "hidden";
		};
	});

	const closeModal = () => {
		modal.style.display = "none";
		document.body.style.overflow = "auto";
	};

	closeBtn.onclick = closeModal;
	window.onclick = (e) => {
		if (e.target === modal) closeModal();
	};
});

document.getElementById("readMoreBtn").addEventListener("click", function () {
	const moreText = document.querySelector(".more-text");
	const btnText = document.getElementById("readMoreBtn");

	if (moreText.style.display === "none") {
		moreText.style.display = "inline"; // Or "block" depending on your layout
		btnText.innerHTML = "READ LESS";
	} else {
		moreText.style.display = "none";
		btnText.innerHTML = "READ MORE";
	}
});
