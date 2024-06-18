// .jupyter/custom/custom.js

// Wait for the Jupyter Notebook interface to be fully loaded
$([IPython.events]).on('app_initialized.NotebookApp', function() {
    // Insert custom text into the launcher
    $('<div/>').text('Welcome to the Custom Binder Environment!').css({
        'font-size': '20px',
        'color': '#555',
        'margin': '20px 0',
        'text-align': 'center'
    }).prependTo('#header-container');
});
