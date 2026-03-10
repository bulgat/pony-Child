export interface IUser {
    UserId: number;
    id: number;
    name: string;
    numCannon: string;
}
export interface IOneCard {
    item: IItemCard
}
export interface IItemCard {
    name: string;
    family: string;
    description: string;

}
export interface IDictionary {
    name: string;
}