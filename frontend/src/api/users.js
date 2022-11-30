import client from "./client";

export default class Users {
    constructor(){

    };

    static async getUser(id) {
        return await client.get('/', {
            params : {
                id : id
            }
        })
    }

    static async getAllUsers() {
        return await client.get('/')
    }

    static async updateUser(data) {
        return await client.patch('/', data)
    }

    static async deleteUser(id) {
        return await client.delete('/', {
            params : {
                id : id
            }
        })
    } 
}