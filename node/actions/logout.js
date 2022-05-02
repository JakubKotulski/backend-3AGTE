const logoutAction = (req, res) => {
    req.logout();
    res.json({});
};

module.exports = {logoutAction};