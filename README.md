# github-comparator

Github Comparator allows users to search for Github profiles and view profile ifnormation such as: the user's repos, stargazers, followers, following, etc. User's can select a repo listed on the profile and then are redirected to a page which contains information regarding that repo such as: languages used, date created, date of last update, stargazers, forks, watchers, etc.

### Comparator
While Github Comparator allows users to search for profiles and view repo details, there are also many other applications that accomplish that same thing. So what Github Comparator does differently is it also allows users to **compare** profiles using what I called the
**Comparator**. Comparator will look at both users' overall profile stats and performs a comparison of the two. Upon completeion
of comparing, Comparator will declare a winner between the two users. In the event of profiles having an equal score, a tie will be decalred.

###Installation & Usage
1. Clone this repo
2. If you don't have the ```http-server``` npm package already, install it globally
    
    ```npm install http-server -g```
3. ```cd``` into the directory where you are keeping the project
4. Run ```http-server``` from the command line
5. Navigate to the address it provides in the terminal
