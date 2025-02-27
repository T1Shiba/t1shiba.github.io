document.addEventListener('DOMContentLoaded', function() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skillLevel => {
        const skillValue = skillLevel.dataset.skill;
        skillLevel.style.width = skillValue + '%';
    });

    document.getElementById('download-btn').addEventListener('click', function() {
        let content = document.body.innerHTML;
        let blob = new Blob([content], { type: 'text/html' });
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'cv_nguyendangducduy.html';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});