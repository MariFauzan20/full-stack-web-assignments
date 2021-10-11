const getGitHubUser = async (username) => {
  try {
    if (username == "") {
      return null;
    }

    const res = await fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
    });
    let user = await res.json();

    return user;
  } catch (error) {
    console.log(error);
  }

  return "not found";
};

const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
};

printGitHubUser();
