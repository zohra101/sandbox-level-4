// USE DEFAULT IMPORTS (INSTEAD OF NAMED IMPORTS) FOR ASSETS
import React from "react";
import arch from "../../assets/images/arch.jpeg";
import cevapi from "../../assets/images/cevapi.jpg";
import yoga from "../../assets/images/yogapier.jpeg";

export function Carousel() {
	return (
		<div
			id="testCarousel"
			className="carousel slide">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#testCarousel"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"></button>
				<button
					type="button"
					data-bs-target="#testCarousel"
					data-bs-slide-to="1"
					aria-label="Slide 2"></button>
				<button
					type="button"
					data-bs-target="#testCarousel"
					data-bs-slide-to="2"
					aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src={cevapi}
						className="d-block w-100"
						alt="cevapi"
					/>
				</div>
				<div className="carousel-item">
					<img
						src={yoga}
						className="d-block w-100"
						alt="yoga"
					/>
				</div>
				<div className="carousel-item">
					<img
						src={arch}
						className="d-block w-100"
						alt="arch"
					/>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#testCarousel"
				data-bs-slide="prev">
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#testCarousel"
				data-bs-slide="next">
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
