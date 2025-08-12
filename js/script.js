/*===============toggle icon navbar==================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*===============scroll sections active link==================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*===============sticky navbar==================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*===============remove toggle icon navbar when click navbar link(scroll)==================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*===============scroll reveal==================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".section-header, .home-content", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .stats-container, .project-card, .contact-card",
  { origin: "bottom" }
);
ScrollReveal().reveal(".about-text, .tech-category:nth-child(odd)", {
  origin: "left",
});
ScrollReveal().reveal(".contact-links, .tech-category:nth-child(even)", {
  origin: "right",
});

/*===============typed js==================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Software Developer",
    "Full Stack Developer",
    "Data Science Enthusiast",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*===============Tabbed Section Functionality==================*/
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

/*===============Project Modal Functions==================*/
function openProjectDetails(projectId) {
  document.getElementById(projectId).style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
};

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (modal.style.display === "block") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }
});

/*===============Tech Stack Hover Effects==================*/
const techItems = document.querySelectorAll(".tech-item");

techItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-10px) scale(1.05)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0) scale(1)";
  });
});

/*===============Project GitHub Link Handler==================*/
document.addEventListener("DOMContentLoaded", function () {
  // You can add GitHub repository links here
  const projectRepos = {
    medref: "https://github.com/ThakshiRajapaksha/MEDREF",
    attendance:
      "https://github.com/ThakshiRajapaksha/Attendance-and-Payroll-Management-System",
    datalake: "https://github.com/ThakshiRajapaksha/DataLake-Backend",
    geolocationresearch:
      "https://github.com/ThakshiRajapaksha/Object-Detection-Tracking",
    Pathfinders: "https://github.com/ThakshiRajapaksha/Maze-solver",
    LeaveManagementSystem:
      "https://github.com/ThakshiRajapaksha/Leave_Management_System",
  };

  // Handle GitHub links for projects
  const githubLinks = document.querySelectorAll(".github-link");
  githubLinks.forEach((link, index) => {
    const projectCard = link.closest(".project-card");
    const projectData = projectCard.dataset.repo;

    if (projectData && projectRepos[projectData]) {
      link.href = projectRepos[projectData];
    } else {
      // Hide GitHub link if no repo URL is provided
      link.style.display = "none";
    }
  });
});

/*===============Smooth Scrolling for Navigation Links==================*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/*===============Loading Animation==================*/
window.addEventListener("load", function () {
  // Add a subtle loading effect
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

/*===============Intersection Observer for Animations==================*/
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".tech-category, .project-card, .stat-card, .cert-card")
  .forEach((el) => {
    observer.observe(el);
  });

/*===============Dynamic Year Update==================*/
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const yearElement = document.querySelector(".footer-text p");
  if (yearElement) {
    yearElement.innerHTML = `&copy; ${currentYear} Thakshi Rajapaksha. All Rights Reserved.`;
  }
});

/*===============Navbar Background on Scroll==================*/
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(10, 10, 15, 0.98)";
    header.style.backdropFilter = "blur(20px)";
  } else {
    header.style.background = "rgba(10, 10, 15, 0.95)";
    header.style.backdropFilter = "blur(20px)";
  }
});

/*===============Floating Shapes Animation==================*/
document.addEventListener("DOMContentLoaded", function () {
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape, index) => {
    // Random animation duration between 4-8 seconds
    const duration = Math.random() * 4 + 4;
    shape.style.animationDuration = `${duration}s`;

    // Random delay
    const delay = Math.random() * 2;
    shape.style.animationDelay = `${delay}s`;
  });
});

/*===============Contact Form Validation (if you add a form later)==================*/
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/*===============Performance Optimization==================*/
// Debounce scroll events for better performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function openGitHubRepo(repoUrl) {
  if (repoUrl && repoUrl !== "" && repoUrl !== "#") {
    window.open(repoUrl, "_blank", "noopener,noreferrer");
  }
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(() => {
  // Your scroll handling code here
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

/*===============Theme Toggle (Optional - for future enhancement)==================*/
function toggleTheme() {
  document.body.classList.toggle("light-theme");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light-theme") ? "light" : "dark"
  );
}

// Load saved theme
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }
});
