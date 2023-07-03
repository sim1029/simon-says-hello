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

		const data = {
			firstName,
			lastName,
			email,
			message,
		};

		fetch(
			"https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmQwNTZiMDYzNDA0M2M1MjZiNTUzMCI_3D_pc",
			{
				method: "POST",
				mode: "cors",
				body: JSON.stringify(data),
			},
		)
			.then((response) => {
				// Handle response
				console.log(response);
				console.log("Form submitted successfully!");
				// Add your own code here to handle the response as needed
				closeModal();
			})
			.catch((error) => {
				// Handle error
				console.error("Error:", error);
				// Add your own code here to handle errors as needed
			});
	};

	return (
		<div>
			<button
				type="button"
				className="w-32 border-[3px] border-solid border-gray-700 py-2 px-4 font-bold hover:border-gray-900 hover:bg-slate-300 dark:border-slate-200 dark:hover:bg-gray-900"
				onClick={openModal}
			>
				Contact Me
			</button>

			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div className="flex w-4/5 flex-col rounded-lg border-4 border-solid border-blue bg-slate-300 duration-300 dark:border-red dark:bg-gray-700 md:w-3/5 lg:w-2/5">
						<div className="flex flex-row items-center justify-between px-4 pt-4">
							<div />
							<h3 className="text-2xl">What&apos;s on your mind?</h3>
							<span onClick={closeModal} className="cursor-pointer text-4xl">
								&times;
							</span>
						</div>
						<form
							onSubmit={handleSubmit}
							className="flex flex-col space-y-4 p-4"
						>
							<div className="flex flex-col space-y-1">
								<label htmlFor="firstName">First Name:</label>
								<input
									type="text"
									id="firstName"
									name="firstName"
									required
									className="border-2 border-slate-300 bg-slate-200 text-gray-800 focus:border-blue focus:outline-none focus:ring-blue dark:border-gray-700 dark:focus:border-red dark:focus:ring-red"
								/>
								<br />
							</div>

							<div className="flex flex-col space-y-1">
								<label htmlFor="lastName">Last Name:</label>
								<input
									type="text"
									id="lastName"
									name="lastName"
									required
									className="border-2 border-slate-300 bg-slate-200 text-gray-800 focus:border-blue focus:outline-none focus:ring-blue dark:border-gray-700 dark:focus:border-red dark:focus:ring-red"
								/>
								<br />
							</div>

							<div className="flex flex-col space-y-1">
								<label htmlFor="email">Email:</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="border-2 border-slate-300 bg-slate-200 text-gray-800 focus:border-blue focus:outline-none focus:ring-blue dark:border-gray-700 dark:focus:border-red dark:focus:ring-red"
								/>
								<br />
							</div>

							<div className="flex flex-col space-y-1">
								<label htmlFor="message">Message:</label>
								<textarea
									id="message"
									name="message"
									required
									className="max-h-40 overflow-y-auto border-2 border-slate-300 bg-slate-200 text-gray-800 focus:border-blue focus:outline-none focus:ring-blue dark:border-gray-700 dark:focus:border-red dark:focus:ring-red"
								/>
								<br />
							</div>

							<button
								type="submit"
								className="w-32 self-center bg-blue py-2 px-4 font-bold text-slate-200 hover:bg-blue-dark dark:bg-red dark:hover:bg-red-dark"
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
