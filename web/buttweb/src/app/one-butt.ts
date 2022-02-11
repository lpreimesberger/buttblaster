export class OneButt {
  /*
  cat", butt: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…VTRIsr+W/HvnvOL8EDVimlZbIviD2bUXYyaJGCLF9/MOj/9k=", …}
   */
  // tslint:disable-next-line:variable-name
  _id: string;
  // tslint:disable-next-line:variable-name
  _rev: string;
  added: string;
  name: string;
  bio: string;
  butt: string;
  likes: number;
  ratings: string[];

  constructor() {
    this.name = this.added = this.bio = this.butt = this._rev = this._id = '';
    this.ratings = [];
    this.likes = 0;
  }
}
