const API_URL: string = import.meta.env.VITE_API_URL;
const TENANT_ID: string = import.meta.env.TENANT_ID;

export type Product = {
    id: number,
    name: string,
    slug: string,
    description: string,
    image: string,
    price: number,
    is_active: boolean,
    is_favorite: boolean,
    sort: number,
    category_id?: number
}



export async function getProducts(): Promise<Product[]>{
    const response = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/`)
    if(!response.ok) throw new Error("Failed to fetch products")
    const data = await response.json();
    console.log(data)
    return data;
}

export async function deleteProduct(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`, {
        method: 'DELETE',
    })
    if(!response.ok) throw new Error("Failed to delete products")
}

export async function getProduct(id:number):Promise<Product>{
    const response = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`)
    if(!response.ok) throw new Error("Failed to fetch tenant")
    return await response.json();
}

export async function updateProduct(
    id:number,
    data: {
        name: string;
        slug: string;
        description: string;
        image?: string;
        is_active: boolean;
        is_favorite: boolean;
        sort: number;

}
): Promise<void> {

}