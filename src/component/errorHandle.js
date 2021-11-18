const errorHandler = (...errors) => {
    for (const err in errors) {
        if (err) {
            return err.message
        }
    }
    return null
}

export default errorHandler