
export const FetchContributions = async (id) => {
    try {

        const response = await fetch(`http://127.0.0.1:8000/api/contributions/`)

        return response.json()
    } catch (err) {
        return {'Error': err}
    }
}