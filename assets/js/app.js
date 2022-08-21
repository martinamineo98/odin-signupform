
!function checkIfPwdMatch() {
	const pwd1 = document.querySelector('#user_password')
	const pwd2 = document.querySelector('#user_confirmpassword')
	const pwds = [pwd1, pwd2]
	
	pwds.forEach((pwd) => {
		pwd.addEventListener('change', () => {
			if (pwd1.value.length > 0 || pwd2.value.length > 0) {
				if (pwd1.value != pwd2.value) {
					pwds.forEach((p) => p.classList.add('error'))
				}
			}
			
			if (pwd1.value == pwd2.value) {
				pwds.forEach((p) => p.classList.remove('error'))
			}
		})
	})
}()
