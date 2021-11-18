const isItLoading = (loadingObject) => {
    for (const loading in loadingObject) {
        if (loading === true) {
            return true
        }
    }
    return false
}

export default isItLoading