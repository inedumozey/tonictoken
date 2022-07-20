import React from "react"

import {
  Section,
  SectionTile,
  SectionSubTile
} from "../../styles/globalStyles"


export default function Index() {
  return (
    <>
      <Section>

        <SectionTile> INTRODUCTION TO THE TONIC ECOSYSTEM.</SectionTile>
        
        <p className="paragraph">
          It is no news that the cryptocurrency industry has taken the world by storm. Over the years cryptocurrencies have become a topic of discussion amongst people of every class and there's never been any asset class which provided nearly equal opportunity to the powerful, weak, rich or poor. It thins the line of social discrimination set by "commodification". In simple words "crypto is distributing power to the people of the world".
        </p>

        <p className="paragraph">
          What happens when a cryptocurrency is truly decentralised, owned by its community? It grows more exponentially with everyone having a feeling of great importance. The tonic ecosystem is set to achieve this. A truly decentralised ecosystem on the binance smart chain for community growth and engagement via dApps that monetize the process of having fun. The first two we intend to build are meme casino and a meme marketplace.
        </p>

        <p className="paragraph">
          We've seen memes that cracked us up real hard and always felt like comedians make money every time they make people laugh why would this creative meme maker not make same?.
        </p>

        <p className="paragraph">
          We are building what we believe would bring opportunity to the doorstep of our investors.
        </p>
        
      </Section>

      <Section>

        <SectionTile> CASINO & MEME MARKETPLACE PLACE. </SectionTile>

        <p style={{marginBottom: '0px'}} className="paragraph">
          We intend to build our casino first before the meme
          market. This is because building a community is our first
          priority hence a casino. Our casino would feature 3
          games at launch;
        </p>

        <ul style={{paddingLeft: '20px'}}>
          <li>Wheel</li>
          <li>Crash</li>
          <li>Charms</li>
        </ul>

        <p style={{marginTop: '0px'}} className="paragraph">
          Additional games would be added at least every 3 months. The casino would also feature an in game staking contract
        </p>

        <p className="paragraph">
          Our marketplace coming later would provide meme creators tools to create memes and se them as NFTs..
        </p>

        <p className="paragraph">
          Part of revenue generated from both platforms always makes it way to the staking pool.
        </p>

      </Section>

      <Section>

        <SectionTile>TOKENOMICS</SectionTile>

        <ul>
          <li>Liquidity 36%</li>
          <li>Development 14%</li>
          <li>Team 9%</li>
          <li>Staking 21%</li>
          <li>Initial casino program 15%</li>
          <li>Charity and advertisement 5%</li>
          <li>Total supply 2T</li>
          <li>Liquidity</li>
        </ul>

        <small>Buyback and burn would happen every quarter.</small>

      </Section>

      <Section>

        <SectionSubTile>CONCLUSION.</SectionSubTile>

        <p className="paragraph">
          This is a beginning for us, we are committed to making our presence felt. Tonic is building a strong and resilient ecosystem for fun and financial inclusion.
        </p>

      </Section>

    </>
  )
}