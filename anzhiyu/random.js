var posts=["2024/07/20/hello-world/","2024/06/08/newpapername/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };