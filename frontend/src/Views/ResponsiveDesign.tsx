import React, { useEffect } from "react";
import { NavbarActive } from "./NavbarActive";
import "./ResponsiveDesign.scss";

export function ResponsiveDesign() {
	useEffect(componentDidMount, []);

	return (
		<>
			<header>
				<NavbarActive />
			</header>
			<main
				id="mainResponsiveDesign"
				className="m-4"
			>
				<h1 className="pb-4">Responsive Web Design</h1>
				<h3>Responsive Bootstrap Rows</h3>
				<ul>
					<li>
						Bootstrap can automatically manage rows based on screen width.
					</li>
					<li>Columns spread out evenly to fill the space.</li>
				</ul>
				<div className="container"></div>
				<div className="row p-3">
					<div className="col">COLUMN1</div>
					<div className="col">COLUMN2</div>
					<div className="col">COLUMN3</div>
					<div className="col">COLUMN4</div>
					<div className="col">COLUMN5</div>
					<div className="col">COLUMN6</div>
					<div className="col">COLUMN7</div>
					<div className="col">COLUMN8</div>
					<div className="col">COLUMN9</div>
					<div className="col">COLUMN10</div>
					<div className="col">COLUMN11</div>
					<div className="col">COLUMN12</div>
					<div className="col">COLUMN13</div>
					<div className="col">COLUMN14</div>
					<div className="col">COLUMN15</div>
				</div>
				<h3>Custom Row Size</h3>
				<ul>
					<li>
						The max number of columns per row can be manually specified from 1
						to 6.
					</li>
					<li>
						The number of columns do not change when the screen is resized.
					</li>
				</ul>
				<div className="container"></div>
				<div className="row p-3 row-cols-6">
					<div className="col">COLUMN1</div>
					<div className="col">COLUMN2</div>
					<div className="col">COLUMN3</div>
					<div className="col">COLUMN4</div>
					<div className="col">COLUMN5</div>
					<div className="col">COLUMN6</div>
					<div className="col">COLUMN7</div>
					<div className="col">COLUMN8</div>
					<div className="col">COLUMN9</div>
					<div className="col">COLUMN10</div>
					<div className="col">COLUMN11</div>
					<div className="col">COLUMN12</div>
					<div className="col">COLUMN13</div>
					<div className="col">COLUMN14</div>
					<div className="col">COLUMN15</div>
				</div>
				<h3>Mobile Row Size</h3>
				<ul>
					<li>The number of columns for small mobile devices only.</li>
					<li>Doesn't add more columns for larger screens.</li>
				</ul>
				<div className="container"></div>
				<div className="row p-3">
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
					<div className="col col-1">col-1</div>
				</div>
				<h3>Responsive Rows</h3>
				<ul>
					<li>Specify the max number of columns based on breakpoints.</li>
					<li>
						The columns change for mobile-first, small, and large devices.
					</li>
				</ul>
				<div className="container"></div>
				<div className="row p-3 row-cols-2 row-cols-sm-3 row cols=lg-4">
					<div className="col">COLUMN1</div>
					<div className="col">COLUMN2</div>
					<div className="col">COLUMN3</div>
					<div className="col">COLUMN4</div>
					<div className="col">COLUMN5</div>
					<div className="col">COLUMN6</div>
					<div className="col">COLUMN7</div>
					<div className="col">COLUMN8</div>
					<div className="col">COLUMN9</div>
					<div className="col">COLUMN10</div>
					<div className="col">COLUMN11</div>
					<div className="col">COLUMN12</div>
					<div className="col">COLUMN13</div>
					<div className="col">COLUMN14</div>
					<div className="col">COLUMN15</div>
				</div>
				<h3>Custom Column Sizes</h3>
				<ul>
					<li>
						The column grid supports up to 12 columns. Column width can be
						specified with 1 to 12. To exceed 6 row columns, specify the size of
						each column.
					</li>
					<li>Columns spread out to their specified width.</li>
				</ul>
				<div className="container"></div>
				<div className="row p-3">
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
					<div className="col-1">col-1</div>
				</div>
				<div className="row p-3">
					<div className="col-2">col-2</div>
					<div className="col-3">col-3</div>
					<div className="col-5">col-5</div>
					<div className="col-2">col-2</div>
				</div>
				<h3>Mobile Column Sizes</h3>
				<ul>
					<li>
						The column widths for mobile devices only. Rows are automatically
						created when widths exceed 12.
					</li>
					<li>The columns don't change when resizing the screen.</li>
				</ul>
				<div className="container"></div>
				<div className="row p-3 ">
					<div className="col-6">col-6</div>
					<div className="col-6">col-6</div>
					<div className="col-6">col-6</div>
					<div className="col-6">col-6</div>
					<div className="col-4">col-4</div>
					<div className="col-4">col-4</div>
					<div className="col-4">col-4</div>
					<div className="col-6">col-6</div>
					<div className="col-6">col-6</div>
					<div className="col-4">col-4</div>
					<div className="col-4">col-4</div>
					<div className="col-4">col-4</div>
				</div>
				<h3>Responsive Columns</h3>
				<ul>
					<li>Specify the column widths based on screen sizes.</li>
					<li>
						The columns rearrange on mobile, medium, and extra large screen
						sizes.
					</li>
				</ul>
				<div className="container"></div>
				<div className="row p-3">
					<div className="col-6 col-md-4 col-lg-3">col-6 col-md-4 col-lg-3</div>
					<div className="col-6 col-md-4 col-lg-3">col-6 col-md-4 col-lg-3</div>
					<div className="col-6 col-md-4 col-lg-3">col-6 col-md-4 col-lg-3</div>
					<div className="col-6 col-md-4 col-lg-3">col-6 col-md-4 col-lg-3</div>
					<div className="col-4 col-md-4 col-lg-3">col-4 col-md-4 col-lg-3</div>
					<div className="col-4 col-md-4 col-lg-3">col-4 col-md-4 col-lg-3</div>
					<div className="col-4 col-md-4 col-lg-3">col-4 col-md-4 col-lg-3</div>
					<div className="col-6 col-md-4 col-lg-3">col-6 col-md-4 col-lg-3</div>
					<div className="col-6 col-md-4 col-lg-4">col-6 col-md-4 col-lg-4</div>
					<div className="col-4 col-md-6 col-lg-4">col-4 col-md-6 col-lg-4</div>
					<div className="col-4 col-md-6 col-lg-4">col-4 col-md-6 col-lg-4</div>
					<div className="col-4 col-md-12 col-lg-4">
						col-4 col-md-12 col-lg-4
					</div>
				</div>
			</main>
		</>
	);
}

function componentDidMount() {
	// document.getElementById("titleTag");
	// titleTag.innerHTML = "Responsive Design";
	document.title = "React - Responsive Design";

	// const midEastImageTooltip = document.getElementById("midEastImage");
	// new bootstrap.Tooltip(midEastImageTooltip);
}
