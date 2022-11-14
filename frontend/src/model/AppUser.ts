export type AppUser = {

    id?: string;
    userName: string;
    password: string;
    userFirstName: string;
    userLastName: string;
    eMail: string;
    address: string;
    city: string;
    roles?: Array<string>;
    favoriteSights?: Array<string>;

}