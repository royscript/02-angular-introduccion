export class User {
    id: string; 
    first_name: string; 
    last_name: string; 
    name: string; 
    email: string; 
    job: string; 
    createdAt: Date; 
    constructor(obj?: any) { 
        this.id = obj && obj.id || null; 
        this.name = obj && obj.name || null; 
        this.first_name = obj && obj.first_name || null; 
        this.last_name = obj && obj.last_name || null; 
        this.email = obj && obj.email || null; 
        this.job = obj && obj.job || null; 
        this.createdAt = obj && obj.createdAt || null; 
    }
}
