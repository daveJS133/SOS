var front = {};


front.checkMalts = function (req, res, next) {
    var queryArray = [];
    if (req.query.chkHighlands) {
        queryArray.push({
            "area": "Highlands"
        });
    }
    if (req.query.chkSpeyside) {
        queryArray.push({
            "area": "Speyside"
        });
    }
    if (req.query.chkIslands) {
        queryArray.push({
            "area": "Islands"
        });
    }
    if (req.query.chkIslay) {
        queryArray.push({
            "area": "Islay"
        });
    }
    if (req.query.chkLowlands) {
        queryArray.push({
            "area": "Lowlands"
        });
    }
    if (req.query.chkCampbeltown) {
        queryArray.push({
            "area": "Campbeltown"
        });
    }
    console.log(queryArray);
    req.queryArray = queryArray;
    next();

};
module.exports = front;
