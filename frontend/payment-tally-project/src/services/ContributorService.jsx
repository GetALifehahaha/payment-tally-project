
export const FetchContributors = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/contributors/')

        return response.json()
    } catch (err) {
        return {'Error': err}
    }
}