var posts=["2024/11/21/hello-world/","2024/11/21/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };