Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('post', {path: ':post_id'});
  this.resource('recent-comments');
  this.resource('about');
  this.resource('contact', function() {
    this.resource('email');
    this.resource('phone');
  });
});
