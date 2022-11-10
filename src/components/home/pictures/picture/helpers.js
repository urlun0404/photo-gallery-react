const downloadPhoto = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response);
    const buffer = await response.arrayBuffer();
    const urlParser = new URL(url);
    const fileName = urlParser.pathname.split('/').pop();
    const blobURL = window.URL.createObjectURL(
      new Blob([buffer], { type: 'application/jpeg' }),
    );
    const link = document.createElement('a');
    link.href = blobURL;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error(err);
  }
};
