var bounceIn = anime({
    targets: '.letter__part',
    opacity: {
        value: [0, 1],
        duration: 100,
        easing: 'linear',
        delay: 500
    }
});

var lineDrawing = anime({
    targets: '.color-1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1000,
    loop: true,
    direction: 'alternate',
});

var lineDrawing = anime({
    targets: '.color-3',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1200,
    loop: true,
    direction: 'alternate',
});

var lineDrawing = anime({
    targets: '.color-2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1400,
    loop: true,
    direction: 'alternate',
});