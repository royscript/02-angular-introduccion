import { User } from "./user.model";
export class Pagination {
    data?: User[]; 
    //pagina cargada 
    page?: number; 
    //usuarios por pagina 
    per_page?: number; 
    //total de usuarios 
    total?: number; 
    total_pages?: number;
    constructor(obj?: any) { 
        this.data = obj && obj.id || []; 
        this.page = obj && obj.id || 1; 
        this.per_page = obj && obj.id || 6; 
        this.total = obj && obj.id || 0; 
        this.total_pages = obj && obj.id || 0; 
    }
}