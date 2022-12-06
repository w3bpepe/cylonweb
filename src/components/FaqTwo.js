import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: " ",
    rows: [
        {
            title:
                "What are NFTs and how do they work?",
            content: `NFTs is an acronym for Non-Fungible Tokens.

            Non-Fungible in the sense that they are unique and cannot be interchanged like fungible assets such as Bitcoin. Let’s take for example if you exchange a Bitcoin to get another, nothing changes, you still get the same Bitcoin back — it’s the opposite in the case of NFTs.`,
        },
        {
            title: "What are NFTs used for?",
            content:
                "NFTs can be used to indicate ownership of rare assets which represents real-world items like real estate and artwork.",
        },
        {
            title: "Are NFTs a good investment?",
            content: `NFTs can be categorized under the High Risk, High Reward investment type. The NFT market is fueled by scarcity and desirability which explains the craze people have about them.`,
        },
        {
            title: "Where do you buy NFTs?",
            content: "You must know that NFTs can only be bought with cryptocurrency (mostly with ether or ETH). However, some exchange platforms like Gemini, Kraken, and Coinbase allows user to convert U.S dollars to ether. Some of the best marketplaces where you can buy NFTs include OpenSea, Rarible, LooksRare and Blur",
        },
    ],
};

const styles = {
    bgColor: '#1B2021',
    titleTextColor: "#D2C2C3",
    rowTitleColor: "#D2C2C3",
    rowContentColor: '#D2C2C3',
    arrowColor: "#D2C2C3",
};

export default function FaqTwo() {
    const [rows, setRowsOption] = useState(null);

    return (
        <div className="lowerSection faq">
            <h2 className="faqTitle">FAQ</h2>
            <div className="faq-style-wrapper">
                <Faq 
                data={data} 
                getRowOptions={setRowsOption} 
                styles={styles}
                />
            </div>
        </div>
    );
}