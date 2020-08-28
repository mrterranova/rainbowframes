# Contributing to Rainbow Frames

### Add you name to the list of Contributors.md
- add your name and your github if you are contributing. 
- please add your name to the next available space
- only modify one line in this file.

### How to Contribute
- contributions can be made to any documentation or they can be made in the index.js file. 
- if you are contributing to the documentation, then make sure that your pull request states so.
- if you are adding a feature to the index.js file, make sure that you place your feature in the list above.

### Adding a feature
- Feel free to come up with your own border colors and unique name. 
- To do this you can either modify one of the arrays with the colors you want or you can make a completely new array with more or less colors, acutal images, etc.. 
- However, make sure that you have three items in the array for it to currently work. So if you want only one frame, then copy it two extra times in the same array to get three.

_Example_
   ![New Years](/images/example1frame.PNG)

- Comment in the 5 images under `<!-- test with css -->` to use the CSS and create your own unique frames.
- The CSS file will include a class tag with labels testing-1, testing-2, testing-3. You can either erase/update this to test with, or you can make your own 3 class below. It's up to you which ever you prefer. 
- when you get something you like then add another array in _rainbowframes>index.js_.Remember to include both the array with your style and the if statement so that it can parse out the style to all images with the tag rainbowframes. 
- Come up with a fun name for your frames as well!

### Testing your work before submitting
- make sure to include whether you have tested or not tested your work on your pr.
- install as per normal with `npm install` 
- for checking your work on index.js in the main file _rainbowframes_ then install parcel using the command `npm i parcel -g`. This should give you a dist folder with the necessary set up
- from there you need to `parcel index.html` to see it running on localhost:1234.

### Pull Requests Must Include
- What you have added specifically ie. name to contributor list, feature/new frame, etc
- Whether you tested it: ie. feature has been tested, feature needs to be tested, bug fixed in file ___ , N/A (documentation), etc

### Code of conduct for any pull request
Before you do a pull request, take a look at the <a href='./CODE_OF_CONDUCT.md'>code of conduct</a> before making any contribution.

