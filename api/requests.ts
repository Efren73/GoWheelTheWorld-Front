import axios from 'axios';

/** Get all faqs */
export function apiGetFaqs() {
    const fetchData = async (payload) => {
        try {
            const url = `http://localhost:3000/all-tours/${payload.id}`;
            const response = await fetch(url);
            const json = await response.json();
            const data = {
                name: json.name,
                exp: json.base_experience,
                photo: json.sprites.front_default,
            };
        } catch (error) {
            console.log('error', error);
        }
    };
    return fetchData;
}


// /** Create one faq */
// export function apiCreateFaq(payload) {
//     return axios.post(`/questions`, payload);
// }

// /** Update one faq */
// export function apiUpdateFaq(payload) {
//     return axios.put(`/questions/${payload.id}`, payload);
// }

// /** Delete one faq */
// export function apiRemoveFaq(faqId) {
//     return axios.delete(`/questions/${faqId}`);
// }