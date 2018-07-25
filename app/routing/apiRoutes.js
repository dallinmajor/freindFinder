var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        var user = req.body;
        var friendMatch;
        var friendMatchDiff = 100;

        friends.forEach(function (friend) {
            var difference = 0;
            console.log("Friend Match Diff" + friendMatchDiff);

            if (friend.name === user.name) {
                return
            } else {

                for (var i = 0; i < friend.scores.length; i++) {
                    console.log(difference);
                    if (friend.scores[i] >= user.scores[i]) {
                        difference = difference + friend.scores[i] - parseInt(user.scores[i]);
                    } else {
                        difference = difference + parseInt(user.scores[i]) - friend.scores[i];
                    }
                }

                if (difference < friendMatchDiff) {
                    friendMatch = friend;
                    friendMatchDiff = difference;
                }
                console.log(friendMatch);
            }
        })
        console.log(friendMatch);
        friends.push(user);
        res.send(friendMatch);
    })
}