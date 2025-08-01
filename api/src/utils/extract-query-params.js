export function extractQueryParams(query) {
    return query.slice(1).split("&").reduce((queryParams, param) => { // pra tirar a ? e separar os parâmetros
        const [key, value] = param.split("=")

        queryParams[key] = value

        return queryParams
    }, {})
}