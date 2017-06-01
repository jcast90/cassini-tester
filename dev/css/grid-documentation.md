Cassini is an easy to use basic responsive grid system. To use, you must first include the cassini.css file in your HTML like so:
<link href="your_folder/cassini.css" rel="stylesheet"/>

After including this link you are able to start using the classes that will make your site responsive!!
The first and most important class to include is the ".grid" class to your wrapping div element. This will allow
the rest of the components to be properly aligned and be nice and responsive for you, no matter what device you are on.

The cool thing about Cassini is you can choose how you want your grid to look. You can do a basic grid system that has
equal columns or you can use a masonry system.

To use the basic grid system you will have to tell the wrapping div how many columns you want in your row. Next you would
have to include your grid element. You will need to have the same number of grid elements as you specify in your wrapping div.

For example, if you wanted your row to have 2 columns in it, your div would look something like this:

<div class="grid">
    <div class="two-col-grid">
        <div class="grid-element"></div>
        <div class="grid-element"></div>
    </div>
</div>

If you wanted your next row to have 5 columns it would look something like this:

<div class="grid">
    <div class="two-col-grid">
        <div class="grid-element"></div>
        <div class="grid-element"></div>
    </div>
    <div class="five-col-grid">
        <div class="grid-element"></div>
        <div class="grid-element"></div>
        <div class="grid-element"></div>
        <div class="grid-element"></div>
        <div class="grid-element"></div>
    </div>
</div>

These will then resize based on the device you are using, we already took care of that part, no worries.

Now, if you want to be a bit more adventurous and use a masonry system it you would use the "span-[number of columns to span]" class.
For this class, you have to wrap each row in a ".grid" class. Also, keep in mind the numbers have to add up to 12.
If you wanted to make a grid that hey 3 unequal columns, you would do something like this:

<div class="grid">
    <div class="span-2">
    <div class="span-8">
    <div class="span-2">
</div>

The class ".span-2" would span 2 columns and the class ".span-8" would span 8 columns. If you wanted your next row to have
4 columns you could do something like this.
<div class="grid">
    <div class="span-2">
    <div class="span-8">
    <div class="span-2">
</div>
<div class="grid">
    <div class="span-2">
    <div class="span-3">
    <div class="span-3">
    <div class="span-4">
</div>

If you wanted some of your columns on your site to be equal widths and some to be masonry you can do a combination of the two systems.
<div class="grid">
    <div class="two-col-grid">
        <div class="grid-element"></div>
        <div class="grid-element"></div>
    </div>
    <div class="five-col-grid">
        <div class="grid-element"></div>
        <div class="grid-element"></div>
        <div class="grid-element"></div>
        <div class="grid-element"></div>
        <div class="grid-element"></div>
    </div>
</div>

<div class="grid">
    <div class="span-2">
    <div class="span-3">
    <div class="span-3">
    <div class="span-4">
</div>

!IMPORTANT! You can't mix the two systems, this example would not work!
<div class="five-col-grid">
    <div class="grid-element"></div>
    <div class="grid-element"></div>
    <div class="grid-element"></div>
    <div class="span-2"></div>
</div>

<div class="span-1"></div>
<div class="span-2"></div>
<div class="span-3"></div>
<div class="span-4"></div>
<div class="span-5"></div>
<div class="span-6"></div>
<div class="span-7"></div>
<div class="span-8"></div>
<div class="span-9"></div>
<div class="span-10"></div>
<div class="span-11"></div>
<div class="span-12"></div>

To save you time on design, we went ahead and made you some cool css components. One of our recommended components is the responsive navigation bar.
To use this this fancy, sleek navigation all you have to do is include the class "nav-bar" and the id of "responsive-nav" in your <nav> tag.
You would then create your nav-menu by using an unordered list style of formatting. If you have a logo you would like to insert,
just include it in an <a> tag outside of your first <li> element. Then add the class "responsive-logo" and it will be all good to go!
Also, add an <a> tag after your last <li> element and give it a class of "icon". You can then insert whatever icon you would like to use.

<nav class="nav-bar " id="responsive-nav">
    <ul>
        <a href=""><img class="responsive-logo" src="http://www.logodesignlove.com/images/negative/wwf-logo-design.jpg" alt=""> </a>
        <li><a href="#">Some menu item1</a></li>
        <li><a href="#">Some menu item2</a></li>
        <li><a href="#">Some menu item3</a></li>
        <li><a href="#">Some menu item4</a></li>
        <li><a href="#">Some menu item5</a></li>
       <a href="#" class="icon" >&#9776;</a>
    </ul>

</nav>



If you have sub-menu items you just need to add the class "dropdown" and then nest an <a> tag with the class "dropbtn".
Next you must nest another unordered list and give the <ul> tag a class of "dropdown-content". Here is an example of what your code would look like:


<nav class="nav-bar " id="responsive-nav">
    <ul>
        <a href="#"><img class="responsive-logo" src="http://www.logodesignlove.com/images/negative/wwf-logo-design.jpg" alt=""> </a>
        <li><a href="#">Some menu item1</a></li>
        <li class="dropdown">
            <a href="#" class="dropbtn">dropdown</a>
            <ul class="dropdown-content">
                <li><a href="#">some thin</a></li>
                <li><a href="#">some text</a></li>
                <li><a href="#">some text</a></li>
            </ul>
        </li>
        <li><a href="#">Some menu item3</a></li>
        <li><a href="#">Some menu item4</a></li>
        <li><a href="#">Some menu item5</a></li>
       <a href="#" class="icon" >&#9776;</a>
    </ul>
</nav>

Not only is it mobile friendly but we have a couple of different styles.
For a retro Neon looking menu add the class "neon" to your <ul> tag.
For a dark menu theme add the class "dark" to your <ul> tag.
For a centered menu add the class "center" to your <ul> tag.


One of the few plugins we included is a sticky navigation. This is a super easy plugin to use. All you have to do is download the file
copy and paste the sticky_nav.js file into your js folder and link it to the page you want to use it on, like so:
<script src="js/sticky_nav.js"></script>

Once you have that file in there you are good to go!


