const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileModal   = document.getElementById('mobile-modal');
const modalOverlay  = document.getElementById('modal-overlay');

function openModal() {
    mobileModal.classList.add('open');
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    mobileModal.classList.remove('open');
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

mobileMenuBtn.addEventListener('click', openModal);
modalOverlay.addEventListener('click', closeModal);

const CHANNEL_KEY  = 'subscribed_hashtag_programacao';
const subscribeBtn = document.getElementById('subscribe-btn');

function updateSubscribeBtn(subscribed) {
    if (subscribed) {
        subscribeBtn.textContent = 'Inscrito';
        subscribeBtn.classList.add('subscribed');
    } else {
        subscribeBtn.textContent = 'Inscrever-se';
        subscribeBtn.classList.remove('subscribed');
    }
}

updateSubscribeBtn(localStorage.getItem(CHANNEL_KEY) === 'true');

subscribeBtn.addEventListener('click', () => {
    const current = localStorage.getItem(CHANNEL_KEY) === 'true';
    const next    = !current;
    localStorage.setItem(CHANNEL_KEY, next);
    updateSubscribeBtn(next);
});

const sidebarToggle  = document.getElementById('sidebar-toggle');
const sideBar        = document.getElementById('side-bar');
let sidebarExpanded = false;
const mainContent = document.querySelector('.content');

function expandSidebar() {
    sidebarExpanded = true;
    sideBar.classList.add('expanded');
    mainContent.classList.add('sidebar-expanded');
}

function collapseSidebar() {
    sidebarExpanded = false;
    sideBar.classList.remove('expanded');
    mainContent.classList.remove('sidebar-expanded');
}

sidebarToggle.addEventListener('click', () => {
    sidebarExpanded ? collapseSidebar() : expandSidebar();
});
