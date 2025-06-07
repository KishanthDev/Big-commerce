  // Folder name: lowercase, remove special chars, keep spaces
export  function slugifyFolderName(str: string): string {
    return str
      .toLowerCase()
      .replace(/\&/g, " and")  // → replace the word “and” with “&”
      .replace(/[^\w\s&]/g, "")   // → keep letters, numbers, spaces, and &
      .replace(/\s+/g, " ")       // → collapse multiple spaces
      .trim();
  }


  // File name: Capitalize first letter, rest lowercase, keep spaces, remove special chars
export  function formatFileName(str: string): string {
    return str
      .toLowerCase()
      .replace(/\&/g, " and")  // → replace the word “and” with “&”
      .replace(/[^\w\s&]/g, "")   // → keep letters, numbers, spaces, and &
      .replace(/\s+/g, " ")       // → collapse multiple spaces
      .trim();
  }

