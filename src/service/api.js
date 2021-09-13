export default {
    baseURL: "http://localhost:3001/api/todo",

    getAll: function(){
        return fetch(this.baseURL)
    },
    
    create: function(body){
        return fetch(this.baseURL, {
            method: 'POST',
            headers: new Headers({
                "Content-type": "Application/json"
            }),
            body: JSON.stringify(body)
        })
    },
    
    getOne: function(id){
        return fetch(`${this.baseURL}/${id}`)
    },
    
    update: function(body, id){
        return fetch(`${this.baseURL}/${id}`, {
            method: 'PUT',
            headers: new Headers({
                "Content-type": "Application/json"
            }),
            body: JSON.stringify(body)
        })
    },

    delete: function(id){
        return fetch(`${this.baseURL}/${id}`, { method: 'DELETE' })
    }
}
