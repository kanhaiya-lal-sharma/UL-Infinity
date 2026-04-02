
function generateUniqueData() {

  const date = new Date();

  const eno = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

  let phoneNo = "";

  phoneNo = date.getMonth() > 9 ? phoneNo + date.getMonth() : phoneNo + "0" + date.getMonth();

  phoneNo = date.getDate() > 9 ? phoneNo + date.getDate() :
       phoneNo + "0" + date.getDate();

  phoneNo = date.getHours() > 9 ? phoneNo + date.getHours() :
       phoneNo + "0" + date.getHours();

  phoneNo = date.getMinutes() > 9 ? phoneNo + date.getMinutes() :
       phoneNo + "0" + date.getMinutes();

  phoneNo = date.getSeconds() > 9 ? phoneNo + date.getSeconds() :
       phoneNo + "0" + date.getSeconds();

  return { phoneNo, eno };
}

module.exports = { generateUniqueData };