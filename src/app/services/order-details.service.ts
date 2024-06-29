import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  foodDetails=[
    {
      id:1,
      foodName:"cake",
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
    },

    {
      id:8,
      foodName:"egg biscuit",
      foodDetails:"very tasty",
      foodPrice:8+"$",
      foodImg:"https://media.vanityfair.com/photos/54ca9f617e4b004120bbd00c/master/w_2560%2Cc_limit/image.jpg"
    },
    {
      id:9,
      foodName:"meet with potatoes",
      foodDetails:"very tasty",
      foodPrice:8+"$",
      foodImg:"https://i.pinimg.com/736x/5c/c9/86/5cc9862920b5a5c112782288f6eb59bd.jpg"
    },
    {
      id:10,
      foodName:"vegetable sandwich",
      foodDetails:"very tasty",
      foodPrice:8+"$",
      foodImg:"https://www.discoveryvillages.com/wp-content/uploads/2022/05/7-benefits-of-gourmet-meals-for-your.jpg"
    },
    {
      id:11,
      foodName:"chocolate cake",
      foodDetails:"very tasty",
      foodPrice:8+"$",
      foodImg:"https://qph.cf2.quoracdn.net/main-qimg-956f4d01024c675a88dab13d10e98412-lq"
    },
    {
      id:12,
      foodName:"Chicken with vegetables",
      foodDetails:"very tasty",
      foodPrice:8+"$",
      foodImg:"https://images.squarespace-cdn.com/content/v1/581351cd6a4963da87c45b93/1561813262880-1SYA5SGM62BHVM3X7Y8L/IMG_1222.jpg?format=1000w"
    },
    {
      id:13,
      foodName:"Entrecote",
      foodDetails:"very tasty",
      foodPrice:8+"$",
      foodImg:"https://www.luxurylifestylemag.co.uk/wp-content/uploads/2022/05/bigstock-Grilled-Marbled-Meat-Steak-Fil-268244788.jpg"
    },
    {
      id:14,
      foodName:"Raspberry cake",
      foodDetails:"very tasty",
      foodPrice:8+"$",
      foodImg:"https://insanelygoodrecipes.com/wp-content/uploads/2021/10/Sweet-Mille-Feuille-with-Vanilla-Cream-and-Fresh-Berries-683x1024.jpg"
    },
    {
      id:15,
      foodName:"fruits cake",
      foodDetails:"very tasty",
      foodPrice:8+"$",
      foodImg:"https://res.cloudinary.com/plast/image/upload/f_auto/v1/plastech/images/news/3027/hefestus_gourmet_dessert.jpg"
    }
  ]

}
