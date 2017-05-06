var request = require("request");
var fs = require('fs');
var colors = require('colors');
var prompt = require('prompt');

module.exports = function () {
    username = '';
    var dir = __dirname + '/_posts';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var repos = JSON.parse(body);
            for (var i = 0; i < repos.length; i++) {
                // for each repo call this function for generating posts
                generatePostfromrepo(repos[i]);

            }
        }
    }


    function getdetails() {
        console.log('Welcome ,'.red+' \n to git jekyll posts'.white);
        console.log('all posts will be saved under _posts dir under current directory'.yellow);

        prompt.start();
        // get github username from user
        prompt.get('github_username', function (err, result) {
            username = result.github_username;

            // creates url for api
            var options = {
                url: 'https://api.github.com/users/' + username + '/repos?page=1&per_page=1000',
                headers: {
                    'User-Agent': 'request'
                }
            };
            console.log('Downloading repo details...'.magenta);
            // get data
            request(options, callback);

        });
    }

    // start of program
    getdetails();

    function generatePostfromrepo(repo) {
        
        // if that repo is not forked, means original author of repo is author
        if (!repo.fork) {
            console.log('formating '.green + repo.name.yellow + " Started".green);

            var repo_name = repo.name;
            var repo_description = repo.description;
            if (repo_description === null)
                repo_description = '';
            var repo_date = repo.created_at.slice(0, 10);
            filename = repo_date + "-" + repo_name;
            // formats data in markdown format 
            post_data = '---' + '\n' +
                'layout: post' + '\n' +
                'title:  "' + repo_name + '"' +
                '\n' + 'date:   ' + repo_date + '\n' +
                'excerpt: "' + repo_description + '"' + '\n' +
                'project: true' + '\n' +
                'tag:' + '\n' +
                '- project' + '\n' +
                'comments: false' + '\n' +
                '---' + '\n';;
            // add readme data in posts
            getReadmeData(repo.full_name, post_data, filename);



        }


    }
    // for  saving markdown file
    function savemarkdown(filename, content) {
        fs.writeFile(__dirname + "/_posts/" + filename + ".md", content, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file ".green + filename.yellow + " was saved!".green);
        });
    }

    function getReadmeData(full_name, post_data, filename) {

        console.log('Downloading '.cyan + full_name.magenta + " Readme...".cyan);

        request('https://raw.githubusercontent.com/' + full_name + '/master/README.md',
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var post = post_data + body;
                    // saves markdown in file
                    savemarkdown(filename, post);

                }
            });

    }
}