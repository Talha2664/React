const Object = () => {

  // simple JavaScript object
  const obj = {
    name: "talha",
    age: 23,
    city: "gujranwala"
  };

  // convert object → string and save in localStorage
  localStorage.setItem("Object", JSON.stringify(obj));

  // get item back (it comes as string)
  let objResult = JSON.parse(localStorage.getItem("Object"));

  // now objResult is a real object again
  console.log(objResult);

  return <div></div>;
};

export default Object;
