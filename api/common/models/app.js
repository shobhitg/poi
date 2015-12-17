var sequest = require('sequest')


module.exports = function(App) {
  App.install = function(name, cb) {
    var cmd = 'docker run -d -p 80:80 ' + name;
    console.log('cmd: ' + cmd);
    sequest('root@10.32.34.88', { command: cmd, password:'ca$hc0w'}, function (e, stdout) {
      //if (e) throw e
      console.log(stdout.split('\n'))
      cb(null, stdout.split('\n'));
    })
  };

  App.remoteMethod(
    'install',
    {
      accepts: {arg: 'name', type: 'string'},
      http: {path: '/install', verb: 'get'},
      returns: {arg: 'install', type: 'string'}
    }
  );
};
