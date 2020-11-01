// Adding some temp data until we hook up to firebase
import { v4 as uuidv4 } from "uuid";

export const data = {
  products: [
    {
      id: uuidv4(),
      uid:1,
      name: "French Terrier",
      description: "This is a small dog",
      imgUrl:
        "https://i.pinimg.com/236x/dc/59/2d/dc592ddb0785105012590aba6661a01f--white-french-bulldogs-cute-french-bulldog.jpg",
      type: "dog",
      price: 300,
      forSale: true,
      noAvailable: 3,
      featured: false,
      productSummary:'this is the summary of 1'
    },
    {
      id: uuidv4(),
      uid:2,
      name: "British Bulldog",
      imgUrl:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg",
      description: "This is a fat dog",
      type: "dog",
      price: 350,
      forSale: true,
      noAvailable: 2,
      featured: false,
      productSummary:'this is the summary of 2'
    },
    {
      id: uuidv4(),
      uid:3,
      name: "Poodle",
      description: "This is a fluffy dog",
      imgUrl:
        "https://media.istockphoto.com/photos/white-poodle-dog-on-green-grass-field-picture-id520646148?k=6&m=520646148&s=612x612&w=0&h=S_g4MRroXMgsfzjmZhp2Bj0paYz3zfapGPAO73C1cHc=",
      type: "dog",
      price: 600,
      forSale: true,
      noAvailable: 1,
      featured: true,
      productSummary:'this is the summary of 3'
    },
    {
      id: uuidv4(),
      uid:4,
      name: "Black Cat",
      description: "This cat is the master of night time camoflage",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGq7CmZnKh9xkVt7C6gOywkagkUa1AUIX92g&usqp=CAU",
      type: "cat",
      price: 90,
      forSale: true,
      noAvailable: 5,
      featured: false,
      productSummary:'this is the summary of 4'
    },
    {
      id: uuidv4(),
      uid:5,
      name: "Ferrel Cat",
      description: "This is a crazy cat",
      imgUrl:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/68DF/production/_109474862_angrycat-index-getty3-3.jpg",
      type: "cat",
      price: 870,
      forSale: true,
      noAvailable: 1,
      featured: true,
      productSummary:'this is the summary of 5'
    },
  ],
};
