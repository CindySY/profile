export const categories = ['All', 'Web', 'App', 'Design', 'Illustration', 'NFT'] as const;
export type Category = typeof categories[number];
export interface Project { id: string; name: string; category: Exclude<Category,'All'>; description: string; image?: string; url?: string; placeholder: boolean; }
export const projects: Project[] = [
  {
    "id": "01",
    "name": "APT saloon Web Design",
    "category": "Web",
    "description": "APT saloon Web Design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "url": "https://apt.com.my/",
    "image": "./images/web1.webp"
  },
  {
    "id": "02",
    "name": "Yixin bakuteh Website",
    "category": "Web",
    "description": "Yixin bakuteh Website — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "url": "https://www.yixinpremium.com/",
    "image": "./images/web2.webp"
  },
  {
    "id": "03",
    "name": "Tazte App Website",
    "category": "Web",
    "description": "Tazte App Website — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "url": "https://zcity.io/tazte",
    "image": "./images/web3.webp"
  },
  {
    "id": "04",
    "name": "Topspeed college Website",
    "category": "Web",
    "description": "Topspeed college Website — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "url": "https://topspeedacademy.edu.my/",
    "image": "./images/web4.webp"
  },
  {
    "id": "05",
    "name": "Enogy supplement website",
    "category": "Web",
    "description": "Enogy supplement website — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "url": "https://enogy.asia/en/index.html",
    "image": "./images/web5.webp"
  },
  {
    "id": "06",
    "name": "SB10plus Wesbite",
    "category": "Web",
    "description": "SB10plus Wesbite — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/web6.webp"
  },
  {
    "id": "07",
    "name": "Zcafe Mobile app & design",
    "category": "App",
    "description": "Zcafe Mobile app & design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/app1.webp"
  },
  {
    "id": "08",
    "name": "Gobunnygo delivery app & design",
    "category": "App",
    "description": "Gobunnygo delivery app & design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/app2.webp"
  },
  {
    "id": "09",
    "name": "Beau Hour Booking app design",
    "category": "App",
    "description": "Beau Hour Booking app design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/app3.webp"
  },
  {
    "id": "10",
    "name": "SB10 plus app design",
    "category": "App",
    "description": "SB10 plus app design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/app4.webp"
  },
  {
    "id": "11",
    "name": "SB10plus Supplement Branding Design",
    "category": "Design",
    "description": "SB10plus Supplement Branding Design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/design1.webp"
  },
  {
    "id": "12",
    "name": "SB10plus Skin Care Branding Design",
    "category": "Design",
    "description": "SB10plus Skin Care Branding Design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/design2.webp"
  },
  {
    "id": "13",
    "name": "Enfa Book design",
    "category": "Design",
    "description": "Enfa Book design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/design3.webp"
  },
  {
    "id": "14",
    "name": "Eranzi Calendar design",
    "category": "Design",
    "description": "Eranzi Calendar design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/design4.webp"
  },
  {
    "id": "15",
    "name": "Home Deco Exhibition brouchure design",
    "category": "Design",
    "description": "Home Deco Exhibition brouchure design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/design5.webp"
  },
  {
    "id": "16",
    "name": "Gilapet food Packaging & branding design",
    "category": "Design",
    "description": "Gilapet food Packaging & branding design — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/design6.webp"
  },
  {
    "id": "17",
    "name": "JU Dimsum drawing",
    "category": "Illustration",
    "description": "JU Dimsum drawing — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/illust1.webp"
  },
  {
    "id": "18",
    "name": "Takobowl Art",
    "category": "Illustration",
    "description": "Takobowl Art — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/illust2.webp"
  },
  {
    "id": "19",
    "name": "Gangster All star Competition",
    "category": "Illustration",
    "description": "Gangster All star Competition — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/illust3.webp"
  },
  {
    "id": "20",
    "name": "BlastWolf NFT",
    "category": "NFT",
    "description": "BlastWolf NFT — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "image": "./images/nft1.webp"
  },
  {
    "id": "21",
    "name": "Backpacker NFT",
    "category": "NFT",
    "description": "Backpacker NFT — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "url": "https://opensea.io/collection/the-backpackers",
    "image": "./images/nft2.webp"
  },
  {
    "id": "22",
    "name": "Le Fruit NFT1",
    "category": "NFT",
    "description": "Le Fruit NFT1 — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "url": "https://opensea.io/collection/le-fruit",
    "image": "./images/nft3.webp"
  },
  {
    "id": "23",
    "name": "Secret of Satoshi NFT",
    "category": "NFT",
    "description": "Secret of Satoshi NFT — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "url": "https://opensea.io/collection/secretofsatoshi",
    "image": "./images/nft4.webp"
  },
  {
    "id": "24",
    "name": "Ordinoid NFT",
    "category": "NFT",
    "description": "Ordinoid NFT — from Cindy Teh’s original portfolio.",
    "placeholder": false,
    "url": "https://magiceden.io/ordinals/marketplace/ordinoid",
    "image": "./images/nft5.webp"
  }
];
