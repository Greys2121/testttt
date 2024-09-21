// Initialize particles.js
let particlesEnabled = true;
function initParticles() {
    if (particlesEnabled) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 50 },
                size: { value: 3 },
                move: { speed: 1 },
                line_linked: { enable: true, distance: 150 },
                opacity: { value: 0.5 },
            },
            interactivity: {
                events: {
                    onhover: { enable: false },
                    onclick: { enable: true, mode: "push" },
                },
                modes: {
                    push: { particles_nb: 4 },
                },
            },
            retina_detect: true,
        });
    }
}
initParticles();

// Load background when the page loads
window.onload = loadBackground;

function toggleSettings() {
    const settingsModal = document.getElementById('settingsModal');
    settingsModal.style.display = settingsModal.style.display === 'none' || settingsModal.style.display === '' ? 'block' : 'none';
}

function changeFont() {
    const fontSelect = document.getElementById('fontSelect');
    document.body.style.fontFamily = fontSelect.value;
}

function changeBackgroundColor() {
    const bgColor = document.getElementById('bgColor').value;
    document.body.style.backgroundColor = bgColor;
}

function changeBackgroundImage() {
    const bgImage = document.getElementById('bgImage').value;
    if (bgImage) {
        document.body.style.background = `url(${bgImage}) center center fixed`;
        document.body.style.backgroundSize = 'cover';
    }
}

function toggleParticles() {
    particlesEnabled = !particlesEnabled;
    if (particlesEnabled) {
        initParticles();
    } else {
        const canvas = document.querySelector('#particles-js canvas');
        if (canvas) {
            canvas.remove();
        }
    }
}

// Button functions
function loadNewWebsite() {
    var url = prompt('What site do you want to replace this page with?');
    var prefix = 'https://';
    if (url && url.substr(0, prefix.length) !== prefix) {
        url = prefix + url;
    }
    if (url) {
        window.location.replace(url);
    }
}

function redirectToGames() {
    var gamesUrl = 'https://greys2121.github.io/games/';
    window.location.replace(gamesUrl);
}

function redirectToSavedWebsites() {
    var savedWebsitesUrl = 'https://greys2121.github.io/Saved-Sites/';
    window.location.replace(savedWebsitesUrl);
}

function openRequestForm() {
    var requestFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc4xnd3wVCX2RcE-7sHa0e33vnAIGsfwTcfOdmrMcEcnPnMwg/viewform?usp=sf_link';
    window.open(requestFormUrl, '_blank');
}

function openBrowserMode() {
    var browserUrl = 'https://velocity.radon.games';
    window.location.replace(browserUrl);
}

function openNewTab() {
    var url = 'about:blank';
    window.open(url, '_blank');
}