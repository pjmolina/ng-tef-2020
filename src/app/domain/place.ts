export interface Place {
   _links: any;
   _id: string;
   name: string;
   address: string;
   city: string;
   zipCode: number;
   image: string;
   _ownerId: string;
   __v: number;
   location: Geopoint;
   _createdAt: string;
}

export interface Geopoint {
  coordinates: number[];
  type: 'Point';
}
