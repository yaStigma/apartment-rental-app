export interface Apartment {
  _id: string;
title: string;
    description: string;
        price: number;
   numberOfRooms: number;
   photos?: [{
        url?: string;
        uploadedAt?: string;
        _id?: string;
   }]
    createdAt: string;
    updatedAt: string;
    }

    
export interface addApartment {
title: string;
    description: string;
        price: number;
   numberOfRooms: number;
     photos?: File[]; 
    }


export interface Photo {
  _id?: string;
  url?: string;
  uploadedAt?: string;
}