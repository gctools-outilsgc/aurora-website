/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
 const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const mdTemplate = path.resolve(`src/templates/MarkdownTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              subnav
              lang
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: mdTemplate,
      });
    });
  });
};

const sass = require("node-sass");
var fs = require('fs');

exports.onPreBootstrap = () => {

    // compile aurora.css for dist folder
    sass.render({
        file: path.join(__dirname, '/src/utils/custom.scss'),
        outputStyle: 'nested',
        outFile: path.join(__dirname, "/public/static/"),
      }, function(error, result) {
          if(!error){
            // No errors during the compilation, write this result on the disk
            fs.writeFile(path.join(__dirname, "/public/static/aurora.css"), result.css, function(err){
              if(!err){
                //file written on disk
              } else {
                  console.log(err);
              }
            });
          }
      });

      // compile aurora.min.css for dist folder
      sass.render({
          file: path.join(__dirname, '/src/utils/custom.scss'),
          outputStyle: 'compressed',
          outFile: path.join(__dirname, "/public/static/"),
        }, function(error, result) {
            if(!error){
              // No errors during the compilation, write this result on the disk
              fs.writeFile(path.join(__dirname, "/public/static/aurora.min.css"), result.css, function(err){
                if(!err){
                  //file written on disk
                } else {
                    console.log(err);
                }
              });
            }
        });

}

exports.onPostBootstrap = () => {

          var archiver = require('archiver');

          // create a file to stream archive data to.
          var output = fs.createWriteStream(__dirname + '/public/static/aurora.zip');
          var archive = archiver('zip', {
            zlib: { level: 9 } // Sets the compression level.
          });

          // This event is fired when the data source is drained no matter what was the data source.
          // It is not part of this library but rather from the NodeJS Stream API.
          // @see: https://nodejs.org/api/stream.html#stream_event_end
          output.on('end', function() {
            console.log('Data has been drained');
          });

          // good practice to catch warnings (ie stat failures and other non-blocking errors)
          archive.on('warning', function(err) {
            if (err.code === 'ENOENT') {
              // log warning
            } else {
              // throw error
              throw err;
            }
          });

          // good practice to catch this error explicitly
          archive.on('error', function(err) {
            throw err;
          });

          // pipe archive data to the file
          archive.pipe(output);

          // append a file from stream
          var file1 = __dirname + '/public/static/aurora.css';
          archive.append(fs.createReadStream(file1), { name: 'aurora.css' });
          var file2 = __dirname + '/public/static/aurora.min.css';
          archive.append(fs.createReadStream(file2), { name: 'aurora.min.css' });
          var file3 = __dirname + '/src/dist/aurora.js';
          archive.append(fs.createReadStream(file3), { name: 'aurora.js' });
          var file4 = __dirname + '/src/dist/aurora.min.js';
          archive.append(fs.createReadStream(file4), { name: 'aurora.min.js' });

          // finalize the archive (ie we are done appending files but streams have to finish yet)
          // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
          archive.finalize();
}

/*
exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, "/src/img")
  );
};
*/
