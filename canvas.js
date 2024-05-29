window.onload = function() {
    const canvas = document.getElementById('logoCanvas');
    const ctx = canvas.getContext('2d');
    const color = 'mediumvioletred';

    ctx.beginPath();
    ctx.moveTo(100, 70);
    ctx.bezierCurveTo(100, 30, 150, 30, 150, 70);
    ctx.bezierCurveTo(150, 100, 100, 130, 100, 150);
    ctx.bezierCurveTo(100, 130, 50, 100, 50, 70);
    ctx.bezierCurveTo(50, 30, 100, 30, 100, 70);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    ctx.font = 'bold 24px Times New Roman';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('TBS', 100, 90);
};