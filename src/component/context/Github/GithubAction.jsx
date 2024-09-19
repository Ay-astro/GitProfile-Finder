import axios from 'axios'
const gitHubToken = process.env.REACT_APP_GITHUB_TOKEN;
const gitHubURL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({
    baseURL: gitHubURL,
    headers:  {Authorization: `token ${gitHubToken}`}
})

export const searchUsers = async (text)=>{
    const param = new URLSearchParams({
        q: text
    })
    const response = await github.get(`/search/users?${param}`)
    return response.data.items
}


 // GET SINGLE USER
export const getUserAndRepos = async(login)=>{
    const[user,repos]= await Promise.all([
        github.get(`users/${login}`),
        github.get(`/users/${login}/repos`)
    ])
    return{user:user.data,repos:repos.data}
}