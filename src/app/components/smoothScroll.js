export function smoothScroll(targetId, headerOffset = 100) {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
        console.error(`Element with id "${targetId}" not found.`);
        return;
    }

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}