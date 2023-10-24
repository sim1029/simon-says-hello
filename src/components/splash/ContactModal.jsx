import React, { useState } from "react";

const ContactModal = () => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const firstName = form.firstName.value;
		const lastName = form.lastName.value;
		const email = form.email.value;
		const message = form.message.value;

		// eslint-disable-next-line no-unused-vars
		const data = {
			firstName,
			lastName,
			email,
			message,
		};

		fetch("/.netlify/functions/email", {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((response) => {
				// Handle response
				// eslint-disable-next-line no-console
				console.log(response);
				// console.log("Form submitted successfully!");
				// Add your own code here to handle the response as needed
				closeModal();
			})
			.catch((error) => {
				// Handle error
				// eslint-disable-next-line no-console
				console.error("Error:", error);
				// Add your own code here to handle errors as needed
			});
	};

	return (
		<div>
			<button
				type="button"
				className="w-32 border-[3px] border-blue bg-blue px-4 py-2 font-bold text-slate-200 hover:border-blue-dark hover:bg-blue-dark dark:border-red dark:bg-red dark:hover:border-red-dark dark:hover:bg-red-dark"
				onClick={openModal}
			>
				Contact Me
			</button>

			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
					<div className="flex w-4/5 flex-col rounded-lg border-4 border-solid border-blue bg-slate-300 duration-300 dark:border-red dark:bg-gray-700 md:w-3/5 lg:w-2/5 lg:border-8">
						<div className="mb-4 flex flex-row items-center justify-between px-4 pt-4">
							<div />
							<h3 className="text-3xl">What&apos;s on your mind?</h3>
							<span onClick={closeModal} className="cursor-pointer text-4xl">
								&times;
							</span>
						</div>
						<form
							onSubmit={handleSubmit}
							className="flex flex-col items-center space-y-4 p-4"
						>
							<div className="flex w-full flex-col items-center space-y-1">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									id="firstName"
									name="firstName"
									required
									className="h-12 w-full rounded-xl border-2 border-slate-300 bg-slate-200 text-gray-800 caret-transparent focus:border-blue focus:outline-none focus:ring-blue dark:border-gray-700 dark:focus:border-red dark:focus:ring-red sm:w-3/4 lg:border-4 2xl:w-1/3"
								/>
								<br />
							</div>

							<div className="flex w-full flex-col items-center space-y-1">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									id="lastName"
									name="lastName"
									required
									className="h-12 w-full rounded-xl border-2 border-slate-300 bg-slate-200 text-gray-800 caret-transparent focus:border-blue focus:outline-none focus:ring-blue dark:border-gray-700 dark:focus:border-red dark:focus:ring-red sm:w-3/4 lg:border-4 2xl:w-1/3"
								/>
								<br />
							</div>

							<div className="flex w-full flex-col items-center space-y-1">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="h-12 w-full rounded-xl border-2 border-slate-300 bg-slate-200 text-gray-800 caret-transparent focus:border-blue focus:outline-none focus:ring-blue dark:border-gray-700 dark:focus:border-red dark:focus:ring-red sm:w-3/4 lg:border-4 2xl:w-1/3"
								/>
								<br />
							</div>

							<div className="flex w-full flex-col items-center space-y-1">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									required
									className="h-32 w-full rounded-xl border-2 border-slate-300 bg-slate-200 text-gray-800 caret-transparent focus:border-blue focus:outline-none focus:ring-blue dark:border-gray-700 dark:focus:border-red dark:focus:ring-red sm:w-3/4 lg:border-4 2xl:w-1/3"
								/>
								<br />
							</div>

							<button
								type="submit"
								className="w-32 self-center bg-blue px-4 py-2 font-bold text-slate-200 hover:bg-blue-dark dark:bg-red dark:hover:bg-red-dark"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContactModal;
