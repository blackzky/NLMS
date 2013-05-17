exports.index = function(req, res){
   if(req.session.username){
      data = { title: 'NCR Laboratory Management System', username: req.session.username };
      res.render('index', data);
   } else{
      req.flash('authRequired', true)
         res.redirect("/login");
   }
};

exports.login = function(req, res){
   if(req.session.username) res.redirect("/");
   data = {
      title: 'NCR Laboratory Management System | Login',
      authrequired: req.flash("authRequired")[0],
      error: req.flash('loginFailed')[0] == true ? "Incorrect username or password!" : ""
   };

   res.render('login', data);
};


/* todo: check if user is in the database, if so, then save the username session and redirect to homepage. */
exports.login_process = function(req, res){
   temp_cred = {username : "carlo", password: "1234qwer" }; // test user --remove later

   if(req.body.username == temp_cred.username && req.body.password == temp_cred.password){
      req.session.username = req.body.username;
      res.redirect('/');
   }else{
      req.flash('loginFailed', true);
      res.redirect('/login');
   }

};

exports.staff = function(req, res){
   data = { title: 'NCR Laboratory Management System | Staff', username: req.session.username };
   res.render("staff", data);
};

exports.inventory = function(req, res){
   data = { title: 'NCR Laboratory Management System | Inventory', username: req.session.username };
   res.render("inventory", data);
};

exports.logs = function(req, res){
   data = { title: 'NCR Laboratory Management System | Logs', username: req.session.username };
   res.render("logs", data);
};

exports.about = function(req, res){
   data = { title: 'NCR Laboratory Management System | about', username: req.session.username };
   res.render("about", data);
};
