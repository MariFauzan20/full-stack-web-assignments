1. What is the difference between git reset and git revert. When would you use one over the other?
   Answer: `git reset, Reset current HEAD to the specified state. git revert, Revert some existing commits`

2. What is the difference between git merge and git rebase. When would you use one over the other?
   Answer: `git merge, Join two or more development histories together. git rebase, Reapply commits on top of another base tip`

3. What is the difference between git stash pop and git stash apply. When would you use one over the other?
   Answer: `git stash pop, Remove a single stashed state from the stash list and apply it on top of the current working tree state. git stash apply, Like pop, but do not remove the state from the stash list.`

4. What kinds of things can you do in interactive mode when rebasing?
   Answer: ` p, pick -> use commit r, reword -> edit commit s, squash -> edit and merge previous commits e, edit -> edit and stop changing x, exec -> run another command using shell f, fixup -> same as squash, but clears commit log d, drop -> remove commit`
