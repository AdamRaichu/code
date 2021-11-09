var user = localStorage.getItem("user")
if (user !== null) {
  console.log("%cWelcome " + user, "color: darkblue")
} else {
  console.log("You can set a user at adamraichu.github.io/code/user although this is not required.")
}
