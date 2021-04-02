async function apiCall(endpoint,{data,token}) {

    const config = {
        method: data ? 'POST' : 'GET',
        body: data ? JSON.stringify(data) : undefined,
        headers: {
            Authorization: token ? token: undefined,
            'Content-Type': data ? 'application/json' : undefined,
        },
    }

    return window.fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config).then(async response => {
        if (response.status === 401) {
            localStorage.clear();
            window.location.assign(window.location)
            return Promise.reject({message: 'Please re-authenticate.'})
        }
        const data = await response.json()
        if (response.ok) {
            return data
        } else {
            return Promise.reject(data)
        }
    })
}
export {apiCall}