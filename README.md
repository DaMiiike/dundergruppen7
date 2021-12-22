# dundergruppen7

Gruppuppgift

Waterbottle

===================================================
GIT

Merge - 

    1. Before merging into main: make sure your local Main branch is upp to date with the latest by doing a: git pull from your local Main branch.

    Steps:
    git checkout main
    git pull orgin main

    2. Go back to your working branch then do a git merge main and solve conflicts

    Steps:
    git checkout -your local branch name-
    git merge main

        - solve any conflicts and test the website to make sure it works properly. Then commit any changes you made, then push.

    git commit -m "come up with a explaining message"
    git push

    3. When all conflicts are solved and everything is pushed, head back to Main branch to merge your working branch into Main branch.

    Steps:
    git checkout main
    git merge -your local branch name-

    4. Test the website and make sure it is working properly. Done!


    TLDR: Fix conflicts on your local working branch BEFORE merging into Main branch. By doing so, hopefully it will result in less headache. =)


===================================================
Troubleshooting:



Sass does not work - 

A: Make sure you Sass is installed and check version number by typing: sass --version

Then run "npm run start"

Still doesnt work - 

A: Try re-install sass by typing: npm i "node-sass"

Then make some changes in your sass-file

===================================================
