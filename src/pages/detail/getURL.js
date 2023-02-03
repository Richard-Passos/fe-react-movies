function getURL(title) {
  /* Fix title */
  const titleString = JSON.stringify(title);
  let newTitle = "";
  for (let i = 0; i < titleString?.length; i++) {
    const currentSpace = titleString[i];

    if (currentSpace === '"') {
      newTitle += "";
    } else {
      if (currentSpace === " ") {
        newTitle += "+";
      } else {
        newTitle += titleString[i];
      }
    }
  }

  /* Trailer url */
  return `https://www.youtube.com/results?search_query=${newTitle}+trailer+oficial`;
}

export default getURL;
