exports.index = function(req, res){
  if(req.session.username){
    data = { title: 'NCR Laboratory Management System' };
    res.render('index', data);
  } else{
    req.session.authrequired = true;
    res.redirect("/login");
  }
};

exports.login = function(req, res){
  data = { title: 'NCR Laboratory Management System | Login' };
  data.authrequired = req.session.authrequired;
  req.session.authrequired = false;

  res.render('login', data);
};

