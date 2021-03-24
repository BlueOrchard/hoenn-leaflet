export function fetchIDFromURL(url){
    let areaParts = url.split('/')
    let lastSegment = areaParts.pop() || areaParts.pop()

    return lastSegment
}