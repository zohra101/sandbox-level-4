### Bootstrap Carousel
- A slideshow for cycling through images, videos, and other content.
  
1. Connect Bootstrap styles and scripts to `index.html`.
2. Copy a carousel template from `https://getbootstrap.com`.
3. Paste the template into a React component.
4. Fix errors, add assets, and render from a parent component.

### Customize Bootstrap Carousel
- The carousel must have an `id`
- The buttons must have `data-bs-target` that start with `#` and matches the `id`

### Bootstrap Practice
Try different carousel variations
1. Carousel without indicators
2. Carousel with indicators
3. Carousel with captions
4. Carousel with dark controls
5. Crossfading carousel
6. Autoplaying carousel
7. Autoplaying carousel without controls
If you want to add a Bootstrap component to your capstone project,
create a branch for it first.

### Bootstrap Tooltips
`new bootstrap. Tooltip(contentElement);`

- Styled tooltips that pop up when hovering over specific content

   1. Add bootstrap CDN links to `index.html`.
   2. Add the tooltip content to the attribute `data-bs-title`.
   3. Add the tooltip type to the attribute `data-bs-toggle`.
   4. Initialize bs ToolTip in `componentDidMount`.
   5. `const imgTag = document.getElementbyId("pictureName);`
   6. `new bootstrap.Tooltip(imgTag)`
    
              ```js
            function componentDidMount(){
               const imgTag = document.getElementbyId("pictureName");
               new bootstrap.Tooltip(imgTag);
            }
            ````

### Responsive Web Design
- Design your website to change its layout based on the screen size
- On small devices, decrease the number of columns to avoid overcrowding
- On larger devices, increase the number of columns to use the full screen size

CTRL + SHIFT + K to delete a line
SHIFT + ALT + DOWN to copy a line
CTRL + D to select similar text

### Responsive Bootstrap rows
- Bootstrap can automatically manage rows based on screen width
- Columns spread out evenly to fill the space
  
1. Create a basic Bootstrap grid system with 1 row and 15 columns
2. Render it and observe the number of rows
3. Resize dev tools to dynamically change the number of rows

### Custom Row Size
`<div className="row row-cols-3">`
- The max number of columns per row can be manually specified from 1 to 6.
- The number of columns do not change when the screen is resized.
1. Create a basic Bootstrap grid system with 1 row and 15 columns.
2. Specify the max number of columns with a class from `row-cols-1` to `row-cols-6`.
3. Try different values for `row-cols`.
4. Resize dev tools and observe the changes.

### Mobile-first
- Design your site for mobile devices first.
- Scale up for larger devices later.

### Mobile Row Size
`<div className="row row-cols-2">`
- The number of columns for small mobile devices only.
- Doesn't add more columns for larger screens.
  
1. Create a basic Bootstrap grid system with 1 row and 15 columns.
2. Specify the max number of columns for small mobile devices.
3. Observe that the columns don't change when resizing the screen.

### Bootstrap breakpoints
- Bootstrap has some pre-defined sizes based on the screen width.
  
1. `sm` - small - screen width 576px and greater.
2. `md` - medium - screen width 768px and greater.
3. `lg`- large - screen width 992px and greater.
4. `xl` - extra large - screen width 1200px and greater.
5. `xxl` - extra extra large - screen width 1400px and greater.

### Responsive Rows
`<div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4">`
- Specify the max number of columns based on breakpoints.
- The columns change for mobile-first, small, and large devices.

1. Create a basic Bootstrap grid system with 1 row and 15 columns.
2. Specify the max number of columns for mobile devices.
3. Specify the max number `#` of columns for small screens `row-cols-sm-#`.
4. Specify the max number `#` of columns for large screens `row-cols-lg-#`.

### Column Grid
- To exceed 6 row columns, specify the size of each column.
- The column grid supports up to 12 columns.

1.  Create a basic Bootstrap grid system with 1 row and 12 columns.
2.  Specify each column width as col-1.
3.  Observe what happens when the screen is resized.

### Custom Column Sizes
- Column width can be specified with 1 to 12.
- Columns spread out to their specified width. 

1. Create a basic Bootstrap grid system with 1 row and 12 column of `col-1`.
2. Add another row with a set of 4 columns.
3. Specify column widths as `col-2` `col-3` `col-5` `col-2`
4. Observe how the column widths affect column sizes.

### Mobile Column sizes
- The column widths for mobile devices only.
- Rows are automatically created when widths exceed 12.
- The columns don't change when resizing the screen.

1. Create a basic Bootstrap grid system with 1 row and 12 columns.
2.  Specify the width for each column to fit mobile devices(mobile-first).
3.  Observe that rows are automatically created when widths exceed 12.
4. Observe the columns don't change when resizing the screen.

### Responsive Columns
- Specify the column widths based on screen sizes.
- The columns rearrange on mobile, medium and extra large screen sizes.
- Columns do not need to be evenly distributed for each row.

1.  Create a basic Bootstrap grid system with 1 row and 12 columns.
2.  Specify width for each column to fit mobile devices (mobile-first).
3.  Specify width `#` for each column to fit medium screens `col-md-#`.
4.  Specify width `#` for each column to fit extra large screens `col-xl-#`.

### Collapsible navbar
1. Copy and paste into a new component the simple nav (without list) from
`https://getbootstrap.com/docs/5.3/components/navbar/#nav`
2. Add a nav style (like `nav-pills`) to `<nav>` and adjust the breakpoint.
3. Fix errors, change `<a>` to `<NavLink>`, change `href` to `to`, fix paths, and remove active.
4. Optional: remove the navbar brand and the disabled link, or change them back to `<a>`.
​
### Bootstrap Modal
- A dialogue box that pops up when a button is pressed.

1. Connect Bootstrap `styles` and `scripts` to `index.html`.
2. Copy the live demo modal template from `https://getbootstrap.com`.
3. Paste the template into a React component.
4. Fix errors and render from a parent component.

### Bootstrap Icons
1. Get the icons CDN from `https://icons.getbootstrap.com/#install`.
2. Connect the icons CDN to `index.html`.
3. Choose an icon from `https://icons.getbootstrap.com/`.
4. Copy the `<i>` code and paste into a project.
