1. What does git clean do?
   Answer: `Cleans the working tree by recursively removing files that are not under version control, starting from the current directory.`

2. What do the -d and -f flags for git clean do?
   Answer: `-d Normally, when no <path> is specified, git clean will not recurse into untracked directories to avoid removing too much. -f If the Git configuration variable clean.requireForce is not set to false, git clean will refuse to delete files or directories unless given -f or -i.`

3. What git command creates a branch?
   Answer: `git branch <branch name>`

4. What is the difference between a fast-forward and recursive merge?
   Answer: `A fast-forward merge can occur when there is a linear path from the current branch tip to the target branch. Recursive is the default merge strategy when pulling or merging one branch.`

5. What git command changes to another branch?
   Answer: `git checkout <branch name>`

6. How do you remove modified or deleted files from the working directory?
   Answer: `git rm`

7. What git command deletes a branch?
   Answer: `git branch -d <branch name>`

8. What does the git diff command do?
   Answer: `Show changes between commits, commit and working tree, etc.`

9. How do you remove files from the staging area?
   Answer: `git reset HEAD <file-name>`

10. How do merge conflicts happen?
    Answer: `Merge conflicts can happen when merging a branch, and rebasing a branch`
