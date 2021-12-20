export class Task {
    _id?:string;
    Title: string;
    Description: string;
    Adresse: string;
    date: string;

    constructor(title: string, description: string, adresse: string, date: string) {
        this.Title = title;
        this.Description = description;
        this.Adresse = adresse;
        this.date = date;
    }
}