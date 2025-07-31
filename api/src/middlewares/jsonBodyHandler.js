export async function jsonBodyHandler(request, response) {
    const buffers = []

    //coleta os chunks
    for await (const chunk of request) {
        buffers.push(chunk)
    }

    try {
        //Concatena, vira string e vira Json
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }

    response.setHeader("Content-Type", "application/json")
}
