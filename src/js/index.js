import '../sass/index.scss';
import Tween from 'gsap';

const progress = document.querySelector('#progress');
const currentValue = document.querySelector('#current-value');
const goal = 58000;
const current = 18137 + 14559;
const percent = (( current / goal ) * 100).toFixed(0);

/*
Value
 */
progress.innerHTML = `${percent}%`;
progress.setAttribute('aria-valuenow', percent);
currentValue.innerHTML = `${current}`;

/*
Display percent
 */
Tween.to(progress, {
	width: `${percent}%`,
});
Tween.to(currentValue, {
	width: `${percent}%`,
});

/*
Copy listener
 */
const boxes = document.querySelectorAll('.copy-box');
if (!!boxes.length) {
	for (let i = 0; i < boxes.length; i++) {
		const btn = boxes[i].querySelector('.copy-btn');
		const input = boxes[i].querySelector('.copy-input');

		btn.addEventListener('click', () => {
			input.focus();
			input.select();

			try {
				const successful = document.execCommand('copy');
				if (successful) {
					Tween.to(document.querySelector('#success'), {
						display: 'block',
					});
					setTimeout(() => {
						Tween.to(document.querySelector('#success'), {
							display: 'none',
						});
					}, 3000);
				}
			} catch (error) {
				Tween.to(document.querySelector('#danger'), {
					display: 'block',
				});
				setTimeout(() => {
					Tween.to(document.querySelector('#danger'), {
						display: 'none',
					});
				}, 3000);
			}
		});
	}
}

//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