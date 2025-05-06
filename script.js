
  document.addEventListener("DOMContentLoaded", function() {
    // Chart.js code
    const ctx = document.getElementById('achievementsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
          label: 'Projects Completed',
          data: [3, 5, 7, 9, 12],
          backgroundColor: 'rgba(26, 188, 156, 0.7)'
        }]
      },
      options: {
        scales: { y: { beginAtZero: true } }
      }
    });
  
    // Blog dynamic loader
    fetch('blog-posts.json')
      .then(response => response.json())
      .then(posts => {
        const blogContainer = document.getElementById('blog-container');
        blogContainer.innerHTML = '';
        posts.forEach(post => {
          const article = document.createElement('article');
          article.innerHTML = `
            <h5>${post.title}</h5>
            <p>${post.summary}</p>
            <a href="${post.link}" class="btn btn-sm btn-primary">Read More</a>
            <hr>
          `;
          blogContainer.appendChild(article);
        });
      })
      .catch(error => {
        document.getElementById('blog-container').innerHTML = '<p>Error loading articles.</p>';
        console.error('Error fetching blog posts:', error);
      });
  });
  