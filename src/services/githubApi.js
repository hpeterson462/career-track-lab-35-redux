// export const getGithub = (users) => {
//   return fetch(`https://api.github.com/users/${users}`)
//     .then(res => res.json())
//     .then(json => ({
//       login: json.login,
//       name: json.name,
//       followers_url: json.followers_url,
//       following_url: json.following_url,
//       html_url: json.html_url
//     }))
//     .then(fetch(`https://api.github.com/users/${users}/repos`))
//     .then(res => res.json())
//     .then(json => ({
//       name: json.name
//     }))
// };

export const getGithub = async (users) => {
  const userFetch = await fetch(`https://api.github.com/users/${users}`);
  const reposFetch = await fetch(`https://api.github.com/users/${users}/repos`);

  if (!userFetch.ok) return ('Failed fetch');
  if (!reposFetch.ok) return ('Failed fetch');

  const userData = await userFetch.json();
  const reposData = await reposFetch.json();

  const parsedUserData = {
    login: userData.login,
    name: userData.name,
    followers_url: userData.followers_url,
    following_url: userData.following_url,
    html_url: userData.html_url
  }

  const parsedReposData = [{ name: reposData.name }];

  const userInfo = {
    parsedUserData,
    parsedReposData
  }

  return userInfo;
}
