fetch('https://api.coursera.org/api/courses.v1') 
    .then(response => response.json())
    .then(data => {
        courses = data.elements; // Update based on API response structure
        filteredCourses = courses;
        displayCourses();
        setupPagination();
    })
    .catch(error => console.error('Error fetching course data:', error));
