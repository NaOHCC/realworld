exports.getProfile = async (req, res, next) => {
    try {
        res.send("get /:username");
    } catch (err) {
        next(err);
    }
};

exports.followUser = async (req, res, next) => {
    try {
        res.send("post /:username/follow");
    } catch (err) {
        next(err);
    }
};

exports.unfollowUser = async (req, res, next) => {
    try {
        res.send("delete /:username/follow");
    } catch (err) {
        next(err);
    }
};
