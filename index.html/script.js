$(document).ready(function () {

    const savedTheme = localStorage.getItem('darkTheme') === 'true';
    setTheme(savedTheme);


    $('#toggle-theme').on('click', function () {
        const isDarkTheme = $('body').hasClass('dark-theme');
        setTheme(!isDarkTheme);
        saveThemePreference(!isDarkTheme);
    });
});

function setTheme(isDarkTheme) {
    const body = $('body');
    const button = $('#toggle-theme');

    body.toggleClass('dark-theme', isDarkTheme);
    button.text(isDarkTheme ? '🌝' : '🌞');
}

function saveThemePreference(isDarkTheme) {
    localStorage.setItem('darkTheme', isDarkTheme.toString());
}
