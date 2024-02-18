export const formatDate = (data) => {
  const hours = new Date(data).getHours();
  const minutes = new Date(data).getMinutes();
  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
};

export const download = (evt, originalImage) => {
  evt.preventDefault();
  try {
    fetch(originalImage)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;

        const nameSplit = originalImage.split("/");
        const duplicateName = nameSplit.pop();

        a.download = "" + duplicateName + "";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(URL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};
