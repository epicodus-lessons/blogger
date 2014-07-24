Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('about');
  this.resource('contact', function() {
    this.resource('email');
    this.resource('phone');
  });
});
