var sequest = require('sequest')


module.exports = function(App) {
  App.install = function(name, cb) {
    name = 'vmwarecna/nginx';
    var cmd = 'docker stop $(docker ps -a -q); sleep 2; docker rm $(docker ps -a -q); sleep 2; docker rmi $(docker images -q);docker run -d -p 80:80 ' + name;
    console.log('cmd: ' + cmd);
    sequest('root@10.32.35.9', { command: cmd, password:'mosani77'}, function (e, stdout) {
      if (e) console.log(e)
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
