var program = require('commander'),
      color = require('colorful'),
      fs = require('fs'),
      exec = require('child_process').exec;


function walk(file_list, filedir_list, path) {
      var dirList = fs.readdirSync(path);
      dirList.forEach(function (item) {
            if (fs.statSync(path + '/' + item).isDirectory()) {
                  filedir_list.push(path + '/' + item);
                  walk(file_list, filedir_list, path + '/' + item);
            } else {
                  file_list.push(path + '/' + item);
            }
      });
}

function mkdir(path) {
      if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
      }
}

function init() {

      var template_path = '/usr/local/lib/node_modules/kman/template';
      var sample_path = 'sample';

      var src_file_list = [];
      var src_filedir_list = [];

      var out_filedir_map = [];
      var out_file_map = [];

      //遍历目录
      walk(src_file_list, src_filedir_list, template_path);

      //生成对应的路径文件map
      src_filedir_list.forEach(function (item) {
            var out = item.replace(template_path, sample_path);
            out_filedir_map.push([
                  item,
                  out
            ]);
      });
      src_file_list.forEach(function (item) {
            var out = item.replace(template_path, sample_path);
            out_file_map.push([
                  item,
                  out
            ]);
      });

      //console.log(out_filedir_map);
      //console.log(out_file_map);

      //return ;

      //生成目录
      mkdir(sample_path);
      for (var i in out_filedir_map) {
            var item = out_filedir_map[i][1];
            mkdir(item);
      }

      //生成文件
      for (var i in out_file_map) {
            var item = out_file_map[i];
            var srcFile = fs.readFileSync(item[0]);
            fs.writeFileSync(item[1], srcFile);
      }

      process.chdir(sample_path);

      console.log('finish creating sample project.');

      //console.log('install dependence... please wait moment');
      //安装依赖
      //exec('npm install');
      //console.log('finish install dependence.');
      //console.log('install gulp dependence... please wait moment');
      //安装依赖
      //exec('sudo npm install -g gulp');
}

function debug() {
      exec('gulp dev', function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                  console.log('exec error: ' + error);
            }
      });
}
function build() {
      exec('gulp build', function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                  console.log('exec error: ' + error);
            }
      });
}

exports.init = init;
exports.debug = debug;
exports.build = build;