import axios from "axios";

const githubToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

const fetchGithub = async (username: string) => {
	try {
		const [userInfoResponse, starsResponse] = await Promise.all([
			axios.get(`https://api.github.com/users/${username}`, {
				headers: {
					Authorization: `token ${githubToken}`,
				},
			}),
			axios.get(`https://api.github.com/users/${username}/starred`, {
				headers: {
					Authorization: `token ${githubToken}`,
				},
			}),
		]);

		return { userInfo: userInfoResponse.data, stars: starsResponse.data };
	} catch (error) {
		throw new Error("Error fetching GitHub user info");
	}
};

export { fetchGithub };
