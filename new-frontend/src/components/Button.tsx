import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'ghost';
};

export function Button({ className, variant = 'solid', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
          'inline-flex items-center justify-center rounded-none border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300',
          variant === 'solid' && 'bg-matte-black text-warm-white border-matte-black hover:bg-deep-charcoal hover:border-[#c5a059]',
          variant === 'ghost' && 'bg-transparent text-matte-black border border-black/10 hover:border-[#c5a059] hover:text-matte-black',
          className
        )}
    />
  );
}
