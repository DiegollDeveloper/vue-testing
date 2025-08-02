export interface User {
    name: string;
    age: number;
    phone: number;
}

export function userFromJson(doc: any): User {
    return {
        name: doc['name'],
        age: doc['age'],
        phone: doc['phone'],
    };
}