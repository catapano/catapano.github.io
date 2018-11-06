# Readme


To edit the website:

If you have deleted the folder containing the website:

1. Open a terminal (`cmd` + `space`, "terminal")
2. Navigate to where you want to save the website:
1. Use `ls` to see whats in your current directory
2. us `cd directory_name` to change to the directory
3.  and then use the command:

```
git clone https://github.com/catapano/catapano.github.io.git
```

This will download the website. You can then use

```
cd catapano.github.io
```

to enter the directory.

### Making Changes 

You can now make any changes you wish to the .md files. Do not edit files in the `_site` directory, as they are automatically generated. (When it says lots of scary text just ignore it).

Once your changes are complete, save all of the files you modified, and then run this series of commands:

```
git add .
git commit -m "Add a message here describing what you did"
git push origin master
```

The changes will upload to github, and should be live in a few minutes.

### Viewing the Website Locally

If you wand to see how your changes impact the website before it goes online, use terminal to enter the directory and then run:

```
bundle exec jekyll serve
```

Once that command is running open a browser and navigate to `localhost:4000`

Any changes you make to files should update immediately upon refresh.