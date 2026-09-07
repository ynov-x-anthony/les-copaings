export interface PostType {
  id: number;
  post: string;
  image?: string;
  likes: number;
  liked?: boolean;
}

export const feedData: PostType[] = [
  {
    id: 1,
    post: "Ceci sera un composant Post dynamique",
    image: "https://media.giphy.com/media/3o7aCTfyhYawdOXcFW/giphy.gif",
    likes: 12,
  },
  {
    id: 2,
    post: "Ceci sera un autre Post",
    image: "https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif",
    likes: 3,
  },
  {
    id: 3,
    post: "Encore un autre Post pour tester le scroll" ,
    image: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    likes: 0,
  },
  {
    id: 4,
    post: "SAM DICTATOR" ,
    image: "https://media.giphy.com/media/xUOxf48tR2go1mgeVW/giphy.gif",
    likes: 47,
  },
];