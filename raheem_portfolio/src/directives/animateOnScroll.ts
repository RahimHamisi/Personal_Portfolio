import type { Directive, DirectiveBinding } from 'vue';

interface AnimateOnScrollOptions {
  enterClass: string;
  leaveClass?: string;
  once?: boolean;
}

const animateOnScroll: Directive<HTMLElement, AnimateOnScrollOptions> = {
  mounted(el: HTMLElement, binding: DirectiveBinding<AnimateOnScrollOptions>) {
    const { enterClass, leaveClass } = binding.value;

    const enterClasses = enterClass.split(' ');
    const leaveClasses = leaveClass ? leaveClass.split(' ') : [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove leave classes if previously applied
            el.classList.remove(...leaveClasses);

            // Force reflow to re-trigger animation
            void el.offsetWidth;

            // Apply enter animation
            el.classList.add(...enterClasses);
          } else {
            // Remove enter animation when out of view
            el.classList.remove(...enterClasses);

            if (leaveClasses.length > 0) {
              el.classList.add(...leaveClasses);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);
  },
};

export default animateOnScroll;
