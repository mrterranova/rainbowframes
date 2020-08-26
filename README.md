#  What is Rainbow Frames?

If you are looking for a great outline theme to border your images, cards, divs, etc., then you've come to the right place. We have a list of themes that might be exactly what you are looking for to border your images!

# How to Install

`npm i rainbowframes --save`
or 
`yarn i rainbowframes --save`

Then...
...
import { rainbowframes } from 'rainbowframes'; 

rainbowframes({
    theme_border: `ocean`, 
    size: `medium`, 
    sundial:  `none`,
    padding: false
}); 
...

# What's Available? 

Rainbowframes currently supports a variety of themes, frame sizes, shadow options, and padding.

## Themes available

   - theme_border : `ocean`

    ![Ocean](/images/Ocean.png)

   - theme_border : `christmas`

    ![Christmas](/images/Christmas.png)

   - theme_border : `eastereggs`

    ![Easter](/images/EasterEggs.png)

   - theme_border: `halloween`

    ![Halloween](/images/Halloween.png)

   - theme_border: `valentine`

    ![Valentines](/images/Valentines.png)

   - theme_border: `newyear`

    ![New Years](/images/NewYear.png)

## Size of the frame are based on t-shirt sizes

   - default is `medium` which is 20px;

   - size: `x-small` which is 3px;

    - size: `small` which is 10px;

    - size: `large` which is 30px;

    - size: `x-large` which is 40px;

## Shadow options under the image are based on the time of the day. 

    - sundial:  `none` is the default

    ### Other Options Available...
    - sunrise 
    - morning
    - noon
    - afternoon
    - evening

## Padding 

    true or false are currently the only available options.