import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  foodDetails=[
    {
      id:1,
      foodName:"kake",
      foodDetails:"cheese kake with vannila cream",
      foodPrice:10+"$",
      foodImg:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id:2,
      foodName:"fish",
      foodDetails:"stake solomon fish with vagtabols",
      foodPrice:17+"$",
      foodImg:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      id:3,
      foodName:"vegtabels",
      foodDetails:"all the kind of vagtabols",
      foodPrice:13+"$",
      foodImg:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id:4,
      foodName:"chiken",
      foodDetails:"spaci chiken",
      foodPrice:16+"$",
      foodImg:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id:5,
      foodName:"pizza",
      foodDetails:"tometo suit, muzzarela cheese, and extras from the top in custom shop",
      foodPrice:14+"$",
      foodImg:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id:6,
      foodName:"pankake",
      foodDetails:"with maple chokolate sirop, and whipped cream",
      foodPrice:10+"$",
      foodImg:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id:7,
      foodName:"ice kreem",
      foodDetails:"very tasty",
      foodPrice:8+"$",
      foodImg:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    }
  ]

}
