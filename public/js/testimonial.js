const testimonialData = {
	section: "testimonials",
	title: "Testimonials",
	testimonials: [
		{
			name: "Jason C. Gamalo",
			role: "National Training Director",
			image: {
				src: "../assets/images/NTD.jpg",
				alt: "Jason C. Gamalo",
			},
			quote:
				"Being part of PSALM has truly transformed my life. This ministry not only helped me grow in my faith but also equipped me to become a servant leader.",
		},
		{
			name: "Myra T. Yabut",
			role: "National Board Member",
			image: {
				src: "../assets/images/PSALM_Logo.png",
				alt: "Myra T. Yabut",
			},
			quote:
				"Serving with PSALM has been an incredible journey of faith and growth. I’ve seen lives transformed and leaders raised.",
		},
		{
			name: "Jun Marc Dapitan",
			role: "Digital Ministry Coordinator",
			image: {
				src: "../assets/images/DMC.jpg",
				alt: "Jun Marc Dapitan",
			},
			quote:
				"PSALM has remained faithful to its mission of raising servant leaders who transform communities for Christ.",
		},
	],
};

const imgEl = document.querySelector(".profile-pic"); // or "img" depending on your HTML
const textEl = document.querySelector(".quote"); // or ".text"
const usernameEl = document.querySelector(".name"); // or ".username"
const roleEl = document.querySelector(".role"); // added for role

let idx = 0;

updateTestimonial();

function updateTestimonial() {
	// 1. Correct array reference
	// 2. Extract nested `image` and `quote` properly
	const { name, role, image, quote } = testimonialData.testimonials[idx];

	// Update DOM elements
	if (imgEl) {
		imgEl.src = image.src;
		imgEl.alt = image.alt;
	}
	if (textEl) textEl.innerText = quote;
	if (usernameEl) usernameEl.innerText = name;
	if (roleEl) roleEl.innerText = role;

	idx++;

	// Reset loop index
	if (idx === testimonialData.testimonials.length) {
		idx = 0;
	}

	// Auto-rotate every 10 seconds
	setTimeout(updateTestimonial, 10000);
}
