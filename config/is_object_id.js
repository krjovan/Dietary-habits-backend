module.exports = function(objectId) {
    try {
        return new mongoose.Types.ObjectId(objectId).toHexString() === objectId
    } catch {
        return false
    }
}