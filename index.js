// WEB3 Functionality and authenticaton via Moralis.io
Moralis.initialize("Lqss60yyB8ieoEeePZLkFnqjdV6aQWiFuQYCTMhg"); // Application id from moralis.io
Moralis.serverURL = "https://izxlfdhgdzwn.moralis.io:2053/server"; //Server url from moralis.io

// WEB3 Functionality function

async function login() {
  console.log("login clicked");
  var user = await Moralis.Web3.authenticate();
  if (user) {
    console.log(user)
    user.set("nickname", "SATOSHI");
    user.set("fav_color", "blue");
    user.save();
  }

}
