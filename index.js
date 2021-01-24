function myFunction() {
    var x = document.getElementById("navigation-list");
    if (x.className === "nav-list") {
      x.className += " responsive";
    } else {
      x.className = "nav-list";
    }
  }

 let blogSection = document.querySelector(".blog_cards");

fetch("https://dev.to/api/articles?username=_mohanmurali&per_page=3")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((blog) => (blogSection.innerHTML += createBlog(blog)));
  });

function createBlog(blog) {
  console.log(blog);
  return `
   <div class="blog_card">
   <a target="_blank" href="${blog.url}">
      <img src="${blog.social_image}" alt="" class="blog_image">
      <div class="blog_title">
      ${blog.title}
      </div>
      </a>
   </div>
   `;
}