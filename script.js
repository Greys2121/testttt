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

// Load settings from local storage
function loadSettings() {
    const storedParticlesEnabled = localStorage.getItem('particlesEnabled');
    particlesEnabled = storedParticlesEnabled === 'true';
    const storedFont = localStorage.getItem('fontFamily');
    const storedBgColor = localStorage.getItem('bgColor');
    const storedBgImage = localStorage.getItem('bgImage');

    if (storedFont) {
        document.body.style.fontFamily = storedFont;
        document.getElementById('fontSelect').value = storedFont;
    }
    if (storedBgColor) {
        document.body.style.backgroundColor = storedBgColor;
        document.getElementById('bgColor').value = storedBgColor;
    }
    if (storedBgImage) {
        document.body.style.background = `url(${storedBgImage}) center center fixed`;
        document.body.style.backgroundSize = 'cover';
        document.getElementById('bgImage').value = storedBgImage;
    }
}

// Load background when the page loads
window.onload = function() {
    loadSettings();
    initParticles();
};

// Save settings to local storage
function saveSettings() {
    localStorage.setItem('particlesEnabled', particlesEnabled);
    localStorage.setItem('fontFamily', document.body.style.fontFamily);
    localStorage.setItem('bgColor', document.body.style.backgroundColor);
    localStorage.setItem('bgImage', document.body.style.background);
}

function toggleSettings() {
    const settingsModal = document.getElementById('settingsModal');
    settingsModal.style.display = settingsModal.style.display === 'none' || settingsModal.style.display === '' ? 'block' : 'none';
}

function changeFont() {
    const fontSelect = document.getElementById('fontSelect');
    document.body.style.fontFamily = fontSelect.value;
    saveSettings();
}

function changeBackgroundColor() {
    const bgColor = document.getElementById('bgColor').value;
    document.body.style.backgroundColor = bgColor;
    saveSettings();
}

function changeBackgroundImage() {
    const bgImage = document.getElementById('bgImage').value;
    if (bgImage) {
        document.body.style.background = `url(${bgImage}) center center fixed`;
        document.body.style.backgroundSize = 'cover';
        saveSettings();
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
    saveSettings();
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
    var newWindow = window.open('about:blank', '_blank');
    if (newWindow) {
        newWindow.document.write(`
            <html>
                <body style="margin: 0; padding: 0; overflow: hidden;">
                    <iframe src="https://timmhboy.github.io/plas" 
                            style="border: none; width: 100vw; height: 100vh;"></iframe>
                </body>
            </html>
        `);
        newWindow.document.close();
    }
}

function easyFunAndroidEmulator() {
    var EmulatorUrl = 'https://www.easyfun.gg';
    window.location.replace(EmulatorUrl);
}
