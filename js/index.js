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
    document.querySelector('#backButton').addEventListener('click', function () {
        document.querySelectorAll('.item').forEach(entity => {
            entity.setAttribute('visible', 'true');
        });
        const arrow = document.querySelector('.arrow');
        if (arrow) {
            arrow.setAttribute('visible', 'false');
        }
    });
