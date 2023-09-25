function filterPosts(tag) {
    const allPosts = document.querySelectorAll('.grid-item');
    const buttons = document.querySelectorAll('.filter-buttons button');

    // Remove the active state from all buttons
    buttons.forEach(button => {
        button.classList.remove('active-button');
    });

    // Find the button that matches the tag and add the active state
    const activeButton = [...buttons].find(button => button.getAttribute('onclick') === `filterPosts('${tag}')`);
    if (activeButton) {
        activeButton.classList.add('active-button');
    }

    // Filter the posts
    allPosts.forEach(post => {
        if (tag === 'all' || post.getAttribute('data-tag') === tag) {
            post.classList.remove('hidden');
        } else {
            post.classList.add('hidden');
        }
    });
}


function navigateAndFilter(tag) {
    // Navigate to the blog page with a filter parameter
    window.location.href = "../../../blog.html?filter=" + tag;
}

// On page load, check for the filter parameter and apply the filter
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const filterTag = urlParams.get('filter');
    
    if (filterTag) {
        filterPosts(filterTag);
    } else {
        filterPosts('all');
    }
});
