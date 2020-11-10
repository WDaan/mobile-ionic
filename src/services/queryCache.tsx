import { QueryCache } from 'react-query'
const queryCache = new QueryCache()
export default queryCache

export function clearIoCache() {
    queryCache.invalidateQueries('ios')
}
