import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  console.log(minutes);
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);

  const coffeeEmojis = "☕️".repeat(coffeeCups);
  const bentoEmojis = "🍱".repeat(bentoBoxes);

  const emojis = minutes < 30 ? coffeeEmojis : bentoEmojis;

  return (
    <article>
      <h3>{title}</h3>
      <small>{`${date} • `}</small>
      <small>{`${emojis} ${minutes} min read`}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
