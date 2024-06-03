$(document).on('submit', '#dynamicForm', function(event) {
    event.preventDefault();
    var formData = {
        email: $('#email').val(),
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val()
    };
    $.ajax({
        type: 'POST',
        url: 'https://fyleSubmit.com/submit', // Replace with your specific URL
        data: formData,
        success: function(response) {
            alert('Form submitted successfully!');
            // Clear the form after submission
            $('#dynamicForm')[0].reset();
            alert('Your form submitted!')
        },
        error: function(error) {
            alert('There was an error submitting the form.');
        }
    });
});
