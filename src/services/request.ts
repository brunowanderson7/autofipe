interface RequestFipe {
  urls: string[];
}

export async function reqFipe({ urls }: RequestFipe) {
  try {
    const responses = await Promise.all(
      urls.map(async url => {
        const response = await fetch(url);
        return response.json();
      })
    );

    console.log(responses);
    return responses;
  } catch (error) {
    console.error(error);
  }
}
