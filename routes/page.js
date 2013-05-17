exports.index = function(req, res){
  if(req.session.username){
    data = { title: 'NCR Laboratory Management System' };
    res.render('index', data);
  } else{
    req.flash('authRequired', true)
    res.redirect("/login");
  }
};

exports.login = function(req, res){
  data = { title: 'NCR Laboratory Management System | Login' };
  data.authrequired = req.flash("authRequired")[0];

  res.render('login', data);
};


exports.login_process = function(req, res){
  temp_cred = {username : "carlo", password: "1234qwer" }; // test user

  /* todo: check if user is in the database, if so, then save the username session and redirect to homepage. */
  if(req.body.username == temp_cred.username && req.body.password == temp_cred.password){
    console.log("success");
  }else{
    console.log("failed");
  }

  res.redirect('/login');
};

