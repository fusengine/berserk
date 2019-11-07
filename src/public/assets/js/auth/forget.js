window.addEventListener('DOMContentLoaded', () => {
	const forget = document.querySelector('#forget')

	forget.addEventListener('click', () => {
		Swal.fire({
			icon: 'question',
			title: 'Enter your email address',
			input: 'email',
			inputPlaceholder: 'Email address to reset password!',
			confirmButtonText: `<i class="far fa-paper-plane"></i> Send`,
		}).then(res => {
			const email = res.value

			if (email) {
				axios
					.post('/users/forget-password', { email })
					.then(res => {
						Swal.fire({
							icon: 'success',
							title: 'Look your inbox mail please.',
							text: 'Do you have receive instruction to reset password.',
						})
					})
					.catch(error => {
						Swal.fire({
							icon: 'error',
							title: 'Error!',
							text: "This address email don't exist!",
						})
					})
			}
		})
	})
})
