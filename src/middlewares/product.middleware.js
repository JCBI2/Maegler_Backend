const uploadDriverPhoto = (req, res, next) => {
    req.body.profilePhoto = `/img/profile-pics/${req.files.profilePhoto[0].filename}`
    next();
}

module.exports = { uploadDriverPhoto }