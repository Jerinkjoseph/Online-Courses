document.getElementById('categoryFilter').addEventListener('change', function() {
    const category = this.value;
    filteredCourses = courses.filter(course => course.Category === category);
    displayCourses();
    setupPagination();
});
