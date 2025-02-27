import { getAccessToken } from "../lib/actions";

const apiService = {
    get: async function(url: string) {
        const bearerToken = await getAccessToken();

        let headers: any = {
            'Accept': 'application/json',
        }

        if (bearerToken) {
            headers = { ...headers, 'Authorization': `Bearer ${bearerToken}` }
        }

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                headers: headers,
                method:'GET',
                
            })
                .then((response) => response.json())
                .then((json) => {
                    resolve(json);
                })
                .catch((error) => {
                    reject(error)
                })
        });
    },
    post: async function (url: string, data: any, formType: boolean, token: string | undefined): Promise<any> {
        let headers: any = {
            'Accept': 'application/json',
        }

        if (!formType) {
            headers = {...headers, 'Content-Type': 'application/json'}
        }

        if (token) {
            headers = {...headers, 'Authorization': `Bearer ${token}`}
        }

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                headers: headers,
                method: 'POST',
                body: data
            })
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    resolve(json)
                })
                .catch((error) => {
                    reject(error)
                })
        });
           
    }
}

export default apiService
 