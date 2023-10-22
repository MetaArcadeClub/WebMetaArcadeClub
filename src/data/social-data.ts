// type 
type ISocial = {
  id: number;
  link: string;
  imagePath: string;
  altText: string;
  title: string;
}

const social_data:ISocial[] = [
  {
    id:2,
    link:'https://twitter.com/metaarcadeclub',
    imagePath:'/assets/img/icons/social_icon02.png', // replace with the path to your image
    altText: 'Twitter Icon',
    title:'Twitter'
  },
  {
    id:3,
    link:'https://discord.gg/gNU6xj6tPf',
    imagePath:'/assets/img/icons/social_icon01.png',
    altText: 'Discord Icon',
    title:'Discord'
  },
  {
    id:4,
    link:'https://www.instagram.com/metaarcadeclub/',
    imagePath:'/assets/img/icons/social_icon03.png',
    altText: 'Instagram Icon',
    title:'Instagram'
  },
]

export default social_data;
