// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend {"Ryan", "Kieran", "Mark"} `shouldBe` {"Ryan", "Mark"}
// If there are no friends return {""}.

// Note: keep the original order of the names in the output.

function friend(friends) {
  //your code here
  const realFriends = [];
  for (const name of friends) {
    if (name.length === 4) {
      realFriends.push(name);
    }
  }
  return realFriends;
}
