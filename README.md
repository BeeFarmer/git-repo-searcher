# Git Repository Searcher

This project allows users to search for github repository based on user name and it has been deployed to gh-pages on this link https://beefarmer.github.io/git-repo-searcher/. Making too many searching requests from one IP may cause error since Github api source has rate limit. Though with proper authentication the limit could be expanded, I had to comment out the authentication because it's considered as a bad practice while pushing personal OAuth to the repo.

## Screenshots

![screenshot1](https://github.com/BeeFarmer/git-repo-searcher/blob/master/src/screenshots/1.png)
![screenshot2](https://github.com/BeeFarmer/git-repo-searcher/blob/master/src/screenshots/2.png)
![screenshot3](https://github.com/BeeFarmer/git-repo-searcher/blob/master/src/screenshots/3.png)
![screenshot4](https://github.com/BeeFarmer/git-repo-searcher/blob/master/src/screenshots/4.png)

![unit_test](https://github.com/BeeFarmer/git-repo-searcher/blob/master/src/screenshots/unit_tests.png)

## Highlights

* use react memo and local cache (for api response) for some components to enhance performance
```javascript
export default memo(RepoList)
```
```javascript
// check whether the current search term is in cache
if (this.cache.hasOwnProperty(lowerCaseKey)) {
  this.setState({
    userInfo: this.cache[lowerCaseKey],
    hasError: false,
  })
  return
}
```
* import Enzyme and Jest as the testing tool for code coverage
```javascript
describe('RepoListCard Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <RepoListCard
        userName="mockName"
        userAvatar="mockAvatar"
        userRepos={mockUserRepos}
      />
    )
  })

  it('should render', () => {   
    expect(wrapper).toBeDefined
  })
  ...
 })
```
* separate index, style and test files based on components for a more managable code structure
* set up typechecking in each component with react propTypes
```javascript
RepoList.propTypes = {
  userInfo: arrayOf(
    shape({
      login: string,
      avatarUrl: string,
      repos: array,
    })
  ).isRequired,
}
```

## TODO
As I was working on this project, I noticed some problems with the current design and potential improvements.

### Enable pagination and lazy-load(?) for large amount search results
When searching on some general keywords, the api calls may return a giant response back. Without proper pagination, the user would need to scroll all the way down to locate specific user's info. It would be more friendly for users to see the total results number and with help of pagination, they can choose to jump to specific page and searching or be more specific on the search term for a more detailed result list.

For the same scenario, I will do some research to see if I can modify my query to fetch result based on user's current page. There is definitely no need to load hundreds of results if the users can find what they are looking for on the first page. A new api call for x-th page will be invoked when user redirects to x-th page.

### Apply BEM naming convention and CSS Preprocessor (SCSS)
I will also try to import CSS Preprocessor and formalize the class name for different components with BEM naming convention to handle style change more gracefully. For instance, adding a dark mode feature to the application will simple require root component to pass down the selected mode using React Context API and components will adjust class names within by adding proper modifier (some-class-name--dark).
