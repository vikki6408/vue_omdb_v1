import axios from 'axios'

const apiFilm = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDk0OGY3YjUzMDY1NjlhZDUxZDc3ZDI5YmVmZTNhZiIsIm5iZiI6MTc0MTk0ODIxNi44NDA5OTk4LCJzdWIiOiI2N2Q0MDUzODAwYzg1YzVhMjg2NGZlYjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8-TILMLy1tzn2P_rkVjXKMlqc150GtP5W0lQ5QNWjrM'
    }
});


export default {
    getfilm () {
        return apiFilm.get('/popular')
    }
}
