export const getGithub = () => {
  return fetch(`https://api.github.com/users/:${userId}`)
    .then(res => res.json())
    .then(json => json.results.map(user => ({
      login: user.login,
      name: user.name,
      followers_url: user.followers_url,
      following_url: user.following_url,
      html_url: user.html_url,
      repos_url: user.repos_url
    })));
};
