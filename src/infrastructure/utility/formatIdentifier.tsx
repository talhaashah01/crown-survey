const formatIdentifier = (text: string) => {
  // Convert the Identifier to lowercase
  const lowercaseIdentifier = text.toLowerCase();

  // Capitalize the first letter of each word
  const formattedIdentifier = lowercaseIdentifier
    .replace(/_/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());

  return formattedIdentifier;
};

export default formatIdentifier;
