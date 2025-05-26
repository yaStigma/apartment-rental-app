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



