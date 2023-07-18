import React from "react";
import {
  FaBehance,
  FaDiscord,
  FaLinkedin,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/Home",
    text: "Ana Sayfa",
  },
  {
    id: 2,
    url: "/Roadmaps",
    text: "Yol Haritaları",
  },
  {
    id: 3,
    url: "/LeetCode",
    text: "LeetCode",
  },
  {
    id: 4,
    url: "/Algoritmalar",
    text: "Algoritmalar",
  },
  {
    id: 5,
    url: "/medium",
    text: "Medium",
  },
  {
    id: 6,
    url: "/Ethernaut",
    text: "Ethernaut",
  },
];

export const social = [
  {
    id: 1,
    url: "https://discord.gg/PreBDJg48r",
    icon: <FaDiscord />,
  },
  {
    id: 2,
    url: "https://twitter.com/_DevCom",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/company/trdevelopercommunity/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://medium.com/gs-developer-community",
    icon: <FaMedium />,
  },
];
const menu = [
  {
    id: 1,
    title: "#1 - Two of Sum",
    category: "Array",
    img: "./images/two of sum.jpg",
    url: "https://www.youtube.com/watch?v=z4ORRdgWuB4",
  },
  {
    id: 2,
    title: "#206 - Reverse Linked List",
    category: "Linked List",
    img: "./images/206 reverse linked list.jpg",
    url: "https://www.youtube.com/watch?v=hQza6dYI2AM",
  },
  {
    id: 3,
    title: "#104 - Maximum Depth of Binary Tree",
    category: "Binary Tree",
    img: "./images/104 maximum depth of binary tree.jpg",
    url: "https://www.youtube.com/watch?v=Ww0YFz9_V2s",
  },
  {
    id: 4,
    title: "#125 - Valid Palindrome",
    category: "String",
    img: "./images/125 Valid Palindrome.jpg",
    url: "https://www.youtube.com/watch?v=l7E0Dl2M5gs",
  },
  {
    id: 5,
    title: "#19 - Remove Nth Node From End of List",
    category: "Linked List",
    img: "./images/19 Remove Nth Node From End of List.jpg",
    url: "https://www.youtube.com/watch?v=nBfliKBIQeU",
  },
  {
    id: 6,
    title: "#102 - Binary Tree Level Order Traversal",
    category: "Binary Tree",
    img: "./images/102 binary tree level order traversal.jpg",
    url: "https://www.youtube.com/watch?v=CplPd_M-sAw",
  },
  {
    id: 7,
    title: "#54 - Spiral Matrix",
    category: "Matrix",
    img: "./images/54 spiral matrix.jpg",
    url: "https://www.youtube.com/watch?v=VRKlggqMhuA",
  },
  {
    id: 8,
    title: "#300 - Longest Increasing Subsequence",
    category: "Dynamic Programming",
    img: "./images/300 Longest Increasing Subsequence.jpg",
    url: "https://www.youtube.com/watch?v=AJkBMCh7B0k",
  },
  {
    id: 9,
    title: "#33 - Search in Rotated Sorted Array",
    category: "Array",
    img: "./images/33 search in rotated sorted array.jpg",
    url: "https://www.youtube.com/watch?v=yl6al9ib91c",
  },
  {
    id: 10,
    title: "#56 - Merge Intervals",
    category: "Interval",
    img: "./images/56 merge intervals.jpg",
    url: "https://www.youtube.com/watch?v=VcHMax6Pat8",
  },
  {
    id: 11,
    title: "#338 - Counting Bits",
    category: "Binary",
    img: "./images/338 counting bits.jpg",
    url: "https://www.youtube.com/watch?v=YtwJK1qI4Yc",
  },
  {
    id: 12,
    title: "#647 - Palindrome Substrings",
    category: "String",
    img: "./images/647 Palindromic Substrings.jpg",
    url: "https://www.youtube.com/watch?v=6iypO-yjIAI",
  },
  {
    id: 13,
    title: "#547 - Number of Provinces",
    category: "Graph",
    img: "./images/547 Number of Provinces.jpg",
    url: "https://www.youtube.com/watch?v=FJ1NnLkddKw",
  },
  {
    id: 14,
    title: "#572 - Subtree of Another Tree",
    category: "Binary Tree",
    img: "./images/572 Subtree of Another Tree.jpg",
    url: "https://www.youtube.com/watch?v=kowYAx-LEIg",
  },
  {
    id: 15,
    title: "#1318 - Minimum Flips to Make a OR b Equal to c",
    category: "Binary",
    img: "./images/1318 Min Flips to make.jpg",
    url: "https://www.youtube.com/watch?v=OGmxBSZqgN8",
  },
  {
    id: 16,
    title: "#139 - Word Break",
    category: "Dynamic Programming",
    img: "./images/139 Word Break.jpg",
    url: "https://www.youtube.com/watch?v=GDTWoIR9BNU",
  },
  {
    id: 17,
    title: "#70 - Climbing Stairs",
    category: "Dynamic Programming",
    img: "./images/70 Climbing Stairs.jpg",
    url: "https://www.youtube.com/watch?v=8dQbsakGXpI",
  },
  {
    id: 18,
    title: "#238 - Product of Array Except Self",
    category: "Array",
    img: "./images/238 Product of Array Except Self.jpg",
    url: "https://www.youtube.com/watch?v=m0E9LKiP4uw",
  },
  {
    id: 19,
    title: "#105 - Construct Binary Tree From Preorder and Inorder Traversal",
    category: "Binary Tree",
    img: "./images/105 Construct Binary Tree from Preorder and Inorder Traversal.jpg",
    url: "https://www.youtube.com/watch?v=9sIQloyS-vM",
  },
  {
    id: 20,
    title: "#424 - Longest Repeating Character Replacement",
    category: "String",
    img: "./images/424 Longest Repeating Character Replacement.jpg",
    url: "https://www.youtube.com/watch?v=218B7S07088",
  },
  {
    id: 21,
    title: "#42 - Trapping Rain Water",
    category: "Array",
    img: "./images/42 Trapping Rain Water.jpg",
    url: "https://www.youtube.com/watch?v=tfvJ8GpJpss",
  },
  {
    id: 22,
    title: "#141 - Linked List Cycle",
    category: "Linked List",
    img: "./images/141 Linked List Cycle.jpg",
    url: "https://www.youtube.com/watch?v=4pf97Lo_w-Q",
  },
  {
    id: 23,
    title: "#704 - Binary Search",
    category: "Binary",
    img: "./images/704 Binary Search.jpg",
    url: "https://www.youtube.com/watch?v=XucsJck43s8",
  },
  {
    id: 24,
    title: "#198,213 - House Robber I ve II",
    category: "Dynamic Programming",
    img: "./images/198-213 House Robber I ve II.jpg",
    url: "https://www.youtube.com/watch?v=S7W_bK0Ch20",
  },
  {
    id: 25,
    title: "#20 - Valid Parentheses",
    category: "Array",
    img: "./images/20 Valid Parentheses.jpg",
    url: "https://www.youtube.com/watch?v=qf2tZBjQES8",
  },
  {
    id: 26,
    title: "#21,33 - Merge K/Two Sorted Lists",
    category: "Linked List",
    img: "./images/21,23 Merge K_Two Sorted Lists.jpg",
    url: "https://www.youtube.com/watch?v=lUfMRjTY-BQ",
  },
  {
    id: 27,
    title: "#1046 - Last Stone Weight",
    category: "Heap",
    img: "./images/1046 Last Stone Weight.jpg",
    url: "https://www.youtube.com/watch?v=iRvguQZMess",
  },
];
export const EthernautItems = [
  {
    id: 1,
    title: "#1 - Fallback",
    category: "breakfast",
    img: "./images/1.jpg",
    url: "https://www.youtube.com/watch?v=2F3oSMhyFvU",
  },
  {
    id: 2,
    title: "#2 - Fallout",
    category: "breakfast",
    img: "./images/2.jpg",
    url: "https://www.youtube.com/watch?v=FRKZOovhDmc",
  },
  {
    id: 3,
    title: "#3 - Coin Flip",
    category: "breakfast",
    img: "./images/3.jpg",
    url: "https://www.youtube.com/watch?v=yObIBMRZHB0",
  },
  {
    id: 4,
    title: "#4 - Telephone",
    category: "breakfast",
    img: "./images/4.jpg",
    url: "https://www.youtube.com/watch?v=u3RsQ-s1nHk",
  },
  {
    id: 5,
    title: "#5 - Token",
    category: "breakfast",
    img: "./images/5.jpg",
    url: "https://www.youtube.com/watch?v=coVD3FjTDSI",
  },
  {
    id: 6,
    title: "#6 - Delegation",
    category: "breakfast",
    img: "./images/6.jpg",
    url: "https://www.youtube.com/watch?v=Z7qFyKZwHWk",
  },
  {
    id: 7,
    title: "#7 - Force",
    category: "breakfast",
    img: "./images/7.jpg",
    url: "https://www.youtube.com/watch?v=ECcJDQocKjU",
  },
  {
    id: 8,
    title: "#8 - Vault",
    category: "breakfast",
    img: "./images/8.jpg",
    url: "https://www.youtube.com/watch?v=VRQPMiMNjXs",
  },
  {
    id: 9,
    title: "#9 - King",
    category: "breakfast",
    img: "./images/9.jpg",
    url: "https://www.youtube.com/watch?v=vLtJlrGMEX0",
  },
  {
    id: 10,
    title: "#10 - Re-entrancy",
    category: "breakfast",
    img: "./images/10.jpg",
    url: "https://www.youtube.com/watch?v=9SfkDlxpShY",
  },
  {
    id: 11,
    title: "#11 - Elevator",
    category: "breakfast",
    img: "./images/11.jpg",
    url: "https://www.youtube.com/watch?v=BsO10k2QQVE",
  },
  {
    id: 12,
    title: "#12 - Privacy",
    category: "breakfast",
    img: "./images/12.jpg",
    url: "https://www.youtube.com/watch?v=QIvF7Nf47Fk",
  },
  {
    id: 13,
    title: "#13 - Gatekeeper",
    category: "breakfast",
    img: "./images/13.jpg",
    url: "https://www.youtube.com/watch?v=cU0mKVi1UYw",
  },
  {
    id: 14,
    title: "#14 - Gatekeeper Two",
    category: "breakfast",
    img: "./images/14.jpg",
    url: "https://www.youtube.com/watch?v=geJJxXuTNWA",
  },
  {
    id: 15,
    title: "#15 - Naught Coin",
    category: "breakfast",
    img: "./images/15.jpg",
    url: "https://www.youtube.com/watch?v=NAyFqs7W5zk",
  },
  {
    id: 16,
    title: "#16 - Preservation",
    category: "breakfast",
    img: "./images/16.jpg",
    url: "https://www.youtube.com/watch?v=E4C2NmkONB8",
  },
  {
    id: 17,
    title: "#17 - Recovery",
    category: "breakfast",
    img: "./images/17.jpg",
    url: "https://www.youtube.com/watch?v=od0plniWOPM",
  },
  {
    id: 18,
    title: "#18 - MagicNumber",
    category: "breakfast",
    img: "./images/18.jpg",
    url: "https://www.youtube.com/watch?v=0A_EUtlhK3s",
  },
  {
    id: 19,
    title: "#19 - Alien Codex",
    category: "breakfast",
    img: "./images/19.jpg",
    url: "https://www.youtube.com/watch?v=wQvm4XDggQQ",
  },
  {
    id: 20,
    title: "#20 - Denial",
    category: "breakfast",
    img: "./images/20.jpg",
    url: "https://www.youtube.com/watch?v=5jL4CEnsjhA",
  },
  {
    id: 21,
    title: "#21 - Shop",
    category: "breakfast",
    img: "./images/21.jpg",
    url: "https://www.youtube.com/watch?v=bUlLdCMOFFY",
  },
  {
    id: 22,
    title: "#22 - Dex",
    category: "breakfast",
    img: "./images/22.jpg",
    url: "https://www.youtube.com/watch?v=Ra4RokCT2jo",
  },
  {
    id: 23,
    title: "#23 - Dex 2",
    category: "breakfast",
    img: "./images/23.jpg",
    url: "https://www.youtube.com/watch?v=zTkhVLje67o",
  },
  {
    id: 24,
    title: "#24 - Puzzle Wallet",
    category: "breakfast",
    img: "./images/24.jpg",
    url: "https://www.youtube.com/watch?v=XiwI2vQJ-1E",
  },
  {
    id: 25,
    title: "#25 - Motorbike",
    category: "breakfast",
    img: "./images/25.jpg",
    url: "https://www.youtube.com/watch?v=2_YeHaMTYpY",
  },
  {
    id: 26,
    title: "#27 - Good Samaritan",
    category: "breakfast",
    img: "./images/27.jpg",
    url: "https://www.youtube.com/watch?v=4d0qO8IYN8Q",
  },
];
export const MediumItems = [
  {
    id: 1,
    title: "Solidity Roadmap 2023",
    category: "breakfast",
    img: "./images/1.jpg",
    desc: "The main terms , titles and road to learn Solidity in 2023.",
    url: "https://medium.com/gs-developer-community/solidity-roadmap-2023-f9c43c659452?source=collection_home---4------0-----------------------",
  },
  {
    id: 2,
    title: "Yapay Zeka Grafik Tasarımı Öldürür Mü?",
    category: "breakfast",
    img: "./images/1.jpg",
    desc: "Yapay Zeka (AI) Nedir?",
    url: "https://medium.com/gs-developer-community/yapay-zek%C3%A2-grafik-tasar%C4%B1m%C4%B1-%C3%B6ld%C3%BCr%C3%BCr-m%C3%BC-a883e294d72a?source=collection_home---4------1-----------------------",
  },
  {
    id: 3,
    title: "Ada Lovelace",
    category: "breakfast",
    img: "./images/1.jpg",
    desc: "Ilk bilgisayar programlamacisi Augusta Ada Byron 1815'in sonlarında, Londra’da doğdu.Pratikte babasını hiç tanımamış olan, Ada her zaman…",
    url: "https://medium.com/gs-developer-community/ada-lovelace-dd2d516fb6d9?source=collection_home---4------2-----------------------",
  },
  {
    id: 4,
    title: "Zero Knowledge Proof Kullanım Alanları",
    category: "breakfast",
    img: "./images/1.jpg",
    desc: "Günümüzde neredeyse tüm insanlık internet üzerinde zaman geçiriyor. Her gün milyarlarca veri üretiliyor ve tüketiliyor. Bu verilerin büyük…",
    url: "https://medium.com/gs-developer-community/zero-knowledge-proof-kullan%C4%B1m-alanlar%C4%B1-21bb879ca816?source=collection_home---4------3-----------------------",
  },
  {
    id: 5,
    title: "Sağlık alanında Blok Zinciri teknolojileri",
    category: "breakfast",
    img: "./images/1.jpg",
    desc: "Blok zinciri teknolojisi (blockchain) bir süredir hayatımızda yer alıyor. Peki sağlık alanında block zinciri nasıl kullanılıyor?",
    url: "https://medium.com/gs-developer-community/sa%C4%9Fl%C4%B1k-alan%C4%B1nda-blok-zinciri-teknolojileri-edf9b7dfd55d?source=collection_home---4------4-----------------------",
  },
  {
    id: 6,
    title: "Setting Full Development Environment For Solidity",
    category: "breakfast",
    img: "./images/1.jpg",
    desc: "Selam everyone. In every coding language seting up the environment is one of the hardest steps. However for Solidity maybe its the hardest…",
    url: "https://medium.com/gs-developer-community/setting-full-development-environment-for-solidity-4e6c85650d8e?source=collection_home---4------5-----------------------",
  },
  {
    id: 7,
    title: "Solidity Tüm Geliştirme Ortamının Hazırlanması",
    category: "breakfast",
    img: "./images/1.jpg",
    desc: "Selamlar herkese. Hangi kodlama dilinde olursa olsun geliştirme ortamının hazırlanması zor ve önemli bir süreçtir. Ancak konu Solidity’ye…",
    url: "https://medium.com/gs-developer-community/solidity-t%C3%BCm-geli%C5%9Ftirme-ortam%C4%B1n%C4%B1n-haz%C4%B1rlanmas%C4%B1-83da172193ea?source=collection_home---4------6-----------------------",
  },
];
export default menu;
