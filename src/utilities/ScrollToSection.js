export const scrollToSection = (id) => {
    let anchorTarget = document.getElementById(id);
    if (anchorTarget) {
        anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
        document.getElementById('scrollContainer')
            .scrollTo({
                left: 0,
                top: anchorTarget.offsetTop,
                behavior: 'smooth'
            });
    }
}