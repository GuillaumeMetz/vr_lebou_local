    document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.item').forEach(entity => {
            entity.setAttribute('visible', 'false');
        });
        const arrow = document.querySelector('.arrow');
        if (arrow) {
            arrow.setAttribute('visible', 'true');
        }
    });
});