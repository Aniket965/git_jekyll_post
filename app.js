var request = require("request");
var fs = require('fs');

username = 'aniket965';

var options = {
    url: 'https://api.github.com/users/' + username + '/repos?page=1&per_page=1000',
    headers: {
        'User-Agent': 'request'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var repos = JSON.parse(body);
        for (var i = 0; i < repos.length; i++) {
            generatePostfromrepo(repos[i]);
        }
    }
}

request(options, callback);


function generatePostfromrepo(repo) {
    if (!repo.fork) {
        var repo_name = repo.name;
        var repo_description = repo.description;
        if (repo_description === null)
            repo_description = '';
        var repo_date = repo.created_at.slice(0, 10);
        filename = repo_date + "-" + repo_name;
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
        getReadmeData(repo.full_name, post_data, filename);



    }


}

function savemarkdown(filename, content) {
    fs.writeFile("data/" + filename + ".md", content, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file " + filename + " was saved!");
    });
}

function getReadmeData(full_name, post_data, filename) {
    request('https://raw.githubusercontent.com/' + full_name + '/master/README.md', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var post = post_data + body;
            savemarkdown(filename, post);

        }
    });

}