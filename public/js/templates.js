angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\n  <h3>Contact Form</h3>\n  <div ng-if="messages.error" role="alert" class="text-danger">\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\n  </div>\n  <div ng-if="messages.success" role="alert" class="text-success">\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\n  </div>\n  <form ng-submit="sendContactForm()">\n    <label for="name">Name</label>\n    <input type="text" name="name" id="name" ng-model="contact.name" autofocus>\n    <label for="email">Email</label>\n    <input type="email" name="email" id="email" ng-model="contact.email">\n    <label for="message">Body</label>\n    <textarea name="message" id="message" rows="7" ng-model="contact.message"></textarea>\n    <br>\n    <button type="submit">Send</button>\n  </form>\n</div>\n');
$templateCache.put('partials/footer.html','<footer>\n  <p>\xA9 2016 Company, Inc. All Rights Reserved.</p>\n</footer>');
$templateCache.put('partials/header.html','<div ng-controller="HeaderCtrl" class="container">\n  <ul class="list-inline">\n    <li><a href="/">Home</a></li>\n    <li><a href="/contact">Contact</a></li>\n  </ul>\n</div>\n');
$templateCache.put('partials/home.html','<div class="container">\n  <div class="row">\n    <div class="col-sm">\n      <h3>Heading</h3>\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n        condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n        Donec sed odio dui.</p>\n      <a href="#" role="button">View details</a>\n    </div>\n    <div class="col-sm">\n      <h3>Heading</h3>\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n        condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n        Donec sed odio dui.</p>\n      <a href="#" role="button">View details</a>\n    </div>\n    <div class="col-sm">\n      <h3>Heading</h3>\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n        condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n        Donec sed odio dui.</p>\n      <a href="#" role="button">View details</a>\n    </div>\n  </div>\n</div>\n');}]);