var dbUtil = require("./DBUtil");

function insertBlogTagsMapping(blogId, tagsId, ctime, utime, success) {
    var sql = "insert into blog_tags_mapping (`blog_id`, `tag_id`,`ctime`,`utime`) values (?, ?,?,?);";
    var params = [blogId, tagsId, ctime, utime];
    var connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            success(result);
        }
    });
    connection.end();
}

function queryBlogTagsMappingByBlogId(blogId, success) {
    var sql = "select * from blog_tags_mapping where blog_id = ?;";
    var params = [blogId];
    var connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            success(result);
        }
    });
    connection.end();
}

function queryBlogTagsMappingByTagsId(tagsId, success) {
    var sql = "select * from blog_tags_mapping where tags_id = ?;";
    var params = [tagsId];
    var connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            success(result);
        }
    });
    connection.end();
}

module.exports.insertBlogTagsMapping = insertBlogTagsMapping;
module.exports.queryBlogTagsMappingByBlogId = queryBlogTagsMappingByBlogId;
module.exports.queryBlogTagsMappingByTagsId = queryBlogTagsMappingByTagsId;