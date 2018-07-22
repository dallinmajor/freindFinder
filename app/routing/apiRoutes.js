var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function(req, res) {
        var user = req.body;
        var friendMatch;
        var friendMatchDiff = 100;

        friends.forEach(function(friend) {
            var difference = 0

            for (var i = 0; i > friend.scores.length; i++) {
                 if (friend.scores[i] >= user.scores[i]) {
                    difference = difference + friend.scores[i] - user.scores[i];
                 } else {
                    difference = difference + user.scores[i] - friend.scores[i];
                 }
            }

            if ( difference < friendMatchDiff) {
                friendMatch = friend;
                friendMatchDiff = difference;
            }
        })

        friends.push(req.body);
        res.send(friendMatch);
    })
}