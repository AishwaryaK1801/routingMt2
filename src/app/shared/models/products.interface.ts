export interface IProducts{
    pname: string;
    pId: string;
    pStatus: 'In-progress' | 'Dispatched' | 'Delivered';
    canReturn: number;
    productDescription: string;
    productImg: string;
}