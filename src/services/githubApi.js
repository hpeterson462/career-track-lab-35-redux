export const getGithub = (users) => {
  return fetch(`https://api.github.com/users/${users}`)
    .then(res => res.json())
    .then(json => ({
      login: json.login,
      name: json.name,
      followers_url: json.followers_url,
      following_url: json.following_url,
      html_url: json.html_url,
      repos_url: json.repos_url
    })
    )
};
