const apiKey = 'tA1XBfdCNn63SJYdG4qze8lCa6dhfr3t';
const requestTest = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

requestTest
  .then(resp => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);

