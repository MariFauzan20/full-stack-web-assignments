const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (username) => {
  try {
    const user = await fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
    });
    const jsonUser = await user.json();
    const data = await jsonUser;

    return data;
  } catch (err) {
    console.log(err);
  }
};

elFormUsername.onsubmit = async (e) => {
  e.preventDefault();

  let username = elFormUsername.firstElementChild.value;
  let user = await getGitHubUser(username);

  if (!user.login) {
    elCardImg.classList.add("d-none");
    elCardBtn.classList.add("d-none");

    elCardTitle.innerText = `Not Found`;

    return elCard;
  } else {
    elCardImg.classList.remove("d-none");
    elCard.classList.remove("d-none");
    elCardBtn.classList.remove("d-none");

    elCardTitle.innerText = user.login;
    elCardImg.src = user.avatar_url;
    elCardBtn.href = user.html_url;
    elFormUsername.firstElementChild.value = "";

    return elCard;
  }
};
