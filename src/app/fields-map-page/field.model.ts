export class Field {
  constructor(
    public id: string,
    public name: string,
    public lat: number,
    public lng: number,
    public images: string[],
    public address: string,
    public phone: string | undefined,
    public website: string | undefined,
    // Array of length 7, hours for each day of the week of the form "0900-2300"
    public businessHours: string[] | undefined,
    public city: string,
    public rating: number,
    public reviewsTotal: number
  ) {}
}
