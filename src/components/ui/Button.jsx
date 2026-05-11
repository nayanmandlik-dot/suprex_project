function Button({ children, as: Tag = 'button', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-[10.15px] bg-[#7717FF] px-[clamp(24px,2.5vw,36px)] py-[clamp(14px,1.39vw,20px)] font-sans text-[clamp(14px,1.39vw,20px)] font-bold leading-[1.21] text-[#FAFAFA] transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60';
  return (
    <Tag
      {...(Tag === 'button' ? { type: 'button' } : {})}
      className={`${base} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Button;
